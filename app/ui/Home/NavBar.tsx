"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { lusitana } from "@/app/ui/fonts";
import { Heart, ShoppingCart, User } from "react-feather";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-white shadow-sm w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center w-full">
            <div className="flex-shrink-0">
              <Link href="/">
                <span
                  className={`text-black ${lusitana.className} font-bold text-3xl cursor-pointer`}
                >
                  ShirtWave
                </span>
              </Link>
            </div>
            <div className="hidden md:block w-full">
              <div className="ml-10 flex items-baseline space-x-4 justify-end">
                <span className="text-gray-600 hover:text-gray-800 cursor-pointer rounded-xl p-2 bg-gray-100">
                  <Heart size={20} />
                </span>
                <span className="text-gray-600 hover:text-gray-800 cursor-pointer rounded-xl p-2 bg-gray-100">
                  <ShoppingCart size={20} />
                </span>
                <span className="text-gray-600 hover:text-gray-800 cursor-pointer rounded-xl p-2 bg-gray-100">
                  <User size={20} />
                </span>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-300 transition duration-500 ease-in"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Abrir menu</span>
              {menuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      <div
        className={`${menuOpen ? "block" : "hidden"} md:hidden`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="/categorias">
            <span className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 cursor-pointer">
              Categorias
            </span>
          </Link>
          <Link href="/carrinho">
            <span className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 cursor-pointer">
              Carrinho
            </span>
          </Link>
          <Link href="/contato">
            <span className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 cursor-pointer">
              Contato
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
