import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
  // định danh slice
  name: "count",
  // khai báo giá trị khởi tạo của state
  initialState: { count: 0 },
  // Kết hợp giữa action creator và reducer
  reducers: {
    increment: (state, action) => {
      return { ...state, count: state.count + 1 };
    },
    decrement: (state, action) => {
      return { ...state, count: state.count - 1 };
    },
    incrementByAmount: (state, action) => {
      return { ...state, count: state.count + action.payload };
    },
  },
});

// export actions
export const { increment, decrement, incrementByAmount } = countSlice.actions;

// export reducer
export default countSlice.reducer;