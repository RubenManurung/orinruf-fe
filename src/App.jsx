import { Helmet } from "react-helmet";
import { Icon } from "@iconify-icon/react"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Logo from "./assets/images/logo.svg"
// import bgHero from "./assets/images/my-bg-hero.png"
import bgHero from "./assets/images/new-hero-bg.jpeg"
// import videoHero from "./assets/videos/furniture-1080.mp4"
// import videoHero from "./assets/videos/video-hero.mp4"
import Satu from "./assets/images/1.png"
import Dua from "./assets/images/2.png"
import Tiga from "./assets/images/3.png"
import Empat from "./assets/images/4.png"
import Lima from "./assets/images/5.png"
import Enam from "./assets/images/6.png"
import Tujuh from "./assets/images/7.png"
import Delapan from "./assets/images/8.png"
import Sembilan from "./assets/images/9.png"
import { useEffect, useState } from "react";
import { products, productInspirations } from "./constant";
import { currencyFormat } from "../src/utils"


function App() {
  const [hamburgerToggle, setHamburgerToggle] = useState(false);

  const browseTheRange = {
    loop: true,
    breakpoints: {
      320: {
        slidesPerView: 1.2,
        spaceBetween: 16
      },
      480: {
        slidesPerView: 1.2,
        spaceBetween: 16
      },
      6400: {
        slidesPerView: 2.1,
        spaceBetween: 16
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 16
      }
    }
  }

  const beautifulRooms = {
    loop: true,
    navigation: {
      nextEl: ".image-swiper-button-next",
      prevEl: ".image-swiper-button-prev",
      disabledClass: "swiper-button-disabled"
    },
    pagination: {
      clickable: true,
      dynamicBullets: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1.2,
        spaceBetween: 20
      },
      480: {
        slidesPerView: 1.2,
        spaceBetween: 20
      },
      6400: {
        slidesPerView: 2.1,
        spaceBetween: 20
      },
      1200: {
        slidesPerView: 2.2,
        spaceBetween: 20
      }
    }
  }

  useEffect(() => {
    const nav = document.querySelector('#navbar');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) nav.classList.add('bg-white/90')
      else nav.style.background = 'bg-white/100';
    });
  }, [])


  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Mebelo Home</title>
        <link rel="icon" href="./assets/images/logo.svg" />
      </Helmet>

      <header id="navbar" className="relative max-w-2xl mx-auto sticky top-0 flex flex-col md:flex-row justify-between items-center px-4 md:px-[57px] z-50">
        <div className="flex items-center justify-between w-full">
          <div onClick={() => setHamburgerToggle(!hamburgerToggle)} className="flex items-center">
            <img src={Logo} alt="mebelo logo" />
            <span className="text-[20px] md:text-[34px] font-bold ml-[5px]">Mebelo</span>
          </div>
          <div className="relative w-fit lg:hidden">
            <Icon onClick={() => setHamburgerToggle(!hamburgerToggle)} icon="charm:menu-hamburger" width="24" height="24" />
          </div>
        </div>
        <nav className="">
          <ul className="hidden lg:flex items-center gap-x-[75px]">
            <li className="font-semibold"><a href="#home" >Home</a></li>
            <li className="font-semibold"><a href="#shop" >Shop</a></li>
            <li className="font-semibold"><a href="#shop" >About</a></li>
            <li className="font-semibold"><a href="#contact" >Contact</a></li>
          </ul>

          <aside className={`${hamburgerToggle ? "h-screen top-0 " : "h-0 top-[-13rem]"} fixed transition-all w-screen bg-white py-[0px] px-4 right-0`}>
            <div className="flex justify-between">
              <div className="flex justify-between items-center w-full">
                <div className="flex items-center justify-center">
                  <img src={Logo} alt="mebelo logo" />
                  <span className="text-[20px] md:text-[34px] font-bold ml-[5px]">Mebelo</span>
                </div>

                <Icon icon="iconamoon:close-fill" width="24" height="24" onClick={() => setHamburgerToggle(!hamburgerToggle)} />
              </div>
            </div>

            <ul className="flex flex-col items-end gap-x-[75px] gap-y-4">
              <li className="font-semibold"><a href="#home" >Home</a></li>
              <li className="font-semibold"><a href="#shop" >Shop</a></li>
              <li className="font-semibold"><a href="#shop" >About</a></li>
              <li className="font-semibold"><a href="#contact" >Contact</a></li>
            </ul>


          </aside>
        </nav>
        <div className="flex gap-x-[45px] lg:ml-[45px] items-center my-2 md:my-0">
          <Icon icon="iconamoon:profile" className="w-[24px] md:w-[28px]" />

          <Icon icon="ri:search-line" className="w-[24px] md:w-[28px]" />
          <Icon icon="mdi:heart-outline" className="w-[24px] md:w-[28px]" />
          <Icon icon="mdi:cart-outline" className="w-[24px] md:w-[28px]" />
        </div>
      </header>



      <main className="w-full relative">
        {/* bg-[center_6.5rem] */}
        <section
          // className=" mx-auto flex py-[64px] px-[57px] justify-center items-center relative w-full h-full overflow-y-hidden  bg-contain bg-fixed bg-no-repeat"
          className=" mx-auto flex md:py-[64px] md:px-[57px] justify-center items-center relative w-full h-full overflow-y-hidden bg-[top_6.5rem] bg-cover bg-fixed bg-no-repeat"
          style={{ backgroundImage: `url('${bgHero}')` }}
        >

          {/* <video
            autoPlay
            playsInline
            muted
            loop
            controls={false}
            className="absolute"
          >
            <source src={videoHero} type="video/mp4" />
            Your browser does not support the video tag
          </video> */}

          <div className="xxl:container mx-auto w-full">
            <div className="relative w-fit px-4 md:px-[40px] bg-doeskin/80 md:rounded-[10px] pt-[60px] pb-[35px] md:ml-auto ">
              <small className="font-semibold tracking-[3px] text-[16px]">New Arrival</small>
              <h1 className="text-[24px] md:text-[52px] md:leading-[65px] font-bold text-distilled-rose mt-1 mb-[17px] ">
                Discover Our <br className="hidden md:block" />New Collection</h1>
              <p className="text-sm md:text-[18px] text-carbon font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit <br /> tellus, luctus nec ullamcorper mattis.</p>

              <button className="bg-distilled-rose text-white py-[12px] md:py-[25px] px-[31px] md:px-[72px] mt-[46px] font-bold text-[14px] md:text-base">BUY NOW</button>
            </div>
          </div>

          {/* <div className="object-cover relative mx-auto flex object-cover max-w-full">
            <img src="../public./assets/images/bg-hero.png" alt="plant furniture on the table" className="" />
          </div> */}
        </section>

        <section className="max-w-screen-2xl mx-auto px-4 md:px-[57px] mt-[57px]">
          <h2 className="text-carbon font-bold text-xl md:text-[32px] text-center mb-2 md:mb-0">Browse The Range</h2>
          <p className="text-squant text-sm md:text-[20px] text-center mb-5 md:mb-[62px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

          <Swiper
            {...browseTheRange}
            className="mySwiper relative"
          >
            <SwiperSlide>
              <div className="relative group border-[2px] md:border-[4px] rounded-md md:rounded-[20px] overflow-hidden ">
                <div className="hidden group-hover:block absolute bg-dead-pixel w-full h-full opacity-30 group-hover:cursor-zoom-in z-[1]"></div>
                <h3
                  className="text-black absolute w-full h-full flex mx-auto items-center justify-center group-hover:cursor-zoom-in transition-all text-lg md:text-2xl font-semibold z-50"
                >Dining</h3>
                <div className="relative block w-full h-full aspect-[380/480] overflow-hidden ">
                  <img src="https://images.unsplash.com/photo-1605317039225-0001f706cdef?q=80&w=380&auto=format&fit=crop" alt="Dining" className="group-hover:scale-125 ease-in duration-300 " />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative group border-[2px] md:border-[4px] rounded-md md:rounded-[20px] overflow-hidden ">
                <div className="hidden group-hover:block absolute bg-dead-pixel w-full h-full opacity-30 group-hover:cursor-zoom-in z-[1]"></div>
                <h3
                  className="text-black absolute w-full h-full aspect-[380/480] flex mx-auto items-center justify-center group-hover:cursor-zoom-in transition-all text-lg md:text-2xl font-semibold z-50"
                >Living</h3>
                <div className="relative block w-full h-full aspect-[380/480] overflow-hidden ">
                  <img src="https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?q=80&w=380&auto=format&fit=crop" alt="Living" className="group-hover:scale-125 ease-in duration-300 " />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative group border-[2px] md:border-[4px] rounded-md md:rounded-[20px] overflow-hidden ">
                <div className="hidden group-hover:block absolute bg-dead-pixel w-full h-full opacity-30 group-hover:cursor-zoom-in z-[1]"></div>
                <h3
                  className="text-black absolute w-full h-full flex mx-auto items-center justify-center group-hover:cursor-zoom-in transition-all text-lg md:text-2xl font-semibold z-50"
                >Bedroom</h3>
                <div className="relative block w-full h-full aspect-[380/480] overflow-hidden ">
                  <img src="https://images.unsplash.com/photo-1556020685-ae41abfc9365?q=80&w=380&auto=format&fit=crop" alt="Bedroom" className="group-hover:scale-125 ease-in duration-300 " />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative group border-[2px] md:border-[4px] rounded-md md:rounded-[20px] overflow-hidden ">
                <div className="hidden group-hover:block absolute bg-dead-pixel w-full h-full opacity-30 group-hover:cursor-zoom-in z-[1]"></div>
                <h3
                  className="text-black absolute w-full h-full flex mx-auto items-center justify-center group-hover:cursor-zoom-in transition-all text-lg md:text-2xl font-semibold z-50"
                >Dining</h3>
                <div className="relative block w-full h-full aspect-[380/480] overflow-hidden ">
                  <img src="https://picsum.photos/300/400" alt="Dining" className="group-hover:scale-125 ease-in duration-300 " />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </section>

        <section className="max-w-screen-2xl mx-auto px-4 md:px-[57px] mt-[57px] pb-[69px] w-full">
          <h2 className="text-carbon font-bold text-xl md:text-[32px] text-center mb-4 md:mb-[32px]">Our Products</h2>

          <div className="relative grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-[32px]">
            {[...products, ...products, ...products, ...products, ...products, ...products].slice(0, 8).map((product) => {
              return (
                <div key={`${product.title}`} className="relative w-full h-full bg-grams-hair border-[2px] rounded-md overflow-hidden">

                  <div className="relative block   ">
                    {product.isNew && <span className="absolute right-0 mr-[12px] md:mr-[24px] mt-3 md:mt-[24px] bg-jade-mountain text-white rounded-full w-[32px] md:w-[52px] h-[32px] md:h-[52px] text-center text-xs md:text-base py-[8px] md:py-[12px]">New</span>}
                    {product.discount > 0 && <span className="absolute right-0 mr-[12px] md:mr-[24px] mt-3 md:mt-[24px] bg-pastrami text-white rounded-full w-[32px] md:w-[52px] h-[32px] md:h-[52px] text-center text-xs md:text-base py-[8px] md:py-[12px]">{`-${product.discount}%`}</span>}
                    <img src={`${product.imgUrl}`} alt={product.title} className="w-full h-full aspect-[285/300]" />
                  </div>
                  <div className="opacity-0 hover:opacity-100 transition-all w-full h-full rounded-md flex flex-col justify-end pb-4 md:pb-0 items-center bg-dead-pixel/70 absolute top-0 px-4">
                    <button className="py-1 md:py-3 px-4 md:px-[52px] whitespace-nowrap bg-white font-semibold text-sm md:text-base text-distilled-rose cursor-pointer mb-[24px]">Add to cart</button>
                    <ul className="flex flex-col md:flex-row gap-x-5 gap-y-2 md:gap-y-0 justify-between items-start md:items-center">
                      <li className="flex text-white font-semibold text-xs md:text-base items-center">
                        <Icon icon="material-symbols:share" className="mr-[2px] w-[16px] md:w-6" />
                        Share
                      </li>
                      <li className="flex text-white font-semibold text-xs md:text-base items-center">
                        <Icon icon="ic:round-compare-arrows" className="mr-[2px] w-[16px] md:w-6" />
                        Story
                      </li>
                      <li className="flex text-white font-semibold text-xs md:text-base items-center">
                        <Icon icon="mdi:heart-outline" className="mr-[2px] w-[16px] md:w-6" />
                        Like
                      </li>
                    </ul>
                  </div>
                  <div className="px-2 md:px-4 pb-4 md:pb-[30px]">
                    <h3 className="text-base md:text-[24px] font-semibold text-dead-pixel mt-4">{product.title}</h3>
                    <span className="block text-xs md:text-base text-argent my-2 font-medium">{product.category}</span>
                    <div className="flex flex-col md:flex-row justify-start md:justify-between md:items-center">
                      <span className="text-base md:text-xl font-semibold text-dead-pixel">Rp {currencyFormat(product.finalPrice)}</span>
                      <span className="text-palladium line-through text-sm md:text-base">Rp {currencyFormat(product.initialPrice)}</span>
                    </div>
                  </div>

                </div>
              )
            })}
          </div>

          <a href="#" className="font-semibold text-distilled-rose text-sm md:text-base px-[74px] py-3 mt-[32px] block mx-auto w-fit border border-distilled-rose">Show More</a>
        </section>

        <section className="max-w-screen-2xl mx-auto bg-unbleached flex flex-col md:flex-row items-center py-[44px] pl-4 md:pl-[57px] justify-between">

          <div className="w-full md:w-[40%] md:mr-[42px]">
            <h2 className="text-dead-pixel text-xl md:text-[40px] font-bold ">50+ Beautiful rooms <br />
              inspiration</h2>
            <p className="text-kettlemen text-sm md:text-base mt-[7px] mb-[25px] font-semibold">Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
            <a href="#" className="py-3 px-[36px] text-sm md:text-base mx-auto font-semibold bg-distilled-rose text-white block w-fit">Explore More</a>
          </div>

          <div className="relative w-full md:w-[60%]">

            <div className="image-swiper-button-next bg-white rounded-full flex absolute top-[calc(50%-12px)] z-10 cursor-pointer right-[57px] p-[6px] shadow-sm shadow-gray-400">
              <Icon icon="iconamoon:arrow-right-2-light" width="24" height="24" className="text-distilled-rose" />
            </div>
            <div className="image-swiper-button-prev bg-white rounded-full flex absolute top-[calc(50%-12px)] z-10 cursor-pointer left-[5px] p-[6px] shadow-sm shadow-gray-400">
              <Icon icon="iconamoon:arrow-left-2-light" width="24" height="24" className="text-distilled-rose" />
            </div>
            <Swiper
              {...beautifulRooms}
              modules={[Navigation, Pagination]}
              className="w-full swiper-pagination-inspiration mt-4 md:mt-0"
            >
              {productInspirations.map((product) => {
                return (<SwiperSlide key={product.title}>
                  {({ isActive }) => (
                    <>
                      <div className="relative border overflow-hidden border-[2px] rounded-md md:rounded-0 ">
                        {isActive && (
                          <div className="block absolute bottom-0 z-50 p-[32px] ml-6 mb-6 bg-white/70">
                            <div className="flex justify-between mb-2">
                              <span className="flex text-xs md:text-base relative font-medium text-kettlemen after:font-medium after:bg-kettlemen justify-between after:content[''] after:h-[1px] after:w-[30px] after:bg-black after:relative after:top-[50%] after:left-[25%] md:after:left-[50%]">
                                01
                              </span>
                              <span className="text-kettlemen text-xs md:text-base flex justify-between font-medium">{product.title}</span>
                            </div>
                            <h3
                              className="text-dead-pixel text-base md:text-2xl font-semibold "
                            >
                              Inner Peace
                            </h3>
                            <button className="bg-distilled-rose flex items-center absolute block mr-[-48px] mt-[-16px] right-0 p-3">
                              <Icon icon="si:arrow-right-line" width="24" height="24" className="text-white" />
                            </button>
                          </div>)}

                        <div className={`relative block transition-all w-full h-full ${isActive ? 'aspect-[404/584]' : 'aspect-[370/480]'} overflow-hidden `}>
                          <img src={product.imgUrl} alt={product.title} className="group-hover:scale-125 ease-in duration-300 " />
                        </div>
                      </div>
                    </>
                  )}
                </SwiperSlide>)
              })}
            </Swiper>
          </div>
        </section>

        <section className="max-w-screen-2xl mx-auto pt-[67px]">
          <span className=" text-kettlemen text-[20px] font-semibold text-center block mb-2">Share your setup with</span>
          <h2 className="text-dead-pixel font-bold text-[20px] md:text-[40px] text-center">#MebeloFurniture</h2>

          <div>
            <div className="relative gap-[15px]" style={{
              width: '100%',
              gridTemplateColumns: 'repeat(13, 1fr)',
              // height: '90vh',
              display: 'grid',
              // gridTemplateRows: 'repeat(9, 1fr)'
            }}>
              <img src={Satu} alt="" className="object-cover" style={{ gridArea: '1/1/6/2' }} />
              <img src={Dua} alt="" className="object-cover w-full h-full" style={{ gridArea: '2/2/6/6' }} />
              <img src={Tiga} alt="" className="object-cover h-full" style={{ gridArea: '3/6/8/9' }} />
              <img src={Empat} alt="" className="object-cover h-full" style={{ gridArea: '2/9/7/12' }} />
              <img src={Lima} alt="" className="object-cover h-full" style={{ gridArea: '1/12/7/14' }} />
              <img src={Enam} alt="" className="object-cover h-full" style={{ gridArea: '6/1/10/3' }} />
              <img src={Tujuh} alt="" className="object-cover h-full" style={{ gridArea: '6/3/8/6' }} />
              <img src={Delapan} alt="" className="object-cover h-full" style={{ gridArea: '7/9/9/11' }} />
              <img src={Sembilan} alt="" className="object-cover h-full" style={{ gridArea: '7/11/7/13' }} />

            </div>
          </div>
        </section>
      </main>

      <footer className="max-w-screen-2xl mx-auto flex-col px-4 md:px-[57px] pt-[48px] pb-[38px] border-t border mt-[50px] border-t-black/20 ">
        <div className="flex flex-col md:flex-row justify-between">
          <div>
            <h2 className="font-bold text-xl md:text-2xl text-black mb-4 md:mb-[50px]">Mebelo</h2>
            <address className="text-gold-grey text-sm md:text-base">
              Kota Metropolitan Jakarta, Jawa Barat,
              Indonesia
            </address>
          </div>

          <div className="mt-4">
            <h2 className="text-gold-grey font-medium mb-2 md:mb-[55px]">Links</h2>
            <ul className="flex flex-col gap-y-3 md:gap-y-[46px]">
              <li className="text-black font-medium text-sm md:text-base"><a href="#">Home</a></li>
              <li className="text-black font-medium text-sm md:text-base"><a href="#">Shop</a></li>
              <li className="text-black font-medium text-sm md:text-base"><a href="#">About</a></li>
              <li className="text-black font-medium text-sm md:text-base"><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className="mt-4">
            <h2 className="text-gold-grey font-medium mb-2 md:mb-[55px]">Help</h2>
            <ul className="flex flex-col gap-y-3 md:gap-y-[46px]">
              <li className="text-black font-medium text-sm md:text-base"><a href="#">Payment Options</a></li>
              <li className="text-black font-medium text-sm md:text-base"><a href="#">Returns</a></li>
              <li className="text-black font-medium text-sm md:text-base"><a href="#">Privacy Policies</a></li>
            </ul>
          </div>
          <div className="mt-4">

            <form onSubmit={(e) => e.preventDefault()} className="hidden md:flex w-full">
              <label htmlFor="subscription" >
                <input type="text" placeholder="Enter Your Email Address" className="border-b border-b-black outline-none placeholder:text-[14px] text-[14px] text-gold-grey" />

              </label>
              <button className="text-black underline text-[14px] ml-3">SUBSCRIBE</button>
            </form>

            <form onSubmit={(e) => e.preventDefault()} className="flex w-full md:hidden">
              <div className='p-3 border border-black relative mt-4 md:mt-12'>
                <h2 className="absolute -top-1/2 translate-y-1/2 bg-white text-gold-grey font-medium">Newsletter</h2>
                <div className="flex whitespace-nowrap">
                  <input type="text" placeholder="Enter Your Email Address" className="relative border-b border-b-black outline-none placeholder:text-[14px] text-[14px] text-gold-grey" />
                  <button className="text-black underline text-[14px] ml-3">SUBSCRIBE</button>
                </div>
              </div>
            </form>


          </div>
        </div>
        <hr className="mb-[35px] mt-2 md:mt-[48px]" />
        <div>
          <p className="text-sm md:text-base font-semibold text-center md:text-start">2024 Mebelo. All rights reserved</p>
        </div>
      </footer >
    </>
  )
}

export default App
