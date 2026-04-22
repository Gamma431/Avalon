import { motion } from "motion/react"
import { Link } from "react-router-dom"

export default function LoginPg() {
  return (
    <motion.div initial={{opacity:0.4,y:200}} animate={{opacity:1, y:0,transitionDuration:"0.4s",transition:"ease-in-out"}}  className="w-full h-auto px-[2%] py-[6%] flex justify-center">
      <div className="w-full h-[80vh] p-[3%] bg-gray-200 rounded-[45px] flex flex-col shadow-2xl shadow-gray-500">
          <h1 className="text-[45px] font-bold text-center mb-5">Log In to your account </h1>
        <div className="w-full h-full flex gap-5">
          <div className="w-[50%] h-[90%] p-4 shadow-xl rounded-[25px] bg-gray-100">
          <form className="w-full h-full flex flex-col justify-evenly items-center">
            <label className="w-[50%] h-[12%] flex flex-col">
              Email
              <input type="email" className="h-full bg-gray-200 rounded-[15px] p-3" placeholder="example@example.com"/>
            </label>
            <label className="w-[50%] h-[12%] flex flex-col">
              Password
              <input type="email" className="h-full bg-gray-200 rounded-[15px] p-3" placeholder="KLi334LDj"/>
            </label>
            <motion.button  whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="bg-def  w-[22%] text-[25px] text-white text-shadow-lg shadow-xl shadow-gray-400 border-gray-400 p-1 rounded-[15px] bg-gray-300">LogIn</motion.button>
            <p>Have'nt Account yet? <Link to="/register" className="text-def text-shadow-lg">Register</Link> Now</p>
            <div className="w-[30%] flex justify-center gap-2 h-[12%] rounded-[55px] bg-gray-300 p-2">
              <img src="public/Icons/icons8-google-100.png" alt="" />
              <img src="public/Icons/icons8-github-96.png" alt="" />
              <div className="h-full flex justify-center items-center">
              <img src="public/Icons/icons8-plus-24.png" alt="" />
              </div>
            </div>
          </form>
        </div>
        <div className="w-[50%] h-[90%] bg-[url('public/Img/bluryBg.jpg')] rounded-[25px] shadow-xl shadow-gray-400 p-15">
          <h1 className="text-white text-[80px] font-bold">Log In to see your Account and shop imediatly</h1>
        </div>
        </div>
      </div>
    </motion.div>
  )
}
