import { combineReducers, createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchValue: "",
    sortParam: "",
    sortMode: "",
  },
  reducers: {
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
      console.log(state.searchValue);
    },
    setSort: (state, action) => {
      state.sortParam = action.payload.sortParam;
      state.sortMode = action.payload.sortMode;
      console.log(state.sortParam, state.sortMode);
    },
  },
});

const rootReducer = combineReducers({
  search: searchSlice.reducer,
});
type RootState = ReturnType<typeof rootReducer>;

export const selectSearch = (state: RootState) => state.search;

export const { setSearchValue, setSort } = searchSlice.actions;
export default searchSlice.reducer;
