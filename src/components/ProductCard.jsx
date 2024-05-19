import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import SalesModal from "./SalesModal";

const ProductCard = ({ title, description, img, animation, price }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div
      data-aos={animation}
      className="p-6 flex flex-col bg-slate-100 mx-auto gap-2 shadow-lg shadow-black rounded-md relative"
    >
      <div className="bg-slate-800 w-full py-2 rounded-lg pl-4">
        <h2 className="text-xl text-slate-100 font-semibold">{title}</h2>
      </div>
      <img
        className="hover:grow hover:shadow-xl hover:grayscale object-cover w-[300px] h-[250px] rounded-xl"
        src={img}
      />
      <div className="text-lg text-slate-800 bg-yellow-400 hover:bg-yellow-300 text-center p-4 w-24 h-24 rounded-full font-medium absolute right-6 bottom-48">
        Desde ${price}
      </div>
      <div className="w-[300px] h-24 py-2">
        <span className="text-sm text-slate-500">{description}</span>
      </div>
      <div className="flex justify-center">
        <SalesModal />
      </div>
    </div>
  );
};

export default ProductCard;
