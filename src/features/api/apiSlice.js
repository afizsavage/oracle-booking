/* eslint-disable no-unused-vars */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://immense-bayou-40869.herokuapp.com/api/v2' }),
  tagTypes: ['Cars', 'Users', 'Favorites'],
  endpoints: (builder) => ({}),
});

export default apiSlice;
