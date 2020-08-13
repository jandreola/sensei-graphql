import { gql } from "../config/deps.ts";

export const BusinessUnitTypes = (gql as any)`
type BusinessUnit {
  BusinessUnitID: ID
	Name: String
}
extend type Query {
	getBU(id: Int): BusinessUnit
	businessUnits: [BusinessUnit]!
}
`;