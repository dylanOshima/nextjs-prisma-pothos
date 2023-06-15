import prisma from "../prisma";
import builder from "./builder";

export const User = builder.prismaNode("User", {
  id: { field: "id" },
  fields: (t) => ({
    email: t.exposeString("email", { nullable: true }),
    name: t.exposeString("name", { nullable: true }),
    posts: t.relation("posts"),
  }),
});

builder.relayMutationField(
  "signupUser",
  {
    inputFields: (t) => ({
      name: t.string({ required: false }),
      email: t.string({ required: true }),
    }),
  },
  {
    resolve: async (query, args, _ctx) => ({
      newUser: prisma.user.create({
        ...query,
        data: {
          email: args.input.email,
          name: args.input.name,
        },
      }),
    }),
  },
  {
    outputFields: (t) => ({
      newPost: t.expose("newUser", { type: User }),
    }),
  }
);
