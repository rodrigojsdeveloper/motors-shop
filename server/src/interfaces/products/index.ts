interface IProduct {
  name: string;
  description: string;
  year: number;
  kilometers: number;
  price: string;
  vehicle_type: "car" | "motorbike" | string;
  images: string;
}

interface IProductUpdate {
  name?: string;
  description?: string;
  year?: number;
  kilometers?: number;
  price?: string;
  vehicle_type?: "car" | "motorbike";
  images?: string;
}

export { IProduct, IProductUpdate };
