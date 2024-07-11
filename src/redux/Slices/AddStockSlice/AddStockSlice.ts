import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StockFetchType } from "../../../interfaces/fetchApi";

// export interface AddStockItem {
//   id: string;
//   stockType: string;
//   name: string;
//   unit: string;
//   location: string;
//   weight: string;
//   quantity: number;
//   pricePerUnit: number;
//   expirationDate: string;
//   moistureOfCommodity: string;
// }

interface AddStockState {
  items: StockFetchType[];
}

const initialState: AddStockState = {
  items: []
};

const AddStockSlice = createSlice({
  name: "addStock",
  initialState,
  reducers: {
    addStock: (state, action: PayloadAction<StockFetchType>) => {
      state.items.push(action.payload);
    },
    updateStock: (state, action: PayloadAction<StockFetchType>) => {
      const index = state.items.findIndex(
        (item) => item._id === action.payload._id
      );
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },
    removeFromStock: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item._id !== action.payload);
    },
    deleteItem: (state, action: PayloadAction<string>) => {
      const index = state.items.findIndex(
        (item) => item._id === action.payload
      );
      if (index !== -1) {
        state.items.splice(index, 1);
      }
    },
    deleteAllItems: (state) => {
      state.items = [];
    }
  }
});

export const {
  addStock,
  removeFromStock,
  deleteItem,
  deleteAllItems,
  updateStock
} = AddStockSlice.actions;

export default AddStockSlice.reducer;
