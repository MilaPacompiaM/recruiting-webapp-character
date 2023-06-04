import { createSlice } from '@reduxjs/toolkit';
import { ATTRIBUTE_LIST, ATTRIBUTE_DEFAULT_VALUE } from '../consts';

const attributeSlice = createSlice({
  name: 'attribute',
  initialState: () => {
    return ATTRIBUTE_LIST.reduce((acc, item) => {
      acc[item] = ATTRIBUTE_DEFAULT_VALUE;
      return acc;
    },
    {})
  },
  reducers: {
    increment: (state, {payload}) => {
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