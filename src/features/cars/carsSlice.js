/* eslint-disable import/prefer-default-export */
import {
  createSelector,
  createEntityAdapter,
} from '@reduxjs/toolkit';
import apiSlice from '../api/apiSlice';

const carsAdapter = createEntityAdapter({
  selectId: (car) => car.id,
});

const initialState = carsAdapter.getInitialState();
const token = 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxfQ.ETUYUOkmfnWsWIvA8iBOkE2s1ZQ0V_zgnG_c4QRrhbg';

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCars: builder.query({
      query: () => '/cars',
      transformResponse: (responseData) => {
        const loadedCars = responseData;
        return carsAdapter.setAll(initialState, loadedCars); // Normalise data
      },
      providesTags: (result) => [
        { type: 'Cars', id: 'LIST_CARS' },
        ...result.ids.map((id) => ({ type: 'Cars', id })), // Provide an object for each car in the list
      ],
    }),
    addNewCar: builder.mutation({
      query: (initialCar) => ({
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` },
        url: '/cars/new',
        body: { ...initialCar },
      }),
      invalidatesTags: [
        { type: 'Cars', id: 'LIST_CARS' },
      ],
    }),
    deleteCar: builder.mutation({
      query: ({ id }) => ({
        headers: { Authorization: `Bearer ${token}` },
        method: 'DELETE',
        url: `/cars/${id}`,
      }),
      invalidatesTags: (arg) => [
        { type: 'Cars', id: arg.id },
      ],
    }),
  }),
});

export const {
  useGetCarsQuery,
  useGetMyFavoritesQuery,
  useAddNewCarMutation,
  useDeleteCarMutation,
} = extendedApiSlice;

// returns the query result object
export const selectCarsResults = extendedApiSlice.endpoints.getCars.select();

// create memoized selectors
const selectCarsData = createSelector(
  selectCarsResults,
  (result) => result.data, // Normalized state object with ids as keys & entities as values
);

// Create and rename selectors using destructuring
export const {
  selectIds: selectCarIds,
  selectAll: selectAllCars,
  selectById: selectCarById,
  selectId: selectCarId,
} = carsAdapter.getSelectors((state) => selectCarsData(state) ?? initialState);
