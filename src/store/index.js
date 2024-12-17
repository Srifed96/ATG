import { configureStore } from '@reduxjs/toolkit'
import FormReducer from '../Slice/index'

export default configureStore({
  reducer: {
    counter: FormReducer,
  },
})