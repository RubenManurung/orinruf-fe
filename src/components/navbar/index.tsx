import React, { useState } from "react";
import { Icon } from "@iconify-icon/react";

const Layouts = () => {
  const [hamburgerToggle, setHamburgerToggle] = useState(false);
  return (
    <>
      <header
        id="navbar"
        className="relative max-w-2xl mx-auto sticky top-0 flex flex-col md:flex-row justify-between items-center px-4 md:px-[57px] z-50"
      >
        <div className="flex items-center justify-between w-full">
          <div
            onClick={() => setHamburgerToggle(!hamburgerToggle)}
            className="flex items-center"
          >
            <img src={`/images/logo.svg`} alt="mebelo logo" />
            <span className="text-[20px] md:text-[34px] font-bold ml-[5px]">
              Mebelo
            </span>
          </div>
          <div className="relative w-fit xl:hidden">
            <Icon
              onClick={() => setHamburgerToggle(!hamburgerToggle)}
              icon="charm:menu-hamburger"
              width="24"
              height="24"
            />
          </div>
        </div>
        <nav className="">
          <ul className="hidden xl:flex items-center gap-x-[75px]">
            <li className="font-semibold">
              <a href="#home">Home</a>
            </li>
            <li className="font-semibold">
              <a href="#shop">Shop</a>
            </li>
            <li className="font-semibold">
              <a href="#shop">About</a>
            </li>
            <li className="font-semibold">
              <a href="#contact">Contact</a>
            </li>
          </ul>

          <aside
            className={`${
              hamburgerToggle ? "h-screen top-0 " : "h-0 top-[-13rem]"
            } fixed transition-all duration-300 w-screen bg-white py-[0px] px-4 right-0`}
          >
            <div className="flex justify-between">
              <div className="flex justify-between items-center w-full">
                <div className="flex items-center justify-center">
                  <img src={`/images/logo.svg`} alt="mebelo logo" />
                  <span className="text-[20px] md:text-[34px] font-bold ml-[5px]">
                    Mebelo
                  </span>
                </div>

                <Icon
                  icon="iconamoon:close-fill"
                  width="24"
                  height="24"
                  onClick={() => setHamburgerToggle(!hamburgerToggle)}
                />
              </div>
            </div>

            <ul className="flex flex-col items-end gap-x-[75px] gap-y-4">
              <li className="font-semibold">
                <a href="#home">Home</a>
              </li>
              <li className="font-semibold">
                <a href="#shop">Shop</a>
              </li>
              <li className="font-semibold">
                <a href="#shop">About</a>
              </li>
              <li className="font-semibold">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </aside>
        </nav>
        <div className="flex gap-x-[45px] lg:ml-[45px] items-center my-2 md:my-0 md:hidden xl:flex">
          <Icon icon="iconamoon:profile" className="w-[28px] cursor-pointer" />

          <Icon icon="ri:search-line" className="w-[28px] cursor-pointer" />
          <Icon icon="mdi:heart-outline" className="w-[28px] cursor-pointer" />
          <Icon icon="mdi:cart-outline" className="w-[28px] cursor-pointer" />
        </div>
      </header>
    </>
  );
};

export default Layouts;
