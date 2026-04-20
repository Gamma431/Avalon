  import { Link } from "react-router-dom"
  import { motion } from "motion/react"

  export default function Nav() {
    return (
      <motion.div initial={{x:-200}} animate={{x:0,transition:"ease-in-out", transitionDuration:'1s'}} className="w-full h-[10vh] flex backdrop-blur-lg fixed top-0 z-50 pl-[2%]">
        <div className="w-[10%] h-full">
          <motion.img whileTap={{scale:10,margin:"240%",marginLeft:'450%',zIndex:1,backgroundColor:'#202020'}} src="public/Img/high-resolution-color-logo(3).png" alt="Avalon" className="h-full"/>
        </div>
        <div className="w-[60%] h-full flex items-center justify-evenly">
          <Link to="/" className="text-[25px] text-shadow-lg text-shadow-gray-500 hover:text-[#9deac6] hover:scale-[1.3] ease-in-out duration-100">Home</Link>
          <Link to="/service" className="text-[25px] text-shadow-lg text-shadow-gray-500 hover:text-[#9deac6] hover:scale-[1.3] ease-in-out duration-100">Service</Link>
          <Link to="/about" className="text-[25px] text-shadow-lg text-shadow-gray-500 hover:text-[#9deac6] hover:scale-[1.3] ease-in-out duration-100">About</Link>
          <Link to="/order-pc" className="text-[25px] text-shadow-lg text-shadow-gray-500 hover:text-[#9deac6] hover:scale-[1.3] ease-in-out duration-100">Order Pc</Link>
          <Link to="/products" className="text-[25px] text-shadow-lg text-shadow-gray-500 hover:text-[#9deac6] hover:scale-[1.3] ease-in-out duration-100">Products</Link>
          <Link to="/news" className="text-[25px] text-shadow-lg text-shadow-gray-500 hover:text-[#9deac6] hover:scale-[1.3] ease-in-out duration-100">News</Link>
          <Link to="/pc-industry" className="text-[25px] text-shadow-lg text-shadow-gray-500 hover:text-[#9deac6] hover:scale-[1.3] ease-in-out duration-100">Pc-industry</Link>
        </div>
        <div className="w-[30%] h-full flex items-center justify-end">
          <div className="w-[50%] h-full flex items-center justify-evenly ">
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="w-full h-[50%] bg-gray-900 rounded-full text-white shadow-lg shadow-gray-700">Login</motion.button>



            <div className="hidden w-full h-full items-center justify-evenly">
              <button className="w-[36%] h-full border rounded-full bg-gray-800 text-white">
              <img src="" alt="User" />
              </button>
              <p>User</p>
            </div>
          </div>
          <div className="w-full h-full flex items-center justify-center gap-[4%]">
            <button className="h-full">
              <img src="public/Icons/icons8-bag-96.png" alt="Menu" className="w-full h-[50%] "/>
            </button>
            <button className="h-full">
              <img src="public/Icons/icons8-heart-100.png" alt="Menu" className="w-full h-[50%] "/>
            </button>
            <button className="h-full menu-btn">
              <img src="public/Icons/icons8-menu(1).svg" alt="Menu" className="w-full h-[50%] "/>
            </button>
          </div>
        </div>
      </motion.div>
    )
}