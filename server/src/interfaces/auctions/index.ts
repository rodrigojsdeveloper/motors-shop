interface IAuction {
  name: string;
  description: string;
  year: number;
  kilometers: number;
  price: string;
  vehicle_type: "car" | "motorbike" | string;
  images: string;
  time_limit: string;
}

export { IAuction };
