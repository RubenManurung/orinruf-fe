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
import { useEffect } from "react";
import { products, productInspirations } from "./constant";

function App() {

  useEffect(() => {
    const nav = document.querySelector('#navbar');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) nav.classList.add('bg-white/80')
      else nav.style.background = 'bg-white/100';
    });
  }, [])


  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Orinruf Home</title>
        <link rel="icon" href="./assets/images/logo.svg" />
      </Helmet>

      <header id="navbar" className="relative max-w-2xl mx-auto sticky top-0 flex justify-between items-center py-[20px] px-[57px] z-50">
        <div className="flex items-center">
          <img src={Logo} alt="orinruf logo" />
          <span className="text-[34px] font-bold ml-[5px]">Mebelo</span>
        </div>
        <nav className="">

          <ul className="hidden md:flex items-center gap-x-[75px]">
            <li className="font-semibold"><a href="#home" >Home</a></li>
            <li className="font-semibold"><a href="#shop" >Shop</a></li>
            <li className="font-semibold"><a href="#shop" >About</a></li>
            <li className="font-semibold"><a href="#contact" >Contact</a></li>
          </ul>


        </nav>
        <div className="hidden md:flex gap-x-[45px] items-center">
          <Icon icon="iconamoon:profile" width={28} height={28} />

          <Icon icon="ri:search-line" width={28} height={28} />
          <Icon icon="mdi:heart-outline" width={28} height={28} />
          <Icon icon="mdi:cart-outline" width={28} height={28} />
        </div>
      </header>



      <main className="w-full relative">
        {/* bg-[center_6.5rem] */}
        <section
          // className=" mx-auto flex py-[64px] px-[57px] justify-center items-center relative w-full h-full overflow-y-hidden  bg-contain bg-fixed bg-no-repeat"
          className=" mx-auto flex py-[64px] px-[57px] justify-center items-center relative w-full h-full overflow-y-hidden bg-[top_6.5rem] bg-cover bg-fixed bg-no-repeat"
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
            <div className="relative w-fit px-[40px]  bg-doeskin/80 rounded-[10px] pt-[60px] pb-[35px] ml-auto ">
              <small className="font-semibold tracking-[3px] text-[16px]">New Arrival</small>
              <h1 className="text-[52px] leading-[65px] font-bold text-distilled-rose mt-1 mb-[17px] ">
                Discover Our <br />New Collection</h1>
              <p className="text-[18px] text-carbon font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit <br /> tellus, luctus nec ullamcorper mattis.</p>

              <button className="bg-distilled-rose text-white py-[25px] px-[72px] mt-[46px] font-bold">BUY NOW</button>
            </div>
          </div>

          {/* <div className="object-cover relative mx-auto flex object-cover max-w-full">
            <img src="../public./assets/images/bg-hero.png" alt="plant furniture on the table" className="" />
          </div> */}
        </section>

        <section className="max-w-screen-2xl mx-auto px-[57px] mt-[57px]">
          <h2 className="text-carbon font-bold text-[32px] text-center">Browse The Range</h2>
          <p className="text-squant text-[20px] text-center mb-[62px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

          <Swiper
            slidesPerView={3}
            spaceBetween={20}
            loop={true}
            className="mySwiper relative"
          >
            <SwiperSlide>
              <div className="relative group border-[4px] rounded-[20px] overflow-hidden ">
                <div className="hidden group-hover:block absolute bg-dead-pixel w-full h-full opacity-30 group-hover:cursor-zoom-in z-[1]"></div>
                <h3
                  className="text-black absolute w-full h-full flex mx-auto items-center justify-center group-hover:cursor-zoom-in transition-all text-2xl font-semibold z-50"
                >Dining</h3>
                <div className="relative block w-full h-full aspect-[380/480] overflow-hidden ">
                  <img src="https://images.unsplash.com/photo-1605317039225-0001f706cdef?q=80&w=380&auto=format&fit=crop" alt="Dining" className="group-hover:scale-125 ease-in duration-300 " />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative group border-[4px] rounded-[20px] overflow-hidden ">
                <div className="hidden group-hover:block absolute bg-dead-pixel w-full h-full opacity-30 group-hover:cursor-zoom-in z-[1]"></div>
                <h3
                  className="text-black absolute w-full h-full aspect-[380/480] flex mx-auto items-center justify-center group-hover:cursor-zoom-in transition-all text-2xl font-semibold z-50"
                >Living</h3>
                <div className="relative block w-full h-full aspect-[380/480] overflow-hidden ">
                  <img src="https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?q=80&w=380&auto=format&fit=crop" alt="Living" className="group-hover:scale-125 ease-in duration-300 " />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative group border-[4px] rounded-[20px] overflow-hidden ">
                <div className="hidden group-hover:block absolute bg-dead-pixel w-full h-full opacity-30 group-hover:cursor-zoom-in z-[1]"></div>
                <h3
                  className="text-black absolute w-full h-full flex mx-auto items-center justify-center group-hover:cursor-zoom-in transition-all text-2xl font-semibold z-50"
                >Bedroom</h3>
                <div className="relative block w-full h-full aspect-[380/480] overflow-hidden ">
                  <img src="https://images.unsplash.com/photo-1556020685-ae41abfc9365?q=80&w=380&auto=format&fit=crop" alt="Bedroom" className="group-hover:scale-125 ease-in duration-300 " />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative group border-[4px] rounded-[20px] overflow-hidden ">
                <div className="hidden group-hover:block absolute bg-dead-pixel w-full h-full opacity-30 group-hover:cursor-zoom-in z-[1]"></div>
                <h3
                  className="text-black absolute w-full h-full flex mx-auto items-center justify-center group-hover:cursor-zoom-in transition-all text-2xl font-semibold z-50"
                >Dining</h3>
                <div className="relative block w-full h-full aspect-[380/480] overflow-hidden ">
                  <img src="https://picsum.photos/300/400" alt="Dining" className="group-hover:scale-125 ease-in duration-300 " />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </section>

        <section className="max-w-screen-2xl mx-auto px-[57px] mt-[57px] pb-[69px] w-full">
          <h2 className="text-carbon font-bold text-[32px] text-center mb-[32px]">Our Products</h2>

          <div className="relative grid grid-cols-4 gap-[32px]">
            {[...products, ...products, ...products, ...products, ...products, ...products].slice(0, 8).map((product) => {
              return (
                <div key={`${product.title}`} className="relative w-full h-full bg-grams-hair border-[2px]">

                  <div className="relative block  overflow-hidden ">
                    {product.isNew && <span className="absolute right-0 mr-[24px] mt-[24px] bg-jade-mountain text-white rounded-full w-[52px] h-[52px] text-center py-[12px]">New</span>}
                    {product.discount > 0 && <span className="absolute right-0 mr-[24px] mt-[24px] bg-pastrami text-white rounded-full w-[52px] h-[52px] text-center py-[12px]">{`-${product.discount}%`}</span>}
                    <img src={`${product.imgUrl}`} alt={product.title} className="w-full h-full aspect-[285/300]" />
                  </div>
                  <div className="opacity-0 hover:opacity-100 transition-all w-full h-full flex flex-col justify-center items-center bg-dead-pixel/70 absolute top-0 px-4">
                    <button className="py-3 px-[52px] bg-white font-semibold text-distilled-rose cursor-pointer mb-[24px]">Add to cart</button>
                    <ul className="flex gap-x-5 justify-between items-center">
                      <li className="flex text-white font-semibold">
                        <Icon icon="material-symbols:share" width="24" height="24" className="mr-[2px]" />
                        Share
                      </li>
                      <li className="flex text-white font-semibold">
                        <Icon icon="ic:round-compare-arrows" width="24" height="24" className="mr-[2px]" />
                        Story
                      </li>
                      <li className="flex text-white font-semibold">
                        <Icon icon="mdi:heart-outline" width="24" height="24" className="mr-[2px]" />
                        Like
                      </li>
                    </ul>
                  </div>
                  <div className="px-4 pb-[30px]">
                    <h3 className="text-[24px] font-semibold text-dead-pixel mt-4">{product.title}</h3>
                    <span className="block text-argent my-2 font-medium">{product.category}</span>
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-semibold text-dead-pixel">{product.finalPrice}</span>
                      <span className="text-palladium line-through">{product.initialPrice}</span>
                    </div>
                  </div>

                </div>
              )
            })}
          </div>

          <a href="#" className="font-semibold text-distilled-rose px-[74px] py-3 mt-[32px] block mx-auto w-fit border border-distilled-rose">Show More</a>
        </section>

        <section className="max-w-screen-2xl mx-auto bg-unbleached flex items-center py-[44px] pl-[57px] justify-between">

          <div className="w-[40%] mr-[42px]">
            <h2 className="text-dead-pixel text-[40px] font-bold">50+ Beautiful rooms <br />
              inspiration</h2>
            <p className="text-kettlemen mt-[7px] mb-[25px] font-semibold">Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
            <a href="#" className="py-3 px-[36px]  font-semibold bg-distilled-rose text-white block w-fit">Explore More</a>
          </div>

          <div className="relative w-[60%]">

            <div className="image-swiper-button-next bg-white rounded-full flex absolute top-[calc(50%-12px)] z-10 cursor-pointer right-[57px] p-[6px] shadow-sm shadow-gray-400">
              <Icon icon="iconamoon:arrow-right-2-light" width="24" height="24" className="text-distilled-rose" />
            </div>
            <div className="image-swiper-button-prev bg-white rounded-full flex absolute top-[calc(50%-12px)] z-10 cursor-pointer left-[5px] p-[6px] shadow-sm shadow-gray-400">
              <Icon icon="iconamoon:arrow-left-2-light" width="24" height="24" className="text-distilled-rose" />
            </div>
            <Swiper
              // navigation={true}
              navigation={{
                nextEl: ".image-swiper-button-next",
                prevEl: ".image-swiper-button-prev",
                disabledClass: "swiper-button-disabled"
              }}
              slidesPerView={2.2}
              spaceBetween={20}
              pagination={{
                clickable: true,
                dynamicBullets: true,
                // el: ".swiper-pagination-inspiration",
                // renderBullet: function (index, className) {
                //   return '<span class="' + className + '">' + (index + 1) + '</span>';
                // },
                // type: "bullets",
                // bulletClass: "bg-amber-400",
                // bulletActiveClass: "bg-green-400",
              }}
              modules={[Navigation, Pagination]}
              loop={true}
              className="w-full swiper-pagination-inspiration"
            >
              {productInspirations.map((product) => {
                return (<SwiperSlide key={product.title}>
                  {({ isActive }) => (
                    <>
                      <div className="relative border overflow-hidden border-[2px] ">
                        {isActive && (
                          <div className="block absolute bottom-0 z-50 p-[32px] ml-6 mb-6 bg-white/70">
                            <div className="flex justify-between mb-2">
                              <span className="flex relative font-medium  text-kettlemen after:font-medium after:bg-kettlemen justify-between after:content[''] after:h-[1px] after:w-[30px] after:bg-black after:relative after:top-[50%] after:left-[50%]">
                                01
                              </span>
                              <span className="text-kettlemen flex justify-between font-medium">{product.title}</span>
                            </div>
                            <h3
                              className="text-dead-pixel  text-2xl font-semibold "
                            >
                              Inner Peace
                            </h3>
                            <button className="bg-distilled-rose flex items-center absolute block mr-[-48px] mt-[-16px] right-0 p-3">
                              <Icon icon="si:arrow-right-line" width="24" height="24" className="text-white" />
                            </button>
                          </div>)}

                        <div className={`relative block transition-all w-full h-full ${isActive ? 'aspect-[404/584]' : 'aspect-[370/480]'}  overflow-hidden `}>
                          <img src={product.imgUrl} alt={product.title} className="group-hover:scale-125 ease-in duration-300 " />
                        </div>


                      </div>
                      {/* <div>Current slide is {isActive ? 'active' : 'not active'}</div> */}
                    </>
                  )}


                </SwiperSlide>)
              })}
              {/* <div className="swiper-pagination-inspiration relative pb-[40px]"></div> */}

            </Swiper>
          </div>
        </section>

        <section className="max-w-screen-2xl mx-auto pt-[67px]">
          <span className=" text-kettlemen text-[20px] font-semibold text-center block mb-2">Share your setup with</span>
          <h2 className="text-dead-pixel font-bold text-[40px] text-center">#FuniroFurniture</h2>

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

      <footer className="max-w-screen-2xl mx-auto flex-col px-[57px] pt-[48px] pb-[38px] border-t border mt-[50px] border-t-black/20 ">
        <div className="flex justify-between">
          <div>
            <h2 className="font-bold text-[24px] text-black mb-[50px]">Mebelo</h2>
            <address className="text-gold-grey">
              Kota Metropolitan Jakarta, Jawa Barat,
              Indonesia
            </address>
          </div>

          <div className="">
            <h2 className="text-gold-grey font-medium mb-[55px]">Links</h2>
            <ul className="flex flex-col gap-y-[46px]">
              <li className="text-black font-medium "><a href="#">Home</a></li>
              <li className="text-black font-medium "><a href="#">Shop</a></li>
              <li className="text-black font-medium "><a href="#">About</a></li>
              <li className="text-black font-medium "><a href="#">Contact</a></li>
            </ul>
          </div>
          <div>
            <h2 className="text-gold-grey font-medium mb-[55px]">Help</h2>
            <ul className="flex flex-col gap-y-[46px]">
              <li className="text-black font-medium "><a href="#">Payment Options</a></li>
              <li className="text-black font-medium "><a href="#">Returns</a></li>
              <li className="text-black font-medium "><a href="#">Privacy Policies</a></li>
            </ul>
          </div>
          <div>
            <h2 className="text-gold-grey font-medium mb-[55px]">Newsletter</h2>
            <label htmlFor="subscription">
              <input type="text" placeholder="Enter Your Email Address" className="border-b border-b-black outline-none placeholder:text-[14px] text-[14px] text-gold-grey" />

            </label>
            <button className="text-black underline text-[14px] ml-3">SUBSCRIBE</button>
          </div>
        </div>
        <hr className="mb-[35px] mt-[48px]" />
        <div>
          <p>2024 Mebelo. All rights reserved</p>
        </div>
      </footer>
    </>
  )
}

export default App
