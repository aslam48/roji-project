import { createSlice } from "@reduxjs/toolkit";
import { IAuthState } from "../../interfaces/interface";


export const INITIAL_STATE: IAuthState = {
  email: null,
  userToken: null,
  isLoggedIn: false,
  userId: null,
  phoneNumber: null,
  isDeactivatedAccount: false,
  firstName: null,
  lastName: null,
  id: null,
  isEmailVerified: false,
  farmerType: null,
  supplierNumber: null,
  farmDetails: {
    firstName: null,
    lastName: null,
    fullName: null,
    farmAddress: null,
    lga: null,
    farmSize: null,
    email: null,
    phoneNumber: null,
    noOfWorkers: null
  },
  farmName: null,
  farmLocation: null,
  shouldCloseOnboardingModal: false,
  supplierType: null
};

const authSlice = createSlice({
  name: "Auth",
  initialState: INITIAL_STATE,
  reducers: {
    setUser(state, action) {
      const {
        email,
        phoneNumber,
        userId,
        userToken,
        lastName,
        firstName,
        id,
        isEmailVerified,
        supplierNumber,
        farmerType,
        farmName,
        farmLocation,
        shouldCloseOnboardingModal,
        supplierType
      } = action.payload;
      state.email = email;
      state.phoneNumber = phoneNumber;
      state.userId = userId;
      state.userToken = userToken;
      state.firstName = firstName;
      state.lastName = lastName;
      state.id = id;
      state.isEmailVerified = isEmailVerified;
      state.supplierNumber = supplierNumber;
      state.farmerType = farmerType;
      state.farmName = farmName;
      state.farmLocation = farmLocation;
      state.shouldCloseOnboardingModal = shouldCloseOnboardingModal;
      state.supplierType = supplierType;
    },

    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },

    logout: (state) => {
      state.isLoggedIn = false;
      state.userId = null;
      state.phoneNumber = null;
      state.email = null;
      state.userToken = null;
      state.firstName = null;
      state.lastName = null;
      state.id = null;
      state.isEmailVerified = false;
      state.farmerType = null;
      state.supplierNumber = null;
      state.shouldCloseOnboardingModal = false;
      state.supplierType = null;
    }
  }
});

export const { setUser, setIsLoggedIn, logout } = authSlice.actions;
export default authSlice.reducer;
