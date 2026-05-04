import { motion } from "motion/react"

export default function Hero() {
  return (
    <motion.div initial={{opacity:0.4,y:200}} animate={{opacity:1, y:0,transitionDuration:"0.8s",transition:"ease-in-out"}} className="hero w-full h-[80vh] border rounded-[15px] shadow-xl shadow-gray-500 bg-[url('public/Img/v960-ning-11.jpg')] bg-top bg-cover flex font-bold p-[5%] justify-between items-center text-black ">
        <h1 className="hero-head text-[130px] source">Browse Best <br /> <strong className="hero-head text-[100px]">Pc Offers</strong> <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="text-[30px] bg-gray-800 p-[2%] rounded-[15px] text-white shadow-lg shadow-gray-600">Explore</motion.button> </h1>
        <motion.img whileHover={{scale:1.2,}} initial={{opacity:0.4,y:200,transitionDuration:"0.8s",transition:"ease-in-out"}} animate={{opacity:1, y:0,}}  src="public/Img/high-resolution-color-logo(2).png" alt="Avalon Image" className="w-[40%] rounded-[20px] shadow-2xl shadow-gray-700"/>
    </motion.div>
  )
}
