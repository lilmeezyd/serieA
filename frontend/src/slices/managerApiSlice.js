import { apiSlice } from "./apiSlice";
const MANAGERS_URL = "/api/managers";

export const managerApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        loadTop100: builder.mutation({
            query: () => ({
                url: `${MANAGERS_URL}/load100`,
                method: 'POST'
            }),
            invalidatesTags: ['Manager']
        }),
        getTop100: builder.query({
            query: () => ({
              url: `${MANAGERS_URL}/get100`, 
              method: 'GET'
            }),
            providesTags: ['Manager']
        }),
        getTop250: builder.query({
            query: () => ({
              url: `${MANAGERS_URL}/get250`, 
              method: 'GET'
            }),
            providesTags: ['Manager']
        }),
        getTop500: builder.query({
            query: () => ({
              url: `${MANAGERS_URL}/get500`, 
              method: 'GET'
            }),
            providesTags: ['Manager']
        }),
        fetchTop100: builder.mutation({
            query: () => ({
                url: `${MANAGERS_URL}/fetchandsavetop100`,
                method: 'POST',
            }),
            invalidatesTags: ['Manager']
        }),
        fetchTop250: builder.mutation({
            query: () => ({
                url: `${MANAGERS_URL}/fetchandsavetop250`,
                method: 'POST',
            }),
            invalidatesTags: ['Manager']
        }),
        fetchTop500: builder.mutation({
            query: () => ({
                url: `${MANAGERS_URL}/fetchandsavetop500`,
                method: 'POST',
            }),
            invalidatesTags: ['Manager']
        })
    })
})

export const { useFetchTop100Mutation,
    useFetchTop250Mutation, useFetchTop500Mutation,
    useGetTop100Query, useGetTop250Query, useGetTop500Query,
    useLoadTop100Mutation
} = managerApiSlice