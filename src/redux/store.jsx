import { configureStore } from '@reduxjs/toolkit'
import TODOSLICE from './ToDoSlice'; // ✅ بدون أقواس

export const store = configureStore({
  reducer: {
    counter:TODOSLICE
  },
})

