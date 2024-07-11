export interface SupplierFormValues {
  supplierType: string;
  firstName: string;
  lastName: string;
  farmAddress: string;
  lga: string;
  email: string;
  phoneNumber: string;
  noOfWorkers: number;
}

export interface WarehouseFormValues {
  _id?: string;
  name: string;
  crops: string[];
  cropsDisplay?: string[];
  lga: string;
  capacity: string;
  location: string;
  state: string;
}


export interface TransportCompanyFormsValues {
  name:string,
  email: string,
  phoneNumber: string,
  lga: string,
  address: string
}


export interface WarehouseManagerFormValues {
  warehouses: string[];
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: string;
}

export interface ProcurementCompanyFormValues {
  name: string;
  types: string;
  measurements: string;
  price: number;
  address: string;
  email: string;
  phoneNumber: string;
  lga: string;
}

export interface ProductFormValues {
  name: string;
  types: string;
  measurements: string;
  price: number;
}

export interface TradeFormValues {
  stockType: string;
  name: string;
  quantity: number;
  unit: string;
  location: string;
  commodityGrade: string;
  wareHouseState: string;
  wareHouseLocation: string;
  supplyDate: string;
  deliveryOption: string;
  preferredWarehouse: string;
  supplierID: string;
}
