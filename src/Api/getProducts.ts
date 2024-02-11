import { readData } from "@/core/http-service";
import { IProduct } from "@/types/types";

const getProducts = async (
  search: string = "",
  sort: string = "",
  mode: string = "",
) => {
  const url = `/products?q=${search}&_sort=${sort}&_order=${mode}`;
  return await readData<IProduct[]>(url);
};

export default getProducts;
