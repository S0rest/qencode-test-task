import { URL_DEV_API } from '@/util/const'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'

const baseQuery = fetchBaseQuery({
	baseUrl: URL_DEV_API,
})

export const api = createApi({
	baseQuery: baseQuery,
	endpoints: builder => ({
		getSupport: builder.query({
			query: () => 'support me',
			extraOptions: {
				shout: true,
			},
		}),
	}),
})
