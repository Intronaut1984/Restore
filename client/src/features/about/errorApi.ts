import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithErrorHandling } from "../../app/api/baseApi";

export const errorApi = createApi({
  reducerPath: "errorApi",
    baseQuery: baseQueryWithErrorHandling,
    endpoints: (builder) => ({
        get500Error: builder.query({
        query: () => ({url: "buggy/server-error"})
        }),
        get404Error: builder.query({
            query: () => ({url: "buggy/not-found"})
        }),
        get400Error: builder.query({
            query: () => ({url: "buggy/bad-request"})
        }),
        getValidationError: builder.query({
            query: () => ({url: "buggy/validation-error"})
        }),
        get401Error: builder.query({
            query: () => ({url: "buggy/unauthorized"})
        }),
    }),
});

export const {
    useLazyGet400ErrorQuery,
    useLazyGet401ErrorQuery,
    useLazyGet404ErrorQuery,
    useLazyGet500ErrorQuery,
    useLazyGetValidationErrorQuery
} = errorApi;