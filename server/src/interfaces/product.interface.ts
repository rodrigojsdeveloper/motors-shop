interface IProduct {
  title: string;
  description: string;
  year: number;
  kilometers: number;
  price: string;
  ad_type: "sale" | "auction";
  vehicle_type: "car" | "motorcycle";
  cover_image: string;
  gallery_image: string;
}

export { IProduct };
