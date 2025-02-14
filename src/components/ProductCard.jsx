import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const ProductCard = ({ title, description, img, animation, price }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div
      className="relative block rounded-tr-3xl bg-slate-50 w-[95%] mx-auto"
      data-aos={animation}
    >
      <span className="absolute -right-px -top-px rounded-bl-3xl rounded-tr-3xl bg-rose-500 px-6 py-4 font-medium uppercase tracking-widest text-white">
        Desde ${price}
      </span>

      <img
        src={img}
        alt="image"
        className="h-80 w-full rounded-tr-3xl object-cover p-4"
      />

      <div className="p-4 bg-slate-50">
        <strong className="text-xl font-bold text-black"> {title} </strong>

        <p className="my-2 font-semibold text-gray-500 text-sm md:text-base">{description}</p>
      </div>
    </div>
  );
};

export default ProductCard;
