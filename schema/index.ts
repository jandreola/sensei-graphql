
import { gql } from "../config/deps.ts";
import { UserTypes } from "./user.ts";
import { BusinessUnitTypes } from "./business-unit.ts";


export const Schema = (gql as any)`
    type Query{
        _empty: String
    }
    type Mutation {
        _empty: String
    }
		${UserTypes}
		${BusinessUnitTypes}
`;