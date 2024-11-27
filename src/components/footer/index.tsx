import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="max-w-screen-2xl mx-auto flex-col px-4 md:px-[57px] pt-[48px] pb-[38px] border-t border mt-[50px] border-t-black/20 ">
        <div className="flex flex-col md:grid md:grid-cols-2 md:gap-x-4 lg:flex lg:flex-row justify-between">
          <div>
            <h2 className="font-bold text-xl md:text-2xl text-black mb-4 lg:mb-[24px]">
              Mebelo
            </h2>
            <address className="text-gold-grey text-sm md:text-base">
              Kota Metropolitan Jakarta, Jawa Barat,
              <br />
              Indonesia
            </address>
          </div>

          <div className="mt-4 md:mt-0">
            <h2 className="text-gold-grey font-medium mb-2 xl:mb-[24px]">
              Links
            </h2>
            <ul className="flex flex-col gap-y-3 xl:gap-y-[16px]">
              <li className="text-black font-medium text-sm lg:text-base">
                <a href="#">Home</a>
              </li>
              <li className="text-black font-medium text-sm lg:text-base">
                <a href="#">Shop</a>
              </li>
              <li className="text-black font-medium text-sm lg:text-base">
                <a href="#">About</a>
              </li>
              <li className="text-black font-medium text-sm lg:text-base">
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div className="mt-4 md:mt-0">
            <h2 className="text-gold-grey font-medium mb-2 xl:mb-[24px]">
              Help
            </h2>
            <ul className="flex flex-col gap-y-3 xl:gap-y-[16px]">
              <li className="text-black font-medium text-sm lg:stext-base">
                <a href="#">Payment Options</a>
              </li>
              <li className="text-black font-medium text-sm lg:stext-base">
                <a href="#">Returns</a>
              </li>
              <li className="text-black font-medium text-sm lg:stext-base">
                <a href="#">Privacy Policies</a>
              </li>
            </ul>
          </div>
          <div className="mt-4">
            <form onSubmit={(e) => e.preventDefault()} className="flex w-full">
              <div className="p-3 border border-black relative mt-4 lg:mt-0 w-full">
                <h2 className="absolute -top-[35%] translate-y-1/2 bg-white text-gold-grey font-medium">
                  Newsletter
                </h2>
                <div className="flex flex-col justify-start items-start w-full">
                  <input
                    type="text"
                    placeholder="Enter Your Email Address"
                    className="w-full relative border-b border-b-black outline-none placeholder:text-[14px] text-[14px] text-gold-grey"
                  />
                  <button className="text-black underline text-[14px] lg:ml-0 mt-2">
                    SUBSCRIBE
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <hr className="mb-[35px] mt-2 lg:mt-[48px]" />
        <div>
          <p className="text-sm lg:text-base font-semibold text-center lg:text-start">
            2024 Mebelo. All rights reserved
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
