import { gql } from 'apollo-angular';

export const UserDocument =  gql`query user {
    user(id: 1) {
        id
        username
        email
    }
}
`;
