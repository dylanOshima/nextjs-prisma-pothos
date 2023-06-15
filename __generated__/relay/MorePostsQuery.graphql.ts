/**
 * @generated SignedSource<<ac22ceedd5a644001559f246cf2811e2>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type MorePostsQuery$variables = {
  before?: string | null;
};
export type MorePostsQuery$data = {
  readonly posts: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly author: {
          readonly email: string;
          readonly name: string | null;
        };
        readonly content: string;
        readonly id: string;
        readonly published: boolean;
        readonly title: string;
      };
    } | null>;
  };
};
export type MorePostsQuery = {
  response: MorePostsQuery$data;
  variables: MorePostsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "before"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "before",
    "variableName": "before"
  },
  {
    "kind": "Literal",
    "name": "first",
    "value": 5
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "email",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "content",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "published",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "MorePostsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "QueryPostsConnection",
        "kind": "LinkedField",
        "name": "posts",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "QueryPostsConnectionEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Post",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  (v3/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "User",
                    "kind": "LinkedField",
                    "name": "author",
                    "plural": false,
                    "selections": [
                      (v4/*: any*/),
                      {
                        "kind": "RequiredField",
                        "field": (v5/*: any*/),
                        "action": "THROW",
                        "path": "posts.edges.node.author.email"
                      }
                    ],
                    "storageKey": null
                  },
                  {
                    "kind": "RequiredField",
                    "field": (v6/*: any*/),
                    "action": "THROW",
                    "path": "posts.edges.node.content"
                  },
                  (v7/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "MorePostsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "QueryPostsConnection",
        "kind": "LinkedField",
        "name": "posts",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "QueryPostsConnectionEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Post",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  (v3/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "User",
                    "kind": "LinkedField",
                    "name": "author",
                    "plural": false,
                    "selections": [
                      (v4/*: any*/),
                      (v5/*: any*/),
                      (v2/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v6/*: any*/),
                  (v7/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "4a2cb5f5ccb466bc1a01d0d97af6df50",
    "id": null,
    "metadata": {},
    "name": "MorePostsQuery",
    "operationKind": "query",
    "text": "query MorePostsQuery(\n  $before: String\n) {\n  posts(first: 5, before: $before) {\n    edges {\n      node {\n        id\n        title\n        author {\n          name\n          email\n          id\n        }\n        content\n        published\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "b820f7361819685b8f6a631cb2e3676f";

export default node;
