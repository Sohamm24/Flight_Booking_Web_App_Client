import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const authUser = createAsyncThunk(
  'auth/authUser',
  async (_,{ dispatch, rejectWithValue }) => {
    try {
      dispatch(loginStart());

      await new Promise((resolve) => setTimeout(resolve, 1000));

      const dummyUser = {
        id: "u123",
        name: "Soham Narvankar",
        email: "sohamnarvankar24@gmail.com",
      };

      dispatch(loginSuccess({ user: dummyUser }));

      return dummyUser;
    } catch (err) {
      dispatch(loginFailure("Something went wrong"));
      return rejectWithValue(err.message);
    }
  }
);

// Initial State
const initialState = {
  user: null,
  user_id: null,
  isAuthenticated: false,
  isLoading: true,
  isInitialized: false,
  error: null,
  lastLogin: null,
  rememberMe: false,
};

// Slice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    initializeAuth: (state) => {
      state.isInitialized = true;
      state.isLoading = false;
    },
    loginStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = true;
      //state.user = action.payload.user;
      //state.user_id = action.payload.user.id;
      state.lastLogin = new Date().toISOString();
      state.error = null;
      state.isInitialized = true;
    },
    loginFailure: (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = false;
      state.user = null;
      state.user_id = null;
      state.error = action.payload;
      state.isInitialized = true;
    },
    logout: () => ({
      ...initialState,
      isLoading: false,
      isInitialized: true,
    }),
    setRememberMe: (state, action) => {
      state.rememberMe = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
    updateUserProfile: (state, action) => {
      if (state.user) {
        state.user = { ...state.user, ...action.payload };
      }
    },
  },
});

export const {
  initializeAuth,
  loginStart,
  loginSuccess,
  loginFailure,
  logout,
  setRememberMe,
  clearError,
  updateUserProfile,
} = authSlice.actions;

export default authSlice.reducer;
