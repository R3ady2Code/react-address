import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

import { AppDispatch } from './store';
import { IAddress } from '../address.types';

const token = '86bee884e4a6d14755e7135be863e4db955c1b8d';

export const fetchAddress = (searchValue: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(addressSlice.actions.addressFetching());
    const { data } = await axios.post(
      'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address',
      JSON.stringify({ query: searchValue }),
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: 'Token ' + token,
        },
      },
    );
    dispatch(addressSlice.actions.addressFetchingSuccess(data));
  } catch (error) {
    dispatch(addressSlice.actions.addressFetchingError(error));
  }
};

interface AddressState {
  items: IAddress[];
  isLoading: Boolean;
  error: string | null;
}

const initialState = {
  items: [],
  isLoading: false,
  error: null,
} as AddressState;

const addressSlice = createSlice({
  name: 'address',
  initialState,
  reducers: {
    addressFetching(state) {
      state.isLoading = true;
    },
    addressFetchingSuccess(state, action: PayloadAction<any>) {
      state.isLoading = false;
      state.items = action.payload.suggestions;
      state.error = null;
    },
    addressFetchingError(state, action: PayloadAction<any>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const addressReducer = addressSlice.reducer;
export const addressActions = addressSlice.actions;
