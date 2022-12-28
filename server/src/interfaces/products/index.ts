interface IProduct {
  title: string;
  description: string;
  year: number;
  kilometers: number;
  price: string;
  ad_type: "sale" | "auction" | string;
  vehicle_type: "car" | "motorbike" | string;
  cover_image: string;
  gallery_image: string;
}

interface IProductUpdate {
  title?: string;
  description?: string;
  year?: number;
  kilometers?: number;
  price?: string;
  ad_type?: "sale" | "auction" | string;
  vehicle_type?: "car" | "motorbike" | string;
  cover_image?: string;
  gallery_image: string;
}

export { IProduct, IProductUpdate };
