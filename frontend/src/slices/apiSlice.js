import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({baseUrl: '', 
    prepareHeaders: (headers) => {
        const token = JSON.parse(localStorage.getItem('userInfo'))?.access
        if(token) {
            headers.set('Authorization', `Bearer ${token}`)
        }

        return headers
    }
})

export const apiSlice = createApi({
    baseQuery,
    tagTypes: ['User', 'Manager'
    ],
    endpoints: (builder) => ({})
})