import {
  AllowedProperitiesForNumber,
  AllowedProperitiesForString,
  Item,
} from "@/types";

let flag = 0;

export function stringSort(
  products: Item[],
  property: AllowedProperitiesForString
) {
  if (!products) return;
  const productsCopy = [...products];
  let newProducts;

  if (flag) {
    newProducts = productsCopy.sort((a: Item, b: Item) =>
      b[property].localeCompare(a[property])
    );
    flag = 0;
  } else if (!flag) {
    newProducts = productsCopy.sort((a: Item, b: Item) =>
      a[property].localeCompare(b[property])
    );
    flag = 1;
  }
  return newProducts;
}

////////////////////////////////////////////////////////////////////////////////
export function numberSort(
  products: Item[],
  property: AllowedProperitiesForNumber
) {
  if (!products) return;
  const productsCopy = [...products];
  let newProducts;

  if (flag) {
    newProducts = productsCopy.sort(
      (a: Item, b: Item) => b[property] - a[property]
    );
    flag = 0;
  } else if (!flag) {
    newProducts = productsCopy.sort(
      (a: Item, b: Item) => a[property] - b[property]
    );
    flag = 1;
  }
  return newProducts;
}
