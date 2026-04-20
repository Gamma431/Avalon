import { motion } from "motion/react"
import ProductsCard from "../Components/ProductsCard"
import getProducts from "../Data/Products"

export default function Products() {
  const products = getProducts()
  return (
    <motion.div initial={{opacity:0.4,y:200}} animate={{opacity:1, y:0,transitionDuration:"0.4s",transition:"ease-in-out"}}  className="w-full h-auto px-[2%] py-[6%] flex flex-col">
          <div className="w-full flex flex-col justify-center items-center">
            <h2 className="text-[70px]">Welcome to Avalon Store</h2>
            <p className="text-[30px]">Only original parts are included, some of them are used (cheaper)</p>
            <div className="w-[30%] flex justify-evenly ">
              <button className="p-2 shadow-xl shadow-gray-500 rounded-[15px] bg-gray-700 text-white" >Fliters</button>
              <button className="p-2 shadow-xl shadow-gray-500 rounded-[15px] bg-gray-700 text-white" >Price</button>
              <button className="p-2 shadow-xl shadow-gray-500 rounded-[15px] bg-gray-700 text-white" >Rating</button>
              <button className="p-2 shadow-xl shadow-gray-500 rounded-[15px] bg-gray-700 text-white" >condition</button>
            </div>
          </div>
          <div className="w-full h-auto rounded-[25px] shadow-2xl shadow-gray-500 p-[3%] mt-[4%] grid grid-cols-4 gap-5">
            {products.map((product)=>(
              <ProductsCard key={product.id} product={product}/>
            ))}
          </div>
    </motion.div>
  )
}
