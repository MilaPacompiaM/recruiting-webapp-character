import { configureStore } from '@reduxjs/toolkit'
import attributeSlice from './attributeSlice'

export default configureStore({
  reducer: {
    attribute: attributeSlice
  },
})
