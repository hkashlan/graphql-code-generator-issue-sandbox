import * as Types from './types';

import * as Operations from './document.graphql';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type UserQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type UserQuery = (
  { __typename?: 'Query' }
  & { user: (
    { __typename?: 'User' }
    & Pick<Types.User, 'id' | 'username' | 'email'>
  ) }
);


  @Injectable({
    providedIn: 'root'
  })
  export class UserGQL extends Apollo.Query<UserQuery, UserQueryVariables> {
    document = UserDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }