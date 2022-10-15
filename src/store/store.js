import { configureStore } from '@reduxjs/toolkit'
import bookslice from '../slice/bookslice'

export default configureStore({
  reducer: {
    book: bookslice
  }
})