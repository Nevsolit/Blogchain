import { BaseQueryFn, FetchArgs, FetchBaseQueryError, createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '~/redux/store/store';

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_URL,
  prepareHeaders: (headers, { getState }) => {},
});

export const authApi: any = createApi({
  reducerPath: 'authApi',
  baseQuery: baseQuery,
  keepUnusedDataFor: 0,
  tagTypes: [],
  endpoints: (builder) => ({}),
});

export const {} = authApi;
