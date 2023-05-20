import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async actions
// VD: dispatch(getUser("danndz"))
const getUser = createAsyncThunk(
  "user/get_user", // action type
  async (username, { dispatch, getState }) => {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}`
      );

      return response.data;
    } catch (error) {
      throw error.response.data.message;
    }
  }
);

const initialState = {
  user: null,
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});
