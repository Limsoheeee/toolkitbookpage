import { configureStore } from '@reduxjs/toolkit'
import bookSlice from '../slice/bookSlice'
import commentSlice from '../slice/commentSlice'

export default configureStore({
  reducer: {
    bookSlice: bookSlice,
    commentSlice:commentSlice
  }
})