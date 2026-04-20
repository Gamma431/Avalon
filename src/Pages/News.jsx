import { motion } from "motion/react"

export default function News() {
  return (
    <motion.div initial={{opacity:0.4,y:200}} animate={{opacity:1, y:0,transitionDuration:"0.4s",transition:"ease-in-out"}}  className="w-full h-auto px-[2%] py-[6%] flex justify-center">
      <h1 className="text-[60px] w-[90%]">Wait till 2026 Pc News (Approaching windows 12 release and windows 10 cutting, Nvidia startup rtx 6 series, Ram pricees  lowing)</h1>      
    </motion.div>
  )
}
