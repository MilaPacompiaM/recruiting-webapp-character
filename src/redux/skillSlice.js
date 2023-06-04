import { createSlice } from '@reduxjs/toolkit';
import { SKILL_DEFAULT_VALUE, SKILL_LIST } from '../consts';

const skillSlice = createSlice({
  name: 'skill',
  initialState: () => {
    const data = {}
    for (const skill of SKILL_LIST) {
      data[skill.name] = {
        attributeModifier: skill.attributeModifier,
        value: SKILL_DEFAULT_VALUE
      }
    }
    return data;
  },
  reducers: {
    increment: (state, {payload}) => {
      const { skillName } = payload;
      state[skillName]['value'] = state[skillName]['value'] + 1;
    },
    decrement: (state, {payload}) => {
      const { skillName } = payload;
      state[skillName]['value'] = state[skillName]['value'] - 1;
    }
  },
});

export const { increment, decrement } = skillSlice.actions;
export default skillSlice.reducer;