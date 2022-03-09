import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Cart } from "./Context";

function Header() {
  const { cart ,total} = useContext(Cart);

  return (
    <>
      <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
        <div class="container flex flex-wrap justify-between items-center mx-auto">
          <NavLink to="/" class="flex items-center">
            <img
              src="data:image/png;base64,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"
              class="mr-3 h-6 sm:h-10"
              alt="MyLogo"
            />
            <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              UseContext Hook Demo
            </span>
          </NavLink>

          <div class="hidden w-full md:block md:w-auto" id="mobile-menu">
            <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
              <li>
                <NavLink
                  to="/"
                  class="block py-2 pr-4 pl-3 text-white   md:p-0 dark:text-white"
                  aria-current="page"
                  activeClassName="active"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeClassName="active"
                  to="/Cart"
                  class="block py-2 pr-4 pl-3 text-white   md:p-0 dark:text-white"
                >
                  Cart ({cart.length})&nbsp;&nbsp; ₹({total})
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
