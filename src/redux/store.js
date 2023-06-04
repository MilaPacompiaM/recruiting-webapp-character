import { configureStore } from '@reduxjs/toolkit'
import attributeSlice from './attributeSlice'
import modifierSlice from './modifierSlice'
import skillSlice from './skillSlice'

export default configureStore({
  reducer: {
    attribute: attributeSlice,
    modifier: modifierSlice,
    skill: skillSlice
  },
})
