import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': 'd2ac2e39b8mshc81b787e1801b40p123272jsnc352f26402a5'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com/stats';

const createRequest = (url) => ({ url, headers: cryptoApiHeaders})

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) =>({
        getCryptos: builder.query({
            query: () => createRequest('/coins')
        })
    })

});

export const {
    useGetCryptosQuery,
} = cryptoApi;