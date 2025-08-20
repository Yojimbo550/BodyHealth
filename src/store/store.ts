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
import { configureStore } from '@reduxjs/toolkit';
import someFeatureReducer from '../store/slice';

export const store = configureStore({
  reducer: {
    someFeature: someFeatureReducer,
  },
});

// Типы для TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;