import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full fixed bg-rose-500 z-50 top-0 py-2 shadow-lg shadow-black">
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-6 md:px-32 py-3">
        <button onClick={toggleMenu} className="lg:hidden block">
          {!isMenuOpen ? (
            <svg
              className="fill-current text-white"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="#fff"
                stroke-linecap="round"
                stroke-width="2"
                d="M20 20L4 4m16 0L4 20"
              />
            </svg>
          )}
        </button>
        <div
          className={`lg:block ${
            isMenuOpen ? "block" : "hidden"
          } md:items-center md:w-auto w-full order-3 md:order-1`}
        >
          <nav>
            <ul className="lg:flex items-center justify-between text-base text-white pt-4 md:pt-0">
              <li>
                <a
                  className="inline-block no-underline hover:text-black py-2 px-4"
                  href="#products"
                >
                  Productos
                </a>
              </li>
              <li>
                <a
                  className="inline-block no-underline hover:text-black py-2 px-4"
                  href="#services"
                >
                  Servicios
                </a>
              </li>
              <li>
                <a
                  className="inline-block no-underline hover:text-black py-2 px-4"
                  href="#contact"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <a
            className="flex gap-4 items-center font-bold text-slate-100 text-xl"
            href="#"
          >
            <img src="/mi_logo.png" className="w-2/3" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
