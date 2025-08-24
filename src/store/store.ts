// // store.ts
// import { configureStore } from '@reduxjs/toolkit';
// import dateReducer from './slice'; // Импортируем редюсер из среза

// const store = configureStore({
//   reducer: {
//     date: dateReducer,
//     visibility: visibilityReducer, // Добавляем редюсер даты в store
//   },
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
// export default store;
import {  taskSlice } from './slice';
import { configureStore } from '@reduxjs/toolkit';


 export const store = configureStore({
  reducer: {
    task:taskSlice.reducer
  }
 
})
;

// Типы для TypeScript

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;