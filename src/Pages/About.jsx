import { motion } from "motion/react"

export default function About() {
  return (
    <motion.div initial={{opacity:0.4,y:200}} animate={{opacity:1, y:0,transitionDuration:"0.4s",transition:"ease-in-out"}}  className="w-full h-auto px-[2%] py-[6%]  ">
      <div className="w-full h-[90vh] bg-[url('public/Img/Web_Photo_Editor.jpg')] bg-cover bg-center rounded-[25px] shadow-2xl shadow-gray-600 flex justify-center items-end p-[4%]">
        <h1 className="text-[150px] text-white text-shadow-xl ">ABOUT US</h1>
      </div>
      <div className="w-full h-[60vh] my-[5%] p-[2%] flex flex-col justify-center items-center">
        <h1 className="text-[40px] mb-[3%]">About Us</h1>
        <p className="w-[80%] text-shadow-xl text-[30px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque iusto, labore tempore repellat deleniti placeat quo, nobis alias consequatur repudiandae fugit, at eum. Consequuntur incidunt sequi ipsum odio provident veritatis magnam accusamus ut facere, esse eligendi minus ex pariatur, labore architecto ad nostrum? Ipsum, quaerat. Dolore earum ad repellat. Deleniti sint provident vel blanditiis atque quidem repudiandae. Dolor temporibus ratione accusamus quasi? Doloribus, dolores iure iste atque velit dolorem commodi.</p>
      </div>
      
    </motion.div>
  )
}
