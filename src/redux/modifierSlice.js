import { createSlice } from '@reduxjs/toolkit';
import { ATTRIBUTE_LIST, MODIFIER_DEFAULT_VALUE, ATTRIBUTE_DEFAULT_VALUE } from '../consts';

const modifierSlice = createSlice({
  name: 'modifier',
  initialState: () => {
    return ATTRIBUTE_LIST.reduce((acc, item) => {
      acc[item] = MODIFIER_DEFAULT_VALUE;
      return acc;
    },
    {})
  },
  reducers: {
    change: (state, {payload}) => {
      const { attributeName, attributeValue } = payload;
      state[attributeName] = Math.floor((attributeValue - ATTRIBUTE_DEFAULT_VALUE) / 2);
    },
  },
});

export const { change } = modifierSlice.actions;
export default modifierSlice.reducer;