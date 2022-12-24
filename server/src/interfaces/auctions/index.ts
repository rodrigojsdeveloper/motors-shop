interface IAuction {
  name: string;
  description: string;
  year: number;
  kilometers: number;
  ad_type: "auction" | "sale" | string;
  price: string;
  vehicle_type: string;
  images: string;
  time_limit: string;
}

export { IAuction };
