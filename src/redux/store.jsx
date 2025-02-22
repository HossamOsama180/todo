// import { configureStore } from '@reduxjs/toolkit'
// import TODOSLICE from './ToDoSlice'; // ✅ بدون أقواس

// export const store = configureStore({
//   reducer: {
//     counter:TODOSLICE
//   },
// })

import { configureStore } from '@reduxjs/toolkit';
import TODOSLICE from './ToDoSlice'; // تأكد من صحة المسار

const store = configureStore({
  reducer: {
    counter: TODOSLICE
  },
});

export default store; // ✅ تأكد من وجود هذا السطر
