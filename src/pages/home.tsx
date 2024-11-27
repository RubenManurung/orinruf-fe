import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
// import 'swiper/css/navigation';
import "swiper/css/pagination";
// import bgHero from "../assets/images/my-bg-hero.png"
// import '../assets/images/new-hero-bg.jpeg' from "../assets/images/new-hero-bg.jpeg";
// import videoHero from "../assets/videos/furniture-1080.mp4";
// import videoHero from "./assets/videos/video-hero.mp4"
import { Icon } from "@iconify-icon/react";
import { products, productInspirations } from "../constant";
import { currencyFormat } from "../utils";
import { Helmet } from "react-helmet";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  const browseTheRange = {
    loop: true,
    breakpoints: {
      320: {
        slidesPerView: 1.2,
        spaceBetween: 16,
      },
      480: {
        slidesPerView: 1.2,
        spaceBetween: 16,
      },
      640: {
        slidesPerView: 2.1,
        spaceBetween: 16,
      },
      1024: {
        slidesPerView: 3.2,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 16,
      },
    },
  };

  const beautifulRooms = {
    loop: true,
    navigation: {
      nextEl: ".image-swiper-button-next",
      prevEl: ".image-swiper-button-prev",
      disabledClass: "swiper-button-disabled",
    },
    pagination: {
      clickable: true,
      dynamicBullets: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1.2,
        spaceBetween: 20,
      },
      480: {
        slidesPerView: 1.2,
        spaceBetween: 20,
      },
      640: {
        slidesPerView: 2.1,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3.2,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 2.2,
        spaceBetween: 20,
      },
    },
  };

  useEffect(() => {
    const nav: any = document.querySelector("#navbar");
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) nav.classList.add("bg-white/90");
      else nav.style.background = "bg-white/100";
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 1900) {
        setIsVisible(true); // Show button when scrolling up
      } else {
        setIsVisible(false); // Hide button when scrolling down
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  console.log("isVisible", isVisible);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Mebelo Home</title>
        <link rel="icon" href="./assets/images/logo.svg" />
      </Helmet>

      <Navbar />

      <main className="w-full relative">
        {/* bg-[center_6.5rem] */}
        <section
          className=" mx-auto flex md:py-[64px] md:px-[57px] justify-center items-center relative w-full h-full overflow-y-hidden"
          // className=" mx-auto flex md:py-[64px] md:px-[57px] justify-center items-center relative w-full h-full overflow-y-hidden bg-[top_6.5rem] bg-cover bg-fixed bg-no-repeat"
          // style={{
          //   backgroundImage: `url('${"/images/new-hero-bg.jpeg"}')`,
          // }}
        >
          <video
            autoPlay
            playsInline
            muted
            loop
            controls={false}
            className="hidden lg:block absolute"
          >
            <source src={`/videos/furniture-1080.mp4`} type="video/mp4" />
            Your browser does not support the video tag
          </video>

          <div className="xxl:container mx-auto w-full">
            <div className="relative w-fit px-4 md:px-[40px] bg-doeskin/80 md:rounded-[10px] pt-[60px] pb-[35px] md:ml-auto ">
              <small className="font-semibold tracking-[3px] text-[16px]">
                New Arrival
              </small>
              <h1 className="text-[24px] md:text-[52px] md:leading-[65px] font-bold text-distilled-rose mt-1 mb-[17px] ">
                Discover Our <br className="hidden md:block" />
                New Collection
              </h1>
              <p className="text-sm md:text-[18px] text-carbon font-medium">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit{" "}
                <br /> tellus, luctus nec ullamcorper mattis.
              </p>

              <a href="#ourProduct">
                <button className="bg-distilled-rose text-white py-[12px] md:py-[25px] px-[31px] md:px-[72px] mt-[46px] font-bold text-[14px] md:text-base">
                  BUY NOW
                </button>
              </a>
            </div>
          </div>
        </section>

        <section className="max-w-screen-2xl mx-auto px-4 md:px-[57px] mt-[57px]">
          <h2 className="text-carbon font-bold text-xl md:text-[32px] md:leading-relaxed text-center mb-2 lg:mb-0">
            Browse The Range
          </h2>
          <p className="text-squant text-sm md:text-[20px] text-center mb-5 md:mb-[62px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          <Swiper {...browseTheRange} className="mySwiper relative">
            <SwiperSlide>
              <div className="relative group border-[2px] md:border-[4px] rounded-md md:rounded-[20px] overflow-hidden ">
                <div className="hidden group-hover:block absolute bg-dead-pixel w-full h-full opacity-30 group-hover:cursor-zoom-in z-[1]"></div>
                <h3 className="text-black absolute w-full h-full flex mx-auto items-center justify-center group-hover:cursor-zoom-in transition-all text-lg md:text-2xl font-semibold z-50">
                  Dining
                </h3>
                <div className="relative block w-full h-full aspect-[380/480] overflow-hidden ">
                  <img
                    src="https://images.unsplash.com/photo-1605317039225-0001f706cdef?q=80&w=380&auto=format&fit=crop"
                    alt="Dining"
                    className="group-hover:scale-125 ease-in duration-300 "
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative group border-[2px] md:border-[4px] rounded-md md:rounded-[20px] overflow-hidden ">
                <div className="hidden group-hover:block absolute bg-dead-pixel w-full h-full opacity-30 group-hover:cursor-zoom-in z-[1]"></div>
                <h3 className="text-black absolute w-full h-full aspect-[380/480] flex mx-auto items-center justify-center group-hover:cursor-zoom-in transition-all text-lg md:text-2xl font-semibold z-50">
                  Living
                </h3>
                <div className="relative block w-full h-full aspect-[380/480] overflow-hidden ">
                  <img
                    src="https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?q=80&w=380&auto=format&fit=crop"
                    alt="Living"
                    className="group-hover:scale-125 ease-in duration-300 "
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative group border-[2px] md:border-[4px] rounded-md md:rounded-[20px] overflow-hidden ">
                <div className="hidden group-hover:block absolute bg-dead-pixel w-full h-full opacity-30 group-hover:cursor-zoom-in z-[1]"></div>
                <h3 className="text-black absolute w-full h-full flex mx-auto items-center justify-center group-hover:cursor-zoom-in transition-all text-lg md:text-2xl font-semibold z-50">
                  Bedroom
                </h3>
                <div className="relative block w-full h-full aspect-[380/480] overflow-hidden ">
                  <img
                    src="https://images.unsplash.com/photo-1556020685-ae41abfc9365?q=80&w=380&auto=format&fit=crop"
                    alt="Bedroom"
                    className="group-hover:scale-125 ease-in duration-300 "
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative group border-[2px] md:border-[4px] rounded-md md:rounded-[20px] overflow-hidden ">
                <div className="hidden group-hover:block absolute bg-dead-pixel w-full h-full opacity-30 group-hover:cursor-zoom-in z-[1]"></div>
                <h3 className="text-black absolute w-full h-full flex mx-auto items-center justify-center group-hover:cursor-zoom-in transition-all text-lg md:text-2xl font-semibold z-50">
                  Dining
                </h3>
                <div className="relative block w-full h-full aspect-[380/480] overflow-hidden ">
                  <img
                    src="https://picsum.photos/300/400"
                    alt="Dining"
                    className="group-hover:scale-125 ease-in duration-300 "
                  />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </section>

        <section
          id="ourProduct"
          className="max-w-screen-2xl mx-auto px-4 md:px-[57px] mt-[57px] pb-[69px] w-full"
        >
          <h2 className="text-carbon font-bold text-xl md:text-[32px] text-center mb-4 md:mb-[32px]">
            Our Products
          </h2>

          <div className="relative grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-[32px]">
            {[
              ...products,
              ...products,
              ...products,
              ...products,
              ...products,
              ...products,
            ]
              .slice(0, 8)
              .map((product) => {
                return (
                  <div
                    key={`${product.title}`}
                    className="relative w-full h-full bg-grams-hair border-[2px] rounded-md overflow-hidden"
                  >
                    <div className="relative block   ">
                      {product.isNew && (
                        <span className="absolute right-0 mr-[12px] md:mr-[24px] mt-3 md:mt-[24px] bg-jade-mountain text-white rounded-full w-[32px] md:w-[52px] h-[32px] md:h-[52px] text-center text-xs md:text-base py-[8px] md:py-[12px]">
                          New
                        </span>
                      )}
                      {(product?.discount as number) > 0 && (
                        <span className="absolute right-0 mr-[12px] md:mr-[24px] mt-3 md:mt-[24px] bg-pastrami text-white rounded-full w-[32px] md:w-[52px] h-[32px] md:h-[52px] text-center text-xs md:text-base py-[8px] md:py-[12px]">{`-${product.discount}%`}</span>
                      )}
                      <img
                        src={`${product.imgUrl}`}
                        alt={product.title}
                        className="w-full h-full aspect-[285/300]"
                      />
                    </div>
                    <div className="opacity-0 hover:opacity-100 transition-all w-full h-full rounded-md flex flex-col justify-end pb-4  items-center bg-dead-pixel/70 absolute top-0 px-4">
                      <button className="py-1 md:py-3 px-4 lg:px-[52px] whitespace-nowrap bg-white font-semibold text-sm md:text-base text-distilled-rose cursor-pointer mb-[24px]">
                        Add to cart
                      </button>
                      <ul className="flex flex-col lg:flex-row gap-x-5 gap-y-2 lg:gap-y-0 justify-between items-start lg:items-center">
                        <li className="flex text-white font-semibold text-xs md:text-base items-center">
                          <Icon
                            icon="material-symbols:share"
                            className="mr-[2px] w-[16px] md:w-6"
                          />
                          Share
                        </li>
                        <li className="flex text-white font-semibold text-xs md:text-base items-center">
                          <Icon
                            icon="ic:round-compare-arrows"
                            className="mr-[2px] w-[16px] md:w-6"
                          />
                          Story
                        </li>
                        <li className="flex text-white font-semibold text-xs md:text-base items-center">
                          <Icon
                            icon="mdi:heart-outline"
                            className="mr-[2px] w-[16px] md:w-6"
                          />
                          Like
                        </li>
                      </ul>
                    </div>
                    <div className="px-2 md:px-4 pb-4 md:pb-[30px]">
                      <h3 className="text-base md:text-[24px] font-semibold text-dead-pixel mt-4">
                        {product.title}
                      </h3>
                      <span className="block text-xs md:text-base text-argent my-2 font-medium">
                        {product.category}
                      </span>
                      <div className="flex flex-col lg:flex-row justify-start md:justify-between lg:items-center">
                        <span className="text-base md:text-xl font-semibold text-dead-pixel">
                          Rp {currencyFormat(product.finalPrice)}
                        </span>
                        <span className="text-palladium line-through text-sm md:text-base">
                          Rp {currencyFormat(product.initialPrice)}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>

          <a
            href="#"
            className="font-semibold text-distilled-rose text-sm md:text-base px-[74px] py-3 mt-[32px] block mx-auto w-fit border border-distilled-rose"
          >
            Show More
          </a>
        </section>

        <section className="max-w-screen-2xl mx-auto bg-unbleached flex flex-col xl:flex-row items-center py-[44px] xl:py-0 xl:h-[calc(584px+88px)] pl-4 md:pl-[57px] justify-between">
          <div className="max-h-full flex flex-col justify-center w-full xl:w-[40%] xl:mr-[42px]">
            <h2 className="text-dead-pixel text-xl md:text-[40px] md:leading-[120%] font-bold ">
              50+ Beautiful rooms <br />
              inspiration
            </h2>
            <p className="text-kettlemen text-sm md:text-base mt-[7px] mb-[25px] font-semibold">
              Our designer already made a lot of beautiful prototipe of rooms
              that inspire you
            </p>
            <a
              href="#"
              className="py-3 px-[36px] text-sm md:text-base font-semibold bg-distilled-rose text-white block w-fit"
            >
              Explore More
            </a>
          </div>

          <div className="relative w-full xl:w-[60%]">
            <div className="image-swiper-button-next bg-white rounded-full flex absolute top-[calc(50%-12px)] z-10 cursor-pointer right-[57px] p-[6px] shadow-sm shadow-gray-400">
              <Icon
                icon="iconamoon:arrow-right-2-light"
                width="24"
                height="24"
                className="text-distilled-rose"
              />
            </div>
            <div className="image-swiper-button-prev bg-white rounded-full flex absolute top-[calc(50%-12px)] z-10 cursor-pointer left-[5px] p-[6px] shadow-sm shadow-gray-400">
              <Icon
                icon="iconamoon:arrow-left-2-light"
                width="24"
                height="24"
                className="text-distilled-rose"
              />
            </div>
            <Swiper
              {...beautifulRooms}
              modules={[Navigation, Pagination]}
              className="w-full  swiper-pagination-inspiration mt-4 md:mt-[25px] xl:mt-0 "
            >
              {productInspirations.map((product) => {
                return (
                  <SwiperSlide key={product.title}>
                    {({ isActive }) => (
                      <>
                        <div className="relative border overflow-hidden border-[2px] ">
                          {isActive && (
                            <div className="block absolute bottom-0 z-50 p-4 md:p-[32px] ml-9 md:ml-6 mb-6 bg-white/70">
                              <div className="flex justify-between mb-2">
                                <span className="flex text-xs md:text-base relative font-medium text-kettlemen ">
                                  01
                                </span>
                                <div className=" content[''] h-[1px] w-[30px] bg-black relative flex items-center justify-center relative top-[8px] mx-1"></div>
                                <span className="text-kettlemen text-xs md:text-base flex justify-between font-medium">
                                  {product.title}
                                </span>
                              </div>
                              <h3 className="text-dead-pixel text-base md:text-2xl font-semibold ">
                                Inner Peace
                              </h3>
                              <button className="bg-distilled-rose md:flex items-center absolute block mr-[-32px] md:mr-[-48px] mt-[-23px] md:mt-[-16px] md:mt-[-16px] right-0 p-1 md:p-3">
                                <Icon
                                  icon="si:arrow-right-line"
                                  width="24"
                                  height="24"
                                  className="text-white relative top-[4px] md:top-0"
                                />
                              </button>
                            </div>
                          )}

                          <div
                            className={`relative block transition-all w-full h-full ${
                              isActive ? "aspect-[370/584]" : "aspect-[370/480]"
                            } overflow-hidden `}
                          >
                            <img
                              src={product.imgUrl}
                              alt={product.title}
                              className="cursor-pointer"
                            />
                          </div>
                        </div>
                      </>
                    )}
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </section>

        <section className="max-w-screen-2xl mx-auto pt-[67px] overflow-hidden">
          <span className=" text-kettlemen text-[20px] font-semibold text-center block mb-2">
            Share your setup with
          </span>
          <h2 className="text-dead-pixel font-bold text-[20px] md:text-[40px] text-center">
            #MebeloFurniture
          </h2>

          <div>
            <div
              className="relative gap-[15px]"
              style={{
                width: "100%",
                gridTemplateColumns: "repeat(13, 1fr)",
                display: "grid",
              }}
            >
              <img
                src={`/images/1.png`}
                alt=""
                className="object-cover h-full hover:scale-125 ease-in duration-300 cursor-zoom-in"
                style={{ gridArea: "1/1/6/2" }}
              />
              <img
                src={`/images/2.png`}
                alt=""
                className="object-cover h-full hover:scale-125 ease-in duration-300 cursor-zoom-in"
                style={{ gridArea: "2/2/6/6" }}
              />
              <img
                src={`/images/3.png`}
                alt=""
                className="object-cover h-full hover:scale-125 ease-in duration-300 cursor-zoom-in"
                style={{ gridArea: "3/6/8/9" }}
              />
              <img
                src={`/images/4.png`}
                alt=""
                className="object-cover h-full hover:scale-125 ease-in duration-300 cursor-zoom-in"
                style={{ gridArea: "2/9/7/12" }}
              />
              <img
                src={`/images/5.png`}
                alt=""
                className="object-cover h-full hover:scale-125 ease-in duration-300 cursor-zoom-in"
                style={{ gridArea: "1/12/7/14" }}
              />
              <img
                src={`/images/6.png`}
                alt=""
                className="object-cover h-full hover:scale-125 ease-in duration-300 cursor-zoom-in"
                style={{ gridArea: "6/1/10/3" }}
              />
              <img
                src={`/images/7.png`}
                alt=""
                className="object-cover h-full hover:scale-125 ease-in duration-300 cursor-zoom-in"
                style={{ gridArea: "6/3/8/6" }}
              />
              <img
                src={`/images/8.png`}
                alt=""
                className="object-cover h-full hover:scale-125 ease-in duration-300 cursor-zoom-in"
                style={{ gridArea: "7/9/9/11" }}
              />
              <img
                src={`/images/9.png`}
                alt=""
                className="object-cover h-full hover:scale-125 ease-in duration-300 cursor-zoom-in"
                style={{ gridArea: "7/11/7/13" }}
              />
            </div>
          </div>
        </section>
      </main>
      {isVisible && (
        <button onClick={() => window.scrollTo(0, 0)}>
          <Icon
            icon="bi:file-arrow-up-fill"
            width="24"
            height="24"
            className="fixed bottom-0 right-0 mr-5 mb-5 z-50 cursor-pointer text-distilled-rose"
          />
        </button>
      )}

      <Footer />
    </>
  );
};

export default Home;
