import { motion } from "motion/react"
import { Link } from "react-router-dom"
export default function SideBar({
  isOpen,
  setIsSidebarOpen,
}) {
  return (
    <motion.div
      initial={{ x: 300 }}
      animate={{ x: isOpen ? 0 : 700 }}
      transition={{ duration: 0.4,ease:"easeInOut" }}
      className="
        fixed
        right-0
        top-0
        w-[25vw]
        h-screen
        backdrop-blur-3xl
        p-9
        z-50
        flex
        flex-col
      "
    >
      <button
        onClick={() => setIsSidebarOpen(false)}
        className="w-[15%] ml-[75%]"
      >
        <img src="public/Icons/icons8-close-100.png" alt="" />
      </button>

          <div className="w-full h-[15vh] flex items-center justify-center ">
            <motion.button  whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="w-full h-[50%] bg-gray-900 rounded-full text-white shadow-lg shadow-gray-700"><Link className="w-full h-full text-[30px]" to="/login" onClick={() => setIsSidebarOpen(false)}>Login</Link></motion.button>          
          </div>
          <div className="w-full h-[40%] flex flex-col items-center justify-evenly">
          <Link to="/" className="bg-gray-300 w-full text-center rounded-lg text-[25px] text-shadow-lg text-shadow-gray-500 hover:shadow-2xl shadow-black hover:scale-[1.05] ease-in-out duration-100" onClick={() => setIsSidebarOpen(false)}>Home</Link>
          <Link to="/service" className="bg-gray-300 w-full text-center rounded-lg text-[25px] text-shadow-lg text-shadow-gray-500 hover:shadow-2xl shadow-black hover:scale-[1.05] ease-in-out duration-100" onClick={() => setIsSidebarOpen(false)}>Service</Link>
          <Link to="/about" className="bg-gray-300 w-full text-center rounded-lg text-[25px] text-shadow-lg text-shadow-gray-500 hover:shadow-2xl shadow-black hover:scale-[1.05] ease-in-out duration-100" onClick={() => setIsSidebarOpen(false)}>About</Link>
          <Link to="/order-pc" className="bg-gray-300 w-full text-center rounded-lg text-[25px] text-shadow-lg text-shadow-gray-500 hover:shadow-2xl shadow-black hover:scale-[1.051] ease-in-out duration-100" onClick={() => setIsSidebarOpen(false)}>Order Pc</Link>
          <Link to="/products" className="bg-gray-300 w-full text-center rounded-lg text-[25px] text-shadow-lg text-shadow-gray-500 hover:shadow-2xl shadow-black hover:scale-[1.05] ease-in-out duration-100" onClick={() => setIsSidebarOpen(false)}>Products</Link>
          <Link to="/news" className="bg-gray-300 w-full text-center rounded-lg text-[25px] text-shadow-lg text-shadow-gray-500 hover:shadow-2xl shadow-black hover:scale-[1.05] ease-in-out duration-100" onClick={() => setIsSidebarOpen(false)}>News</Link>
          <Link to="/pc-industry" className="bg-gray-300 w-full text-center rounded-lg text-[25px] text-shadow-lg text-shadow-gray-500 hover:shadow-2xl shadow-black hover:scale-[1.05] ease-in-out duration-100" onClick={() => setIsSidebarOpen(false)}>Pc-industry</Link>
        </div>
        <div className="w-full  flex justify-center gap-2 h-[8%] rounded-[55px] bg-gray-400 shadow-2xl shadow-gray-900 p-2">
              <img src="public/Icons/icons8-facebook-100.png" alt="" />
              <img src="public/Icons/icons8-insta-100.png" alt="" />
              <img src="public/Icons/icons8-linkedin-100.png" alt="" />
              <img src="public/Icons/icons8-twitter-100.png" alt="" />
              <img src="public/Icons/icons8-youtube-100.png" alt="" />
            </div>
    </motion.div>
  )
}