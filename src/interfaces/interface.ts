export interface IAuthState {
    email: string | null;
    id: string | null;
    userToken: string | null;
    isLoggedIn: boolean;
    userId: string | null;
    phoneNumber: string | null;
    firstName: string | null;
    lastName: string | null;
    farmerType: string | null;
    supplierNumber: string | null;
    isDeactivatedAccount: boolean;
    shouldCloseOnboardingModal: boolean;
    isEmailVerified: boolean;
    farmDetails: {
      firstName: string | null;
      lastName: string | null;
      fullName: string | null;
      farmAddress: string | null;
      lga: string | null;
      farmSize: string | null;
      email: string | null;
      phoneNumber: string | null;
      noOfWorkers: number | null;
    };
    farmName: string | null;
    farmLocation: string | null;
    supplierType: string | null;
    // createdAt: string | null;
    // updatedAt: string | null;
  }
  