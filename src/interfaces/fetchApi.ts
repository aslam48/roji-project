export interface StockFetchType {
  _id: string;
  farmerID?: string;
  stockType: string;
  name: string;
  quantity: number;
  unit: string;
  commodityGrade: string;
  pricePerUnit: number;
  weight: string;
  location: string;
  expirationDate: string;
  status: string;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
}

export interface ViewStockType {
  _id: string;
  stockID: string;
  stockType: string;
  quantity: string;
  price: number;
  status: string;
}
export interface ProcurementCompanyType {
  name: string;
  email: string;
  phoneNumber: string;
  lga: string;
  address: string;
  companyNumber: string;
  _id: string;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
}

export interface WarehouseListType {
  _id: string;
  name: string;
  crops: string[];
  lga: string;
  warehouseNumber: string;
  capacity: number;
  location: string;
  state: string;
  managers?: [];
  createdAt?: string;
  updatedAt?: string;
  __v?: 0;
}

export interface ProductType {
  _id: string;
  name: string;
  types: string;
  measurements: string;
  price: number;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
}

export interface TransporterListType {
  _id: string,
  transportCompanyID: string,
  firstName: string,
  lastName: string,
  email: string,
  phoneNumber: string,
  address: string,
  createdAt: string,
  updatedAt: string,
  lga:string;
  crop:string
  noOfWorkers:string
}


export interface TransportCompanyListType {
  _id: string;
  name: string;
  email: string;
  phoneNumber: string;
  lga: string;
  address: string;
  transportCompanyNumber: string;
  createdAt: string;
  updatedAt: string;
  __v: string;
}



export interface warehouseManagerType {
  _id: string;
  firstName: string;
  lastName: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  password?: string;
  warehouses: string[];
}
