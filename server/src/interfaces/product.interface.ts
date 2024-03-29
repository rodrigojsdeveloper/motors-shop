interface IProduct {
  brand: string;
  model: string;
  year: number;
  fuel: "gasoline" | "ethanol";
  kilometers: number;
  color: string;
  fipe: number;
  price: number;
  description: string;
  cover_image: string;
  primary_image: string;
  second_image: string;
}

export { IProduct };
