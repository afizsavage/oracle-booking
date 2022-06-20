/* eslint-disable import/prefer-default-export */
import {
  createEntityAdapter,
  createSelector,
} from '@reduxjs/toolkit';
import apiSlice from '../api/apiSlice';

const favoritesAdapter = createEntityAdapter({
  selectId: (car) => car.id,
  sortComparer: (a, b) => b.date.localCompare(a.date),
});

const initialState = favoritesAdapter.getInitialState();

export const extendedFavApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMyFavorites: builder.query({
      query: () => '/my_favorites',
      transformResponse: (responseData) => {
        const [loadedFavorites] = responseData;
        return favoritesAdapter.setAll(initialState, loadedFavorites); // Normalise data
      },
      providesTags: (result) => [
        { type: 'Favorites', id: 'LIST_FAVORITES' },
        ...result.ids.map((id) => ({ type: 'Favorites', id })), // Provide an object for each car in the list
      ],
    }),
    addNewFavorite: builder.mutation({
      query: (initialCar) => ({
        method: 'POST',
        url: '/my_favorites',
        body: { ...initialCar },
      }),
      invalidatesTags: [
        { type: 'Favorites', id: 'LIST_FAVORITES' },
      ],
    }),
    deleteFavorite: builder.mutation({
      query: ({ id }) => ({
        method: 'DELETE',
        url: `/my_favorites/${id}`,
      }),
      invalidatesTags: (arg) => [
        { type: 'Favorites', id: arg.id },
      ],
    }),
  }),
});

export const {
  useGetMyFavoritesQuery,
  useAddNewFavoriteMutation,
  useDeleteFavoriteMutation,
} = extendedFavApiSlice;

// returns the query result object
export const selectMyFavoritesResults = extendedFavApiSlice.endpoints.getMyFavorites.select();

// create memoized selectors
const selectMyFavoritesData = createSelector(
  selectMyFavoritesResults,
  (result) => result.data, // Normalized state object with ids as keys & entities as values
);

// Create and rename selectors using destructuring
export const {
  selectIds: selectMyFavoritesIds,
  selectEntities: selectMyFavoritesEntities,
  selectAll: selectMyFavorites,
  selectById: selectMyFavoriteById,
  selectTotal: selectMyFavoritesTotal,
} = favoritesAdapter((state) => selectMyFavoritesData(state) ?? initialState);
