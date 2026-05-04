import Hero from "../Components/Hero";
import getDockData from "../Data/HomeDock";
import getCarouselData from "../Data/HomeCarousel";
import HomeCarousel from "../Components/HomeCarousel";
import { motion } from "motion/react";  

export default function Home() {
  const dock = getDockData()
  const carousel = getCarouselData()
  return (
    <div className="w-full h-auto p-[2%] text-white mt-[6%]">
      <Hero />
      <div className="homecard w-full h-[50vh] flex p-[2%] items-center justify-evenly gap-[1%] py-[3%] mt-[4%]">
        {dock.map((dock) => (
          <motion.div   initial={{opacity:0.4,y:200}} animate={{opacity:1, y:0,transitionDuration:"0.4s",transition:"ease-in-out"}}  className="p-[1%] flex flex-col bg-gray-700 rounded-[25px] shadow-2xl shadow-gray-600 border" style={{height:dock.height, width: dock.width}}>
            <div className="w-full h-[60%]">
              <motion.img whileTap={{scale:2,transitionDuration:"0.1s",zIndex:100,transition:"ease"}} initial={{opacity:0.4,y:100,transitionDuration:"0.8s",transition:"ease-in-out"}} animate={{opacity:1, y:0,}} src={dock.img} alt="" className="w-full h-full object-cover rounded-xl shadow-2xl shadow-gray-950"/>
            </div>
            <div className="w-full h-[40%] flex flex-col p-[2%] justify-evenly" style={{fontSize:dock.fontsize}}>
              <h2 className="homecard text-shadow-lg text-shadow-gray-950">{dock.name}</h2>
              <p className="homecard text-shadow-lg text-shadow-gray-950">{dock.title}</p>
            </div>      
          </motion.div>
        ))}
      </div>

      <motion.div initial={{opacity:0.4,y:200}} animate={{opacity:1, y:0,transitionDuration:"0.4s",transition:"ease-in-out"}} className="nvColection w-full h-[85vh] border rounded-[25px] shadow-2xl shadow-gray-600 bg-[url('public/Img/pink-cyan.jpg')] bg-cover bg-center border-black flex overflow-hidden">
        <div className="w-[30%] h-full flex flex-col items-center justify-center pl-[6%]">
          <h1 className="nvColection text-[90px] text-shadow-xl">RTX 4070</h1>
          <p className="text-[30px] text-shadow-xl">Nvidia Collection </p>
          <p className="text-[20px] xt-shadow-xl">Est. 2024</p>
        </div>
        <motion.img initial={{opacity:0.2,x:200}} whileHover={{opacity:2,x:20}} src="public/Img/rtx4070-Photoroom.png" alt="" className="w-[70%] "/>
      </motion.div>

      <div className="w-full h-[60vh] bot my-[5%] border border-black rounded-[25px] shadow-2xl shadow-gray-600 bg-[url('public/Img/bluryBg.jpg')] bg-center bg-cover p-[2%] overflow-scroll">
        <div className="w-[500%] h-full grid grid-cols-20 grid-rows-1 gap-[0.3%]">
          {carousel.map((carousel)=> (
            <HomeCarousel key={carousel.id} carousel={carousel}/>
          ))}
        </div>
      </div>
    </div>
  )
}
