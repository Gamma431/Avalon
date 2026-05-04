import { motion } from "motion/react"
import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"
import {useContext, useState} from "react";
import {AuthContext} from "../context/AuthContext.jsx";

export default function Auth() {
  const [mode, setMode] = useState("signup");
  const {register,handleSubmit, formState:{ errors }} = useForm()
  const {signUp, user, logOut, logIn }= useContext(AuthContext)

  function onSubmit(data){
    if(mode === "signup"){
      signUp(data.email,data.password)
    }else{
      logIn(data.email,data.password)
      alert("logged in")
    }
  }
  return (
    <motion.div initial={{opacity:0.4,y:200}} animate={{opacity:1, y:0,transitionDuration:"0.4s",transition:"ease-in-out"}}  className="w-full h-auto px-[2%] py-[6%] flex justify-center">
      <div className="w-full h-[88vh] p-[2%] bg-gray-200 rounded-[45px] flex flex-col shadow-2xl shadow-gray-500">
          <h1 className="text-[45px] font-bold text-center mb-5">{mode === "signup" ? "Sign Up to see your account" : "Log In to see your account"}</h1>
        <div className="w-full h-full flex gap-5">
          <div className="w-[50%] h-[90%] p-4 shadow-xl rounded-[25px] bg-gray-100">
            {user && <p>User Logged In : {user.email}</p>}
          <form className="w-full h-full flex flex-col justify-evenly items-center" onSubmit={handleSubmit(onSubmit)}>
            <label className="w-[50%] h-[12%] flex flex-col">
              Email
              <input type="email" className="h-full bg-gray-200 rounded-[15px] p-3" placeholder="example@example.com" {...register('email', {required:"Email is required"})}/>

            </label>
            {errors.email && (
                <span className="text-rose-700 text-[16px]">{errors.email.message}</span>
              )}
            <label className="w-[50%] h-[12%] flex flex-col">
              Password
              <input type="password" className="h-full bg-gray-200 rounded-[15px] p-3" placeholder="KLi334LDj" {...register('password', {required:"Password is required",minLength:{value:8,message:"password must be at least 8 characters"}, maxLength:{value:12, message:"password must be less than 12 characters"}})}/>

            </label>
            {errors.password && (
                <span className="text-rose-700 text-[16px]">{errors.password.message}</span>
              )}
            <motion.button type="submit" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="bg-def  w-[22%] text-[25px] text-white text-shadow-lg shadow-xl shadow-gray-400 border-gray-400 p-1 rounded-[15px] bg-gray-300">{mode === "signup" ? "Sign Up " : "Log In"}</motion.button>
            <motion.button onClick={()=> logOut()} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="bg-gray-700  w-[22%] text-[25px] text-white text-shadow-lg shadow-xl shadow-gray-400 border-gray-400 p-1 rounded-[15px]">LogOut</motion.button>

            {mode === "signup" ?  <p>Already have account? <strong onClick={() => setMode("login")} className="text-def text-shadow-lg">LogIn</strong> Now</p> :<p>jHave'nt account yet? <strong onClick={() => setMode("signup")} className="text-def text-shadow-lg">Register</strong> Now</p> }

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
          <h1 className="text-white text-[80px] font-bold">{mode === "signup" ? "Create Account and shop imediatly" : "Login To see your Orders and status"}</h1>
        </div>
        </div>
      </div>
    </motion.div>
  )
}
