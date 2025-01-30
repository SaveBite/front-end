export type AllowedProperitiesForString = "productName" | "category";
export type AllowedProperitiesForNumber =
  | "price"
  | "quantity"
  | "reorderLevel"
  | "reorderQuantity"
  | "unitsSold"
  | "salesValue";

export interface Item {
  productName: string;
  category: string;
  price: number;
  quantity: number;
  reorderLevel: number;
  reorderQuantity: number;
  unitsSold: number;
  salesValue: number;
}
