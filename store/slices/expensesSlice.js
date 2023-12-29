import { createSlice, nanoid } from "@reduxjs/toolkit";

const expensesSlice = createSlice({
  name: "expenses",
  initialState: {
    searchTerm: "",
    data: [],
  },
  reducers: {
    addExpense(state, action) {
      state.data.push({
        id: nanoid(),
        name: action.payload.name,
        amount: action.payload.amount,
        date: action.payload.date,
        category: action.payload.category,
      });
    },
    removeExpense(state, action) {
      const updated = state.data.filter((expense) => {
        return expense.id !== action.payload;
      });
      state.data = updated;
    },
  },
});

export const { addExpense, removeExpense } = expensesSlice.actions;
export const expensesReducer = expensesSlice.reducer;
