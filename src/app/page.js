import Image from "next/image";
import Header from "./components/Header";
import Products from "./components/Products";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import gradient from "./assets/gradient22.jpg"
import gradientM from "./assets/gradient2m.jpg"
import HeroArea from "./components/HeroArea";
import UpButton from "./components/UpButton";
import bg from './assets/bg2.jpg'

export default function Home() {
  return (
   <div className="w-full h-full relative text-emerald-950 text-[#a6a09f] bg-emerald-900">
    {/* <Image src={bg} alt="bg"  className="fixed top-[30%] z-0 w-full" /> */}
    <Image src={bg} alt="bg"  className="fixed top-[0%] z-0 w-full" />
    <Image src={bg} alt="bg"  className="fixed top-[10%] z-0 w-full" />
    
    

    <div className="w-full h-full  relative z-10">

      <div className="z-10 absolute top-0  ">
        <Image className="z-0 max-md:hidden " src={gradient} alt="gradient"  />
        <Image className="z-0 hidden max-md:block "  src={gradientM} alt="gradient"  />
        
        </div>
      <div className="z-10 absolute top-0">
        <Header  />
        <HeroArea />
        <Products />
        <About  />
        <Contact />
        <Footer />
      </div>
      <UpButton />
    </div>
   
   </div>
  );
}
