import { configureStore } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  expensesReducer,
  addExpense,
  removeExpense,
} from "./slices/expensesSlice";

import { persistStore, persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, expensesReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware:(getDefaultMiddleware) => {

  return getDefaultMiddleware({
    serializableCheck: false,
  }) },
});
export const persistor = persistStore(store);

export { store, addExpense, removeExpense };
