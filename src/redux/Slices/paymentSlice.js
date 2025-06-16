import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Dummy payment function
export const makeDummyPayment = createAsyncThunk(
  "payment/makeDummyPayment",
  async (paymentData) => {
    await new Promise((res) => setTimeout(res, 1500)); // Simulate delay
    return {
      id: "txn_12345",
      status: "success",
      amount: paymentData.amount,
    };
  }
);

const paymentSlice = createSlice({
  name: "payment",
  initialState: {
    loading: false,
    success: false,
    paymentInfo: null,
    error: null,
  },
  reducers: {
    resetPayment: (state) => {
      state.loading = false;
      state.success = false;
      state.paymentInfo = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(makeDummyPayment.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(makeDummyPayment.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.paymentInfo = action.payload;
      })
      .addCase(makeDummyPayment.rejected, (state) => {
        state.loading = false;
        state.error = "Payment failed. Try again.";
      });
  },
});

export const { resetPayment } = paymentSlice.actions;
export default paymentSlice.reducer;
