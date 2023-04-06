import { configureStore } from "@reduxjs/toolkit";
import { configSlice } from "../Reducers";

export default configureStore({
  reducer: {
    config: configSlice.reducer,
  },
});
