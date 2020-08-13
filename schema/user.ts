import { gql } from "../config/deps.ts";

export const UserTypes = (gql as any)`
type User {
	BusinessUnit: BusinessUnit!
  FirstName: String
	LastName: String
	Email: String
	Title: String

}
input UserInput {
  id: Int
}
type ResolveType {
  done: Boolean
}
extend type Query {
	users(id: Int): [User]!
}
`;