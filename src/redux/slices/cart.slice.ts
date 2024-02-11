import { combineReducers, createSlice } from "@reduxjs/toolkit";

interface ICart {
  id: string;
  count: number;
}

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [] as ICart[],
  },
  reducers: {
    addToCart(state, action) {
      if (state.cart.find((item) => item.id === action.payload.id)) {
        return;
      }
      state.cart.push(action.payload);
    },
    removeFromCart(state, action) {
      state.cart = state.cart.filter((item) => item !== action.payload);
    },
  },
});

const rootReducer = combineReducers({});
type RootState = ReturnType<typeof rootReducer>;

export const selectCart = (state: RootState) => state.cartState;

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
