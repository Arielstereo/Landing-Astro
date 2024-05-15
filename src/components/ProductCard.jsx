import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


const ProductCard = ({ title, description, img, animation }) => {
  
  useEffect(() => {
    AOS.init({
      duration: 1000
    });
  }, []);
  return (
    <div
      data-aos={animation}
      className="p-6 flex flex-col bg-slate-100 mx-auto gap-2 shadow-lg shadow-black rounded-md"
    >
      <div className="bg-slate-800 w-full py-2 rounded-lg pl-4">
        <h2 className="text-xl text-slate-100 font-semibold">{title}</h2>
      </div>
      <img
        className="hover:grow hover:shadow-xl hover:grayscale object-cover w-[300px] h-[250px] rounded-xl"
        src={img}
      />
      <div className="w-[300px] h-24 py-2">
        <span className="text-sm text-slate-500">{description}</span>
      </div>
      <a
        href="#contact"
        className="text-lg text-slate-100 bg-pink-400 hover:bg-pink-300 w-full text-center p-2 rounded-md font-medium"
      >
        Consultar
      </a>
    </div>
  );
};

export default ProductCard;
