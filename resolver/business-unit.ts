import api from "../helpers/api.ts";

export const BusinessUnitResolvers = {
	Query: {
		getBU: async (parent: any, { id }: any, context: any, info: any) => {
			return await api.businessUnitById(id);
		},
		businessUnits: async () => {
			return await api.businessUnits()
		}
	}
};