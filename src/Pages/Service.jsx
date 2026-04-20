import { motion } from "motion/react"

export default function Service() {
  return (
    <motion.div initial={{opacity:0.4,y:200}} animate={{opacity:1, y:0,transitionDuration:"0.4s",transition:"ease-in-out"}}  className="w-full h-auto px-[2%] py-[6%]  ">
      <div className="w-full h-[70vh] border rounded-[25px] shadow-2xl shadow-gray-500 bg-[url('public/Img/service.jpg')] bg-cover bg-center flex justify-center items-end-safe p-[6%] text-white text-shadow-xl">
        <h1 className="text-[150px] ">Our Service</h1>
      </div>
      <div className="w-full h-[170vh] my-[5%] p-[2%] flex flex-col">
        <h1 className="text-[40px]">What We Usually Do</h1>
        <div className="w-full h-full flex justify-evenly items-center p-[2%]">
          <p className="w-[40%] text-shadow-xl text-[20px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia saepe exercitationem ipsa, esse eaque error non voluptatibus soluta, autem dolores porro veritatis aliquid eos perferendis doloribus illo voluptatem quae consequatur quas! Sed quia architecto unde nulla quis ad eum ullam.</p>
          <img src="public/Img/jeshoots-com-sMKUYIasyDM-unsplash(1).jpg" alt="" className="w-[45%] object-cover h-[50vh] rounded-[10px] shadow-2xl shadow-gray-500"/>
        </div>
        <div className="w-full h-full flex justify-evenly items-center p-[2%]">
          <img src="public/Img/premium_photo-1661938291778-2a82f3ef79ae(1).jpg" alt="" className="w-[50%] h-[50vh] rounded-[10px] shadow-2xl shadow-gray-500 object-cover"/>
          <p className="w-[40%] text-shadow-xl text-[20px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia saepe exercitationem ipsa, esse eaque error non voluptatibus soluta, autem dolores porro veritatis aliquid eos perferendis doloribus illo voluptatem quae consequatur quas! Sed quia architecto unde nulla quis ad eum ullam.</p>
        </div>
        <div className="w-full h-full flex justify-evenly items-center p-[2%]">
          <p className="w-[40%] text-shadow-xl text-[20px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia saepe exercitationem ipsa, esse eaque error non voluptatibus soluta, autem dolores porro veritatis aliquid eos perferendis doloribus illo voluptatem quae consequatur quas! Sed quia architecto unde nulla quis ad eum ullam.</p>
          <img src="public/Img/premium_photo-1661964006314-7ca93a16eb70(1).jpg" alt="" className="w-[50%] h-[50vh] rounded-[10px] shadow-2xl shadow-gray-500 object-cover"/>
        </div>
      </div>
    </motion.div>
  )
}
