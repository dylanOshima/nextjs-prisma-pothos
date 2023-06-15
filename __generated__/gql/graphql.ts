/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string | number; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type CreateDraftInput = {
  authorEmail: Scalars['String']['input'];
  content?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};

export type CreateDraftPayload = {
  __typename?: 'CreateDraftPayload';
  newPost: Post;
};

export type DeletePostInput = {
  id: Scalars['ID']['input'];
};

export type DeletePostPayload = {
  __typename?: 'DeletePostPayload';
  success: Scalars['Boolean']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createDraft: CreateDraftPayload;
  deletePost: DeletePostPayload;
  publish: PublishPayload;
  signupUser: SignupUserPayload;
};


export type MutationCreateDraftArgs = {
  input: CreateDraftInput;
};


export type MutationDeletePostArgs = {
  input: DeletePostInput;
};


export type MutationPublishArgs = {
  input: PublishInput;
};


export type MutationSignupUserArgs = {
  input: SignupUserInput;
};

export type Node = {
  id: Scalars['ID']['output'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type Post = Node & {
  __typename?: 'Post';
  author: User;
  content?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  published: Scalars['Boolean']['output'];
  title: Scalars['String']['output'];
};

export type PublishInput = {
  id: Scalars['ID']['input'];
};

export type PublishPayload = {
  __typename?: 'PublishPayload';
  post: Post;
};

export type Query = {
  __typename?: 'Query';
  drafts: Array<Post>;
  filterPosts: Array<Post>;
  node?: Maybe<Node>;
  nodes: Array<Maybe<Node>>;
  post?: Maybe<Post>;
  posts: QueryPostsConnection;
};


export type QueryFilterPostsArgs = {
  searchString?: InputMaybe<Scalars['String']['input']>;
};


export type QueryNodeArgs = {
  id: Scalars['ID']['input'];
};


export type QueryNodesArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type QueryPostArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPostsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryPostsConnection = {
  __typename?: 'QueryPostsConnection';
  edges: Array<Maybe<QueryPostsConnectionEdge>>;
  pageInfo: PageInfo;
};

export type QueryPostsConnectionEdge = {
  __typename?: 'QueryPostsConnectionEdge';
  cursor: Scalars['String']['output'];
  node: Post;
};

export type SignupUserInput = {
  email: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};

export type SignupUserPayload = {
  __typename?: 'SignupUserPayload';
  newPost: User;
};

export type User = Node & {
  __typename?: 'User';
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  posts: Array<Post>;
};
