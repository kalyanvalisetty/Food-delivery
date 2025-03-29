// src/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

// Load cart state from localStorage
const loadCartState = () => {
    try {
        const serializedState = localStorage.getItem("cart");
        return serializedState ? JSON.parse(serializedState) : { items: [] };
    } catch (error) {
        console.error("Could not load cart state:", error);
        return { items: [] };
    }
};

// Save cart state to localStorage
const saveCartState = (state) => {
    try {
        localStorage.setItem("cart", JSON.stringify(state));
    } catch (error) {
        console.error("Could not save cart state:", error);
    }
};

const cartSlice = createSlice({
    name: 'cart',
    initialState: loadCartState(),
    reducers: {
      addItem: (state, action) => {
        // Look for an existing item with the same id
        const existingItem = state.items.find(item => item.id === action.payload.id);
        if (existingItem) {
          // If found, increment the count
          existingItem.count = (existingItem.count || 1) + 1;
        } else {
          // Otherwise, add the new item with an initial count of 1
          state.items.push({ ...action.payload, count: 1 });
        }
        saveCartState(state); // Save updated state to localStorage
      },
      removeItem: (state, action) => {
        // Find the index of the item with the given id
        const index = state.items.findIndex(item => item.id === action.payload.id);
        if (index !== -1) {
          if (state.items[index].count > 1) {
            // If more than one instance exists, decrement the count
            state.items[index].count -= 1;
          } else {
            // If there's only one instance, remove the item from the cart
            state.items.splice(index, 1);
          }
        }
        saveCartState(state); // Save updated state to localStorage
      },
      clearCart: (state) => {
        state.items = [];
        saveCartState(state); // Save updated state to localStorage
      }
    }
  });

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
