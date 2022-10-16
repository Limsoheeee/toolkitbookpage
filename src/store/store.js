import { configureStore } from '@reduxjs/toolkit'
import bookSlice from '../slice/bookSlice'

export default configureStore({
  reducer: {
    bookSlice: bookSlice
  }
})