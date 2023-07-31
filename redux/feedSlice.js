import { createSlice } from "@reduxjs/toolkit";

const initialState = { 
  feedData: [], 
  error: null,
  loading: false
}

const feedSlice = createSlice({
  name: "feed",
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.feedData = action.payload; 
      state.error = null; 
      state.loading = false; 
    },
    setError: (state, action) => {
      state.error = action.payload; 
      state.loading = false; 
    },
    setLoading: (state) => {
      state.loading = true; 
    }
  }
})

export const { setPosts, setError, setLoading } = feedSlice.actions;
export const feedSelector = (state) => state.feedData
export default feedSlice.reducer;
