import api from "../helpers/api.ts";

export const UserResolvers = {
	Query: {
		users: async (_: any, {id}: any) => {
			if (!id) {
				return await api.users();
			}
			return await api.userById(id);
		},
	},
	User: {
		BusinessUnit: async ({ BusinessUnitID }: any) => {
			const bu = await api.businessUnitById(BusinessUnitID);
			return bu;
		}
	}
};