// dateSlice.ts


// interface DateState {
//   currentDate: string | null;
//   dateFormat: 'ISO' | 'local';
// }

// const initialState: DateState = {
//   currentDate: null,
//   dateFormat: 'ISO',
// };

// const dateSlice = createSlice({
//   name: 'date',
//   initialState,
//   reducers: {
//     setCurrentDate: (state, action: PayloadAction<string>) => {
//       state.currentDate = action.payload;
//     },
//     resetCurrentDate: (state) => {
//       state.currentDate = null;
//     },
//     setDateFormat: (state, action: PayloadAction<'ISO' | 'local'>) => {
//       state.dateFormat = action.payload;
//     },
//   },
// });

// export const { setCurrentDate, resetCurrentDate, setDateFormat } = dateSlice.actions;
// export default dateSlice.reducer;
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type SomeState = {
  value: number;
  loading: boolean;
  data?: any;
  error?: string | null;
  taskArray:string[]
};

const initialState: SomeState = {
  value: 0,
  loading: false,
  data: undefined,
  error: null,
  taskArray:[]
};

const someSlice = createSlice({
  name: 'someFeature',
  initialState,
  reducers: {
    setValue(state, action: PayloadAction<number>) {
      state.value = action.payload;
    },
    startLoading(state) {
      state.loading = true;
      state.error = null;
    },
    stopLoading(state) {
      state.loading = false;
    },
    setData(state, action: PayloadAction<any>) {
      state.data = action.payload;
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },
    setTaskArray(state, action: PayloadAction<string>) {
      state.taskArray.push(action.payload);
    },
  },
});

export const { setValue, startLoading, stopLoading, setData, setTaskArray } = someSlice.actions;
export default someSlice.reducer;