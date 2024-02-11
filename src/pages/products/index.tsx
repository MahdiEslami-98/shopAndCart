import { useQuery } from "@tanstack/react-query";
import ProductCard from "./components/productCard";
import SearchAndSort from "./components/search&sort";
import getProducts from "@/Api/getProducts";
import { IProduct } from "@/types/types";
import { useSelector } from "react-redux";
import { selectSearch } from "@/redux/slices/search.slice";

const ProductsPage = () => {
  const selector = useSelector(selectSearch);
  const { data, isSuccess, isLoading } = useQuery({
    queryKey: ["getProducts"],
    queryFn: () => getProducts(),
    staleTime: 1000 * 60 * 2,
    gcTime: 1000 * 60 * 5,
  });
  //  asc and desc
  console.log(selector);
  return (
    <div className="container mx-auto px-4">
      <SearchAndSort />
      <div className="grid grid-cols-1 items-center justify-items-center gap-x-6 gap-y-10 pt-8 lg:grid-cols-2 xl:grid-cols-3">
        {isLoading ? (
          <div
            className="col-span-3 inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
          >
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Loading...
            </span>
          </div>
        ) : isSuccess && data.length !== 0 ? (
          data.map((item: IProduct) => (
            <ProductCard
              id={item.id}
              title={item.title}
              price={item.price}
              brand={item.brand}
              imageSrc={item.images}
              key={item.id}
            />
          ))
        ) : (
          <p className="col-span-3">no data</p>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
