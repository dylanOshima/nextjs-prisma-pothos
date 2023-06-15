import {
  ResolveCursorConnectionArgs,
  resolveCursorConnection,
} from "@pothos/plugin-relay";
import prisma from "../prisma";
import builder from "./builder";

export const Post = builder.prismaNode("Post", {
  id: { field: "id" },
  fields: (t) => ({
    title: t.exposeString("title"),
    content: t.exposeString("content", { nullable: true }),
    published: t.exposeBoolean("published"),
    author: t.relation("author"),
  }),
});

builder.queryField("post", (t) =>
  t.prismaField({
    type: "Post",
    args: {
      id: t.arg.id({ required: true }),
    },
    nullable: true,
    resolve: async (query, _parent, args, _info) =>
      prisma.post.findUnique({
        ...query,
        where: {
          id: String(args.id),
        },
      }),
  })
);

builder.queryField("posts", (t) =>
  t.connection({
    type: Post,
    resolve: (_, args) =>
      resolveCursorConnection(
        {
          args,
          toCursor: (post) => post.createdAt.toISOString(),
        },
        // Manually defining the arg type here is required
        // so that typescript can correctly infer the return value
        ({ before, after, limit, inverted }: ResolveCursorConnectionArgs) =>
          prisma.post.findMany({
            take: limit,
            where: {
              createdAt: {
                lt: before != null ? new Date(before) : undefined,
                gt: after != null ? new Date(after) : undefined,
              },
            },
            orderBy: {
              createdAt: inverted ? "desc" : "asc",
            },
          })
      ),
  })
);

builder.queryField("drafts", (t) =>
  t.prismaField({
    type: ["Post"],
    resolve: async (query, _parent, _args, _info) =>
      prisma.post.findMany({
        ...query,
        where: { published: false },
      }),
  })
);

builder.queryField("filterPosts", (t) =>
  t.prismaField({
    type: ["Post"],
    args: {
      searchString: t.arg.string({ required: false }),
    },
    resolve: async (query, _parent, args, _info) => {
      const or = args.searchString
        ? {
            OR: [
              { title: { contains: args.searchString } },
              { content: { contains: args.searchString } },
            ],
          }
        : {};
      return prisma.post.findMany({
        ...query,
        where: { ...or },
      });
    },
  })
);

// ***** MUTATIONS

builder.relayMutationField(
  "deletePost",
  {
    inputFields: (t) => ({
      id: t.id({ required: true }),
    }),
  },
  {
    resolve: async (_root, args, _ctx) => {
      const postExists = prisma.post.findUnique({
        where: {
          id: String(args.input.id),
        },
      });
      if ((await postExists) != null) {
        prisma.post.delete({
          where: {
            id: String(args.input.id),
          },
        });

        return { success: true };
      }

      return { success: false };
    },
  },
  {
    outputFields: (t) => ({
      success: t.boolean({
        resolve: (result) => result.success,
      }),
    }),
  }
);

builder.relayMutationField(
  "publish",
  {
    inputFields: (t) => ({
      id: t.id({ required: true }),
    }),
  },
  {
    resolve: async (query, args, _ctx) => ({
      post: prisma.post.update({
        ...query,
        where: {
          id: String(args.input.id),
        },
        data: {
          published: true,
        },
      }),
    }),
  },
  {
    outputFields: (t) => ({ post: t.expose("post", { type: Post }) }),
  }
);

builder.relayMutationField(
  "createDraft",
  {
    inputFields: (t) => ({
      title: t.string({ required: true }),
      content: t.string(),
      authorEmail: t.string({ required: true }),
    }),
  },
  {
    resolve: async (query, args, _ctx) => ({
      post: prisma.post.create({
        ...query,
        data: {
          title: args.input.title,
          content: args.input.content,
          author: {
            connect: { email: args.input.authorEmail },
          },
        },
      }),
    }),
  },
  {
    outputFields: (t) => ({
      newPost: t.expose("post", { type: Post }),
    }),
  }
);
