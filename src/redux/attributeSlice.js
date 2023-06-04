import { createSlice } from '@reduxjs/toolkit';
import { ATTRIBUTE_LIST } from '../consts';

const DEFAULT_VALUE = 10;
const attributeSlice = createSlice({
  name: 'attribute',
  initialState: () => {
    return ATTRIBUTE_LIST.reduce((acc, item) => {
      acc[item] = DEFAULT_VALUE;
      return acc;
    },
    {})
  },
  reducers: {
    increment: (state, {payload}) => {
      console.log('...payload', payload);
      console.log('...state[payload]', state[payload]);
      const { attributeName } = payload;
      state[attributeName] = state[attributeName] + 1;
    },
    decrement: (state, {payload}) => {
      const { attributeName } = payload;
      state[attributeName] = state[attributeName] - 1;
    }
  },
});

export const { increment, decrement } = attributeSlice.actions;
export default attributeSlice.reducer;