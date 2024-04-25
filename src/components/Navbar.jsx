import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full fixed bg-[#F1666A] z-50 top-0 py-2 shadow-lg shadow-black">
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-6 md:px-32 py-3">
        <button onClick={toggleMenu} className="md:hidden block">
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
          className={`md:block ${
            isMenuOpen ? "block" : "hidden"
          } md:items-center md:w-auto w-full order-3 md:order-1`}
        >
          <nav>
            <ul className="md:flex items-center justify-between text-base text-white pt-4 md:pt-0">
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
                  href="#services "
                >
                  Servicios
                </a>
              </li>
              <li>
                <a
                  className="inline-block no-underline hover:text-black py-2 px-4"
                  href="#about "
                >
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a
                  className="inline-block no-underline hover:text-black py-2 px-4"
                  href="#contact "
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <path
                fill="#ffffff"
                d="M21.025 11.05V19q0 .825-.587 1.413T19.025 21h-14q-.825 0-1.412-.587T3.025 19v-7.95q-.575-.525-.887-1.35t-.013-1.8l1.05-3.4q.2-.65.713-1.075T5.075 3h13.9q.675 0 1.175.413t.725 1.087l1.05 3.4q.3.975-.012 1.775t-.888 1.375m-6.8-1.05q.675 0 1.025-.462t.275-1.038l-.55-3.5h-1.95v3.7q0 .525.35.913t.85.387m-4.5 0q.575 0 .938-.388t.362-.912V5h-1.95l-.55 3.5q-.1.6.262 1.05t.938.45m-4.45 0q.45 0 .787-.325t.413-.825L7.025 5h-1.95l-1 3.35q-.15.5.162 1.075T5.275 10m13.5 0q.725 0 1.05-.575t.15-1.075L18.925 5h-1.9l.55 3.85q.075.5.413.825t.787.325m-13.75 9h14v-7.05q-.125.05-.162.05h-.088q-.675 0-1.187-.225t-1.013-.725q-.45.45-1.025.7t-1.225.25q-.675 0-1.263-.25t-1.037-.7q-.425.45-.987.7T9.825 12q-.725 0-1.312-.25t-1.038-.7q-.525.525-1.037.738T5.275 12h-.112q-.063 0-.138-.05zm14 0h-14z"
              />
            </svg>
            <h3>MI TIENDA</h3>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
