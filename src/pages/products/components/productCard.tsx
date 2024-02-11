import { addToCart } from "@/redux/slices/cart.slice";
import { useDispatch } from "react-redux";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface IProps {
  id: string;
  imageSrc: string[];
  title: string;
  brand: string;
  price: number;
}
const ProductCard: React.FC<IProps> = ({
  id,
  imageSrc,
  title,
  brand,
  price,
}) => {
  const dispathAdd = useDispatch();
  const addClickHandler = (productId: string): void => {
    dispathAdd(addToCart({ id: productId, count: 1 }));
  };

  return (
    <div className="rounded-lg p-4 shadow-xl">
      <div className="relative w-64 sm:w-96">
        <div className="relative h-72 w-full overflow-hidden rounded-lg">
          <Swiper
            key={id}
            className="h-full w-full object-fill object-center"
            spaceBetween={5}
            slidesPerView={1}
            pagination={{ clickable: true }}
            modules={[Navigation, Pagination]}
          >
            {imageSrc.map((img, index) => (
              <SwiperSlide key={index} className="relative">
                <img
                  src={img}
                  alt=""
                  className="h-full w-full object-fill object-center"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="flex items-center justify-between">
          <div className="relative mt-4">
            <h3 className="text-sm font-medium text-gray-900">{title}</h3>
            <p className="mt-1 text-sm text-gray-500">{brand}</p>
          </div>
          <div>
            <p>{price + "$"}</p>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <button
          onClick={() => addClickHandler(id)}
          className="relative flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-400 px-8 py-2 text-sm font-medium text-white hover:bg-indigo-500"
        >
          Add to bag<span className="sr-only">, {title}</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
