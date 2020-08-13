import { cookie } from "../config/auth.ts";

const api = async (path: string, method: string = 'GET'): Promise<object[]> => {
	return await fetch(`http://intranet-test.klick.com/api/${path}`, {
		"headers": {
			"accept": "application/json, text/*",
			"accept-language": "en-US,en;q=0.9",
			"cache-control": "no-cache",
			"pragma": "no-cache",
			"sec-fetch-dest": "empty",
			"sec-fetch-mode": "cors",
			"sec-fetch-site": "same-origin",
			"cookie": cookie
		},
		"referrer": "https://intranet-test.klick.com/conductor",
		"referrerPolicy": "no-referrer-when-downgrade",
		"body": null,
		"method": method,
		"mode": "cors"
	})
		.then(async (r) => {
			const data = await r.json();
			return data.Entries;
		})
}

const _ = Object.create(null)

export default {
	users: api.bind(_, 'User/Search'),
	userById: async (id: number) => await api(`User.json?UserID=${id}&IncludeHidden=true`),
	businessUnits: api.bind(_, 'BusinessUnit.json?ForAutocompleter=true'),
	businessUnitById: async (id: number) => {
		const entries = await api(`BusinessUnit.json?BusinessUnitID=${id}`);

		return entries[0];
	}
}