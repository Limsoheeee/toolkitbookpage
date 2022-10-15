import { createSlice } from "@reduxjs/toolkit";

export const bookSlice = createSlice({
  name: "book",
  initialState: {
    book: [],
  },
  reducers: {    
    AddCard: (state, action) => {   
      state.book.push({id:state.book[state.book.length-1]?.id+1 || 0, ...action.payload});
    },
  },
});

export const {AddCard} = bookSlice.actions;

export default bookSlice.reducer;
