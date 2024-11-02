import { Helmet } from "react-helmet";
import { Icon } from "@iconify-icon/react"

function App() {

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Orinruf Home</title>
        <link rel="icon" href="../public/images/logo.svg" />
      </Helmet>

      <header className="xl:container mx-auto flex justify-between items-center pt-[20px] pb-[30px] px-[57px]">
        <div className="flex items-center">
          <img src="../public/images/logo.svg" alt="orinruf logo" />
          <span className="text-[34px] font-bold ml-[5px]">Orinruf</span>
        </div>
        <nav className="">

          <ul className="flex items-center gap-x-[75px]">
            <li className="font-semibold"><a href="#home" >Home</a></li>
            <li className="font-semibold"><a href="#shop" >Shop</a></li>
            <li className="font-semibold"><a href="#shop" >About</a></li>
            <li className="font-semibold"><a href="#contact" >Contact</a></li>
          </ul>


        </nav>
        <div className="flex gap-x-[45px] items-center">
          <Icon icon="iconamoon:profile" width={28} height={28} />

          <Icon icon="ri:search-line" width={28} height={28} />
          <Icon icon="mdi:heart-outline" width={28} height={28} />
          <Icon icon="mdi:cart-outline" width={28} height={28} />
        </div>
      </header>



      <main className="w-full relative">
        <section className="xl:container mx-auto relative w-full flex flex-col items-center">

          <div className="relative px-[40px] pt-[60px] pb-[35px] absolute z-[1] w-fit">
            <small>New Arrival</small>
            <h1 className="text-[52px] leading-[65px] font-bold text-distilled-rose">
              Discover Our <br />New Collection</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
          </div>
          <div className="object-cover absolute mx-auto flex ">
            <img src="../public/images/bg-hero.png" alt="plant furniture on the table" className="" />
          </div>
        </section>
      </main>

      <footer></footer>
    </>
  )
}

export default App
