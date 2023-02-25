interface IAddress {
  zip_code: string;
  state: string;
  city: string;
  district: string;
  street: string;
  number: number;
  complement?: string;
}

export { IAddress };
