import { motion } from "motion/react"


export default function ProductsCard({product}) {
  return (
    <motion.div whileHover={{scale: 1.05, border:"1px solid silver",}} className="procard w-full h-110 text-black bg-white flex flex-col items-center  rounded-[15px] shadow-xl shadow-gray-400 p-[3%]">
      <motion.img whileTap={{scale:1.7,transitionDuration:"0.1s",zIndex:100,}} initial={{opacity:0.4,y:100,transitionDuration:"0.8s",transition:"ease-in-out"}} animate={{opacity:1, y:0,}} src={product.img} alt="" className=" shadow-lg shadow-gray-500 w-[85%] h-[60%] object-cover rounded-[15px]"/>
      <div className="w-full h-[30%] p-[6%]">
        <h1 className="procard text-[20px]">{product.name}</h1>
        <p>{product. title}</p>
        <div className="flex justify-between mt-[10%]">
          <p className="procard text-[25]">${product.price}</p>
          <p className="procard text-[25px]">Rating {product.rating}</p>
        </div>
      </div>
    </motion.div>
  )
}
