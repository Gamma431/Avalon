import { motion } from "motion/react"

export default function OrderPc() {
  return (
    <motion.div initial={{opacity:0.4,y:200}} animate={{opacity:1, y:0,transitionDuration:"0.4s",transition:"ease-in-out"}}  className="w-full h-auto px-[2%] gap-5 py-[6%] flex flex-col items-center">
      <h1 className="text-[60px]">Order Pc : Shipping yet in Armenia </h1>
      <p>or get by yourself ` example address 6</p>    
      <p className="text-[23px]"><strong>fast FAQ : How is ordering and shipping works??</strong></p>
      <p className="w-[30%]">first of all you need to pick variant - Order ReadyTo (our configuration) or Self Config (pick parts yourself) then pay online or cash to courier. else after order if pc is ready we'll call you, so you can come to our branch and get it with card or cash to)) <br /> <strong>thanks for reading this is important for us</strong></p>
      <div className="w-full px-[5%] p-[2%] h-[90vh] bg-[url('public/Img/v960-ning-11.jpg')] bg-top bg-cover border rounded-[25px] shadow-2xl shadow-gray-600 flex flex-col items-center">
        <h2 className="text-center text-[120px] text-def text-shadow-lg">Trust our team</h2>
        <div className="w-full flex flex-col h-[80%] ">
          <div className="w-full flex h-[90%]">
            <img src="public/Img/service2.jpg" alt="" className="w-[50%] object-cover rounded-[25px] shadow-2xl shadow-gray-600 h-[80%]"/> 
          <div className="w-[50%] flex flex-col p-[4%]">
            <p className="text-[70px] ml-[22%]">Your</p>
            <p className="text-[80px] ml-[35%]">Dream</p>
            <p className="text-[90px] ml-[48%]">Build</p>
          </div>
          </div>
          <p className="text-[20px]">hand free, low price, best service</p>
        </div>
        
      </div>
      <div className="w-full h-[60vh] text-white bg-[url('public/Img/bluryBg.jpg')] bg-top bg-cover border rounded-[25px] shadow-2xl shadow-gray-600 flex flex-col items-center justify-center">
        <h2 className="text-[80px]">Chose variant</h2>
        <div className="w-full font-bold gap-[1%] h-[30%] flex justify-center items-center">
          <button className="text-black w-[8%] h-[30%] border rounded-[15px] bg-def shadow-2xl shadow-black">ReadyTo</button>
          &
          <button className="text-black w-[8%] h-[30%] border rounded-[15px] bg-def shadow-2xl shadow-black">Self Config</button>
        </div>
      </div>
      
    </motion.div>
  )
}
