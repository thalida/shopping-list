/* eslint-disable */
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * The `DateTime` scalar type represents a DateTime
   * value as specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  DateTime: any;
  /**
   * The `GenericScalar` scalar type represents a generic
   * GraphQL scalar value that could be:
   * String, Boolean, Int, Float, List or Object.
   */
  GenericScalar: any;
  /**
   * Leverages the internal Python implementation of UUID (uuid.UUID) to provide native UUID objects
   * in fields, resolvers and input.
   */
  UUID: any;
};

export type CreateItemInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
};

export type CreateItemPayload = {
  __typename?: 'CreateItemPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  item?: Maybe<ItemNode>;
};

export type CreateProjectInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
};

export type CreateProjectItemInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
};

export type CreateProjectItemPayload = {
  __typename?: 'CreateProjectItemPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  projectItem?: Maybe<ProjectItemNode>;
};

export type CreateProjectPayload = {
  __typename?: 'CreateProjectPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  project?: Maybe<ProjectNode>;
};

export type CreateShoppingListInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
};

export type CreateShoppingListPayload = {
  __typename?: 'CreateShoppingListPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  shoppingList?: Maybe<ShoppingListNode>;
};

export type CreateStoreInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
};

export type CreateStorePayload = {
  __typename?: 'CreateStorePayload';
  clientMutationId?: Maybe<Scalars['String']>;
  store?: Maybe<StoreNode>;
};

export type CreateStoreSectionInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
};

export type CreateStoreSectionPayload = {
  __typename?: 'CreateStoreSectionPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  storeSection?: Maybe<StoreSectionNode>;
};

export type CreateTeamInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
};

export type CreateTeamPayload = {
  __typename?: 'CreateTeamPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  team?: Maybe<TeamNode>;
};

export type ItemNode = Node & {
  __typename?: 'ItemNode';
  createdAt: Scalars['DateTime'];
  /** The ID of the object */
  id: Scalars['ID'];
  name: Scalars['String'];
  projectSet: ProjectNodeConnection;
  projectitemSet: ProjectItemNodeConnection;
  storeSections: StoreSectionNodeConnection;
  substitutes: ItemNodeConnection;
  substitutions: ItemNodeConnection;
  team: TeamNode;
  uid: Scalars['UUID'];
  updatedAt: Scalars['DateTime'];
};


export type ItemNodeProjectSetArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  name_Icontains?: InputMaybe<Scalars['String']>;
  name_Istartswith?: InputMaybe<Scalars['String']>;
  offset?: InputMaybe<Scalars['Int']>;
  team?: InputMaybe<Scalars['ID']>;
  uid?: InputMaybe<Scalars['UUID']>;
  url?: InputMaybe<Scalars['String']>;
  url_Icontains?: InputMaybe<Scalars['String']>;
  url_Istartswith?: InputMaybe<Scalars['String']>;
};


export type ItemNodeProjectitemSetArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  isChecked?: InputMaybe<Scalars['Boolean']>;
  item?: InputMaybe<Scalars['ID']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  project?: InputMaybe<Scalars['ID']>;
  shoppingList?: InputMaybe<Scalars['ID']>;
  uid?: InputMaybe<Scalars['UUID']>;
};


export type ItemNodeStoreSectionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  name_Icontains?: InputMaybe<Scalars['String']>;
  name_Istartswith?: InputMaybe<Scalars['String']>;
  offset?: InputMaybe<Scalars['Int']>;
  store?: InputMaybe<Scalars['ID']>;
  uid?: InputMaybe<Scalars['UUID']>;
};


export type ItemNodeSubstitutesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  name_Icontains?: InputMaybe<Scalars['String']>;
  name_Istartswith?: InputMaybe<Scalars['String']>;
  offset?: InputMaybe<Scalars['Int']>;
  team?: InputMaybe<Scalars['ID']>;
  uid?: InputMaybe<Scalars['UUID']>;
};


export type ItemNodeSubstitutionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  name_Icontains?: InputMaybe<Scalars['String']>;
  name_Istartswith?: InputMaybe<Scalars['String']>;
  offset?: InputMaybe<Scalars['Int']>;
  team?: InputMaybe<Scalars['ID']>;
  uid?: InputMaybe<Scalars['UUID']>;
};

export type ItemNodeConnection = {
  __typename?: 'ItemNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ItemNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `ItemNode` and its cursor. */
export type ItemNodeEdge = {
  __typename?: 'ItemNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<ItemNode>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createItem?: Maybe<CreateItemPayload>;
  createProject?: Maybe<CreateProjectPayload>;
  createProjectItem?: Maybe<CreateProjectItemPayload>;
  createShoppingList?: Maybe<CreateShoppingListPayload>;
  createStore?: Maybe<CreateStorePayload>;
  createStoreSection?: Maybe<CreateStoreSectionPayload>;
  createTeam?: Maybe<CreateTeamPayload>;
  refreshToken?: Maybe<RefreshPayload>;
  registerSocial?: Maybe<RegisterFromSocialPayload>;
  revokeToken?: Maybe<RevokePayload>;
  /** Obtain JSON Web Token mutation */
  tokenAuth?: Maybe<ObtainJsonWebTokenPayload>;
  updateItem?: Maybe<UpdateItemPayload>;
  updateProject?: Maybe<UpdateProjectPayload>;
  updateProjectItem?: Maybe<UpdateProjectItemPayload>;
  updateShoppingList?: Maybe<UpdateShoppingListPayload>;
  updateStore?: Maybe<UpdateStorePayload>;
  updateStoreSection?: Maybe<UpdateStoreSectionPayload>;
  updateTeam?: Maybe<UpdateTeamPayload>;
  verifyToken?: Maybe<VerifyPayload>;
};


export type MutationCreateItemArgs = {
  input: CreateItemInput;
};


export type MutationCreateProjectArgs = {
  input: CreateProjectInput;
};


export type MutationCreateProjectItemArgs = {
  input: CreateProjectItemInput;
};


export type MutationCreateShoppingListArgs = {
  input: CreateShoppingListInput;
};


export type MutationCreateStoreArgs = {
  input: CreateStoreInput;
};


export type MutationCreateStoreSectionArgs = {
  input: CreateStoreSectionInput;
};


export type MutationCreateTeamArgs = {
  input: CreateTeamInput;
};


export type MutationRefreshTokenArgs = {
  input: RefreshInput;
};


export type MutationRegisterSocialArgs = {
  input: RegisterFromSocialInput;
};


export type MutationRevokeTokenArgs = {
  input: RevokeInput;
};


export type MutationTokenAuthArgs = {
  input: ObtainJsonWebTokenInput;
};


export type MutationUpdateItemArgs = {
  input: UpdateItemInput;
};


export type MutationUpdateProjectArgs = {
  input: UpdateProjectInput;
};


export type MutationUpdateProjectItemArgs = {
  input: UpdateProjectItemInput;
};


export type MutationUpdateShoppingListArgs = {
  input: UpdateShoppingListInput;
};


export type MutationUpdateStoreArgs = {
  input: UpdateStoreInput;
};


export type MutationUpdateStoreSectionArgs = {
  input: UpdateStoreSectionInput;
};


export type MutationUpdateTeamArgs = {
  input: UpdateTeamInput;
};


export type MutationVerifyTokenArgs = {
  input: VerifyInput;
};

/** An object with an ID */
export type Node = {
  /** The ID of the object */
  id: Scalars['ID'];
};

export type ObtainJsonWebTokenInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  username: Scalars['String'];
};

/** Obtain JSON Web Token mutation */
export type ObtainJsonWebTokenPayload = {
  __typename?: 'ObtainJSONWebTokenPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  payload: Scalars['GenericScalar'];
  refreshExpiresIn: Scalars['Int'];
  token: Scalars['String'];
};

/** The Relay compliant `PageInfo` type, containing data necessary to paginate this connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

export type ProjectItemNode = Node & {
  __typename?: 'ProjectItemNode';
  createdAt: Scalars['DateTime'];
  /** The ID of the object */
  id: Scalars['ID'];
  isChecked: Scalars['Boolean'];
  item: ItemNode;
  project: ProjectNode;
  quantity: Scalars['Int'];
  shoppingList: ShoppingListNode;
  uid: Scalars['UUID'];
  updatedAt: Scalars['DateTime'];
};

export type ProjectItemNodeConnection = {
  __typename?: 'ProjectItemNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ProjectItemNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `ProjectItemNode` and its cursor. */
export type ProjectItemNodeEdge = {
  __typename?: 'ProjectItemNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<ProjectItemNode>;
};

export type ProjectNode = Node & {
  __typename?: 'ProjectNode';
  createdAt: Scalars['DateTime'];
  /** The ID of the object */
  id: Scalars['ID'];
  items: ItemNodeConnection;
  name: Scalars['String'];
  projectitemSet: ProjectItemNodeConnection;
  team: TeamNode;
  uid: Scalars['UUID'];
  updatedAt: Scalars['DateTime'];
  url: Scalars['String'];
};


export type ProjectNodeItemsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  name_Icontains?: InputMaybe<Scalars['String']>;
  name_Istartswith?: InputMaybe<Scalars['String']>;
  offset?: InputMaybe<Scalars['Int']>;
  team?: InputMaybe<Scalars['ID']>;
  uid?: InputMaybe<Scalars['UUID']>;
};


export type ProjectNodeProjectitemSetArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  isChecked?: InputMaybe<Scalars['Boolean']>;
  item?: InputMaybe<Scalars['ID']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  project?: InputMaybe<Scalars['ID']>;
  shoppingList?: InputMaybe<Scalars['ID']>;
  uid?: InputMaybe<Scalars['UUID']>;
};

export type ProjectNodeConnection = {
  __typename?: 'ProjectNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ProjectNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `ProjectNode` and its cursor. */
export type ProjectNodeEdge = {
  __typename?: 'ProjectNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<ProjectNode>;
};

export type Query = {
  __typename?: 'Query';
  item?: Maybe<ItemNode>;
  items?: Maybe<ItemNodeConnection>;
  me?: Maybe<UserNode>;
  project?: Maybe<ProjectNode>;
  projectItem?: Maybe<ProjectItemNode>;
  projectItems?: Maybe<ProjectItemNodeConnection>;
  projects?: Maybe<ProjectNodeConnection>;
  shoppingList?: Maybe<ShoppingListNode>;
  shoppingLists?: Maybe<ShoppingListNodeConnection>;
  store?: Maybe<StoreNode>;
  storeSection?: Maybe<StoreSectionNode>;
  storeSections?: Maybe<StoreSectionNodeConnection>;
  stores?: Maybe<StoreNodeConnection>;
  team?: Maybe<TeamNode>;
  teams?: Maybe<TeamNodeConnection>;
  user?: Maybe<UserNode>;
};


export type QueryItemArgs = {
  id: Scalars['ID'];
};


export type QueryItemsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  name_Icontains?: InputMaybe<Scalars['String']>;
  name_Istartswith?: InputMaybe<Scalars['String']>;
  offset?: InputMaybe<Scalars['Int']>;
  team?: InputMaybe<Scalars['ID']>;
  uid?: InputMaybe<Scalars['UUID']>;
};


export type QueryProjectArgs = {
  id: Scalars['ID'];
};


export type QueryProjectItemArgs = {
  id: Scalars['ID'];
};


export type QueryProjectItemsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  isChecked?: InputMaybe<Scalars['Boolean']>;
  item?: InputMaybe<Scalars['ID']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  project?: InputMaybe<Scalars['ID']>;
  shoppingList?: InputMaybe<Scalars['ID']>;
  uid?: InputMaybe<Scalars['UUID']>;
};


export type QueryProjectsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  name_Icontains?: InputMaybe<Scalars['String']>;
  name_Istartswith?: InputMaybe<Scalars['String']>;
  offset?: InputMaybe<Scalars['Int']>;
  team?: InputMaybe<Scalars['ID']>;
  uid?: InputMaybe<Scalars['UUID']>;
  url?: InputMaybe<Scalars['String']>;
  url_Icontains?: InputMaybe<Scalars['String']>;
  url_Istartswith?: InputMaybe<Scalars['String']>;
};


export type QueryShoppingListArgs = {
  id: Scalars['ID'];
};


export type QueryShoppingListsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  name_Icontains?: InputMaybe<Scalars['String']>;
  name_Istartswith?: InputMaybe<Scalars['String']>;
  offset?: InputMaybe<Scalars['Int']>;
  team?: InputMaybe<Scalars['ID']>;
  uid?: InputMaybe<Scalars['UUID']>;
};


export type QueryStoreArgs = {
  id: Scalars['ID'];
};


export type QueryStoreSectionArgs = {
  id: Scalars['ID'];
};


export type QueryStoreSectionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  name_Icontains?: InputMaybe<Scalars['String']>;
  name_Istartswith?: InputMaybe<Scalars['String']>;
  offset?: InputMaybe<Scalars['Int']>;
  store?: InputMaybe<Scalars['ID']>;
  uid?: InputMaybe<Scalars['UUID']>;
};


export type QueryStoresArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  name_Icontains?: InputMaybe<Scalars['String']>;
  name_Istartswith?: InputMaybe<Scalars['String']>;
  offset?: InputMaybe<Scalars['Int']>;
  uid?: InputMaybe<Scalars['UUID']>;
};


export type QueryTeamArgs = {
  id: Scalars['ID'];
};


export type QueryTeamsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  offset?: InputMaybe<Scalars['Int']>;
  uid?: InputMaybe<Scalars['UUID']>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};

export type RefreshInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
};

export type RefreshPayload = {
  __typename?: 'RefreshPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  payload: Scalars['GenericScalar'];
  refreshExpiresIn: Scalars['Int'];
  token: Scalars['String'];
};

export type RegisterFromSocialInput = {
  accessToken: Scalars['String'];
  clientMutationId?: InputMaybe<Scalars['String']>;
  socialBackend: Scalars['String'];
};

export type RegisterFromSocialPayload = {
  __typename?: 'RegisterFromSocialPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  user?: Maybe<UserNode>;
};

export type RevokeInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  refreshToken?: InputMaybe<Scalars['String']>;
};

export type RevokePayload = {
  __typename?: 'RevokePayload';
  clientMutationId?: Maybe<Scalars['String']>;
  revoked: Scalars['Int'];
};

export type ShoppingListNode = Node & {
  __typename?: 'ShoppingListNode';
  createdAt: Scalars['DateTime'];
  /** The ID of the object */
  id: Scalars['ID'];
  name: Scalars['String'];
  projectitemSet: ProjectItemNodeConnection;
  team: TeamNode;
  uid: Scalars['UUID'];
  updatedAt: Scalars['DateTime'];
};


export type ShoppingListNodeProjectitemSetArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  isChecked?: InputMaybe<Scalars['Boolean']>;
  item?: InputMaybe<Scalars['ID']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  project?: InputMaybe<Scalars['ID']>;
  shoppingList?: InputMaybe<Scalars['ID']>;
  uid?: InputMaybe<Scalars['UUID']>;
};

export type ShoppingListNodeConnection = {
  __typename?: 'ShoppingListNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ShoppingListNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `ShoppingListNode` and its cursor. */
export type ShoppingListNodeEdge = {
  __typename?: 'ShoppingListNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<ShoppingListNode>;
};

export type StoreNode = Node & {
  __typename?: 'StoreNode';
  createdAt: Scalars['DateTime'];
  /** The ID of the object */
  id: Scalars['ID'];
  name: Scalars['String'];
  sections: StoreSectionNodeConnection;
  uid: Scalars['UUID'];
  updatedAt: Scalars['DateTime'];
  url: Scalars['String'];
};


export type StoreNodeSectionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  name_Icontains?: InputMaybe<Scalars['String']>;
  name_Istartswith?: InputMaybe<Scalars['String']>;
  offset?: InputMaybe<Scalars['Int']>;
  store?: InputMaybe<Scalars['ID']>;
  uid?: InputMaybe<Scalars['UUID']>;
};

export type StoreNodeConnection = {
  __typename?: 'StoreNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<StoreNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `StoreNode` and its cursor. */
export type StoreNodeEdge = {
  __typename?: 'StoreNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<StoreNode>;
};

export type StoreSectionNode = Node & {
  __typename?: 'StoreSectionNode';
  createdAt: Scalars['DateTime'];
  /** The ID of the object */
  id: Scalars['ID'];
  items: ItemNodeConnection;
  name: Scalars['String'];
  store: StoreNode;
  uid: Scalars['UUID'];
  updatedAt: Scalars['DateTime'];
};


export type StoreSectionNodeItemsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  name_Icontains?: InputMaybe<Scalars['String']>;
  name_Istartswith?: InputMaybe<Scalars['String']>;
  offset?: InputMaybe<Scalars['Int']>;
  team?: InputMaybe<Scalars['ID']>;
  uid?: InputMaybe<Scalars['UUID']>;
};

export type StoreSectionNodeConnection = {
  __typename?: 'StoreSectionNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<StoreSectionNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `StoreSectionNode` and its cursor. */
export type StoreSectionNodeEdge = {
  __typename?: 'StoreSectionNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<StoreSectionNode>;
};

export type TeamNode = Node & {
  __typename?: 'TeamNode';
  createdAt: Scalars['DateTime'];
  /** The ID of the object */
  id: Scalars['ID'];
  itemSet: ItemNodeConnection;
  members: UserNodeConnection;
  name: Scalars['String'];
  owner: UserNode;
  projects: ProjectNodeConnection;
  shoppingLists: ShoppingListNodeConnection;
  uid: Scalars['UUID'];
  updatedAt: Scalars['DateTime'];
};


export type TeamNodeItemSetArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  name_Icontains?: InputMaybe<Scalars['String']>;
  name_Istartswith?: InputMaybe<Scalars['String']>;
  offset?: InputMaybe<Scalars['Int']>;
  team?: InputMaybe<Scalars['ID']>;
  uid?: InputMaybe<Scalars['UUID']>;
};


export type TeamNodeMembersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  uid?: InputMaybe<Scalars['UUID']>;
  username?: InputMaybe<Scalars['String']>;
};


export type TeamNodeProjectsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  name_Icontains?: InputMaybe<Scalars['String']>;
  name_Istartswith?: InputMaybe<Scalars['String']>;
  offset?: InputMaybe<Scalars['Int']>;
  team?: InputMaybe<Scalars['ID']>;
  uid?: InputMaybe<Scalars['UUID']>;
  url?: InputMaybe<Scalars['String']>;
  url_Icontains?: InputMaybe<Scalars['String']>;
  url_Istartswith?: InputMaybe<Scalars['String']>;
};


export type TeamNodeShoppingListsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  name_Icontains?: InputMaybe<Scalars['String']>;
  name_Istartswith?: InputMaybe<Scalars['String']>;
  offset?: InputMaybe<Scalars['Int']>;
  team?: InputMaybe<Scalars['ID']>;
  uid?: InputMaybe<Scalars['UUID']>;
};

export type TeamNodeConnection = {
  __typename?: 'TeamNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<TeamNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `TeamNode` and its cursor. */
export type TeamNodeEdge = {
  __typename?: 'TeamNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<TeamNode>;
};

export type UpdateItemInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  substitutions?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
  uid: Scalars['UUID'];
};

export type UpdateItemPayload = {
  __typename?: 'UpdateItemPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  item?: Maybe<ItemNode>;
};

export type UpdateProjectInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  uid: Scalars['UUID'];
  url?: InputMaybe<Scalars['String']>;
};

export type UpdateProjectItemInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  isChecked?: InputMaybe<Scalars['Boolean']>;
  quantity?: InputMaybe<Scalars['Int']>;
  uid: Scalars['UUID'];
};

export type UpdateProjectItemPayload = {
  __typename?: 'UpdateProjectItemPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  projectItem?: Maybe<ProjectItemNode>;
};

export type UpdateProjectPayload = {
  __typename?: 'UpdateProjectPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  project?: Maybe<ProjectNode>;
};

export type UpdateShoppingListInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  uid: Scalars['UUID'];
};

export type UpdateShoppingListPayload = {
  __typename?: 'UpdateShoppingListPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  shoppingList?: Maybe<ShoppingListNode>;
};

export type UpdateStoreInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  uid: Scalars['UUID'];
  url?: InputMaybe<Scalars['String']>;
};

export type UpdateStorePayload = {
  __typename?: 'UpdateStorePayload';
  clientMutationId?: Maybe<Scalars['String']>;
  store?: Maybe<StoreNode>;
};

export type UpdateStoreSectionInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  uid: Scalars['UUID'];
};

export type UpdateStoreSectionPayload = {
  __typename?: 'UpdateStoreSectionPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  storeSection?: Maybe<StoreSectionNode>;
};

export type UpdateTeamInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  uid: Scalars['UUID'];
};

export type UpdateTeamPayload = {
  __typename?: 'UpdateTeamPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  team?: Maybe<TeamNode>;
};

export type UserNode = Node & {
  __typename?: 'UserNode';
  dateJoined: Scalars['DateTime'];
  firstName: Scalars['String'];
  /** The ID of the object */
  id: Scalars['ID'];
  /** Designates whether this user should be treated as active. Unselect this instead of deleting accounts. */
  isActive: Scalars['Boolean'];
  /** Designates whether the user can log into this admin site. */
  isStaff: Scalars['Boolean'];
  /** Designates that this user has all permissions without explicitly assigning them. */
  isSuperuser: Scalars['Boolean'];
  lastLogin?: Maybe<Scalars['DateTime']>;
  lastName: Scalars['String'];
  ownedTeams: TeamNodeConnection;
  teams: TeamNodeConnection;
  uid: Scalars['UUID'];
  /** Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only. */
  username: Scalars['String'];
};


export type UserNodeOwnedTeamsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  offset?: InputMaybe<Scalars['Int']>;
  uid?: InputMaybe<Scalars['UUID']>;
};


export type UserNodeTeamsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  offset?: InputMaybe<Scalars['Int']>;
  uid?: InputMaybe<Scalars['UUID']>;
};

export type UserNodeConnection = {
  __typename?: 'UserNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<UserNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `UserNode` and its cursor. */
export type UserNodeEdge = {
  __typename?: 'UserNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<UserNode>;
};

export type VerifyInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
};

export type VerifyPayload = {
  __typename?: 'VerifyPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  payload: Scalars['GenericScalar'];
};

export type VerifyTokenMutationVariables = Exact<{
  token: Scalars['String'];
}>;


export type VerifyTokenMutation = { __typename?: 'Mutation', verifyToken?: { __typename?: 'VerifyPayload', payload: any } | null };

export type RegisterSocialMutationVariables = Exact<{
  accessToken: Scalars['String'];
  socialBackend: Scalars['String'];
}>;


export type RegisterSocialMutation = { __typename?: 'Mutation', registerSocial?: { __typename?: 'RegisterFromSocialPayload', token?: string | null } | null };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'UserNode', uid: any, username: string } | null };


export const VerifyTokenDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"VerifyToken"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"token"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"verifyToken"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"token"},"value":{"kind":"Variable","name":{"kind":"Name","value":"token"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"payload"}}]}}]}}]} as unknown as DocumentNode<VerifyTokenMutation, VerifyTokenMutationVariables>;
export const RegisterSocialDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RegisterSocial"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"accessToken"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"socialBackend"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"registerSocial"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"accessToken"},"value":{"kind":"Variable","name":{"kind":"Name","value":"accessToken"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"socialBackend"},"value":{"kind":"Variable","name":{"kind":"Name","value":"socialBackend"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"}}]}}]}}]} as unknown as DocumentNode<RegisterSocialMutation, RegisterSocialMutationVariables>;
export const MeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]} as unknown as DocumentNode<MeQuery, MeQueryVariables>;