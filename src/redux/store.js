import { configureStore } from '@reduxjs/toolkit'
import attributeSlice from './attributeSlice'
import modifierSlice from './modifierSlice'

export default configureStore({
  reducer: {
    attribute: attributeSlice,
    modifier: modifierSlice,
  },
})
