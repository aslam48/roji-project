import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from "redux-persist";
// import thunk from 'redux-thunk';
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";
import RootReducer from "../Slices/index.ts";
import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const persistConfig = {
  key: "project",
  version: 0,
  storage,
  stateReconsiler: autoMergeLevel2
  // blacklist: ['Auth'],
};

const appReducer = persistReducer(persistConfig, RootReducer);
const store = configureStore({
  reducer: appReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;

export { store };
