  import { Link } from "react-router-dom"


  export default function Nav() {
    return (
      <div className="w-full h-[10vh] flex mb-[1%] backdrop-blur-sm">
        <div className="w-[10%] h-full">
          <img src="public/Img/high-resolution-color-logo(3).png" alt="Avalon" className="h-full"/>
        </div>
        <div className="w-[60%] h-full flex items-center justify-evenly">
          <Link className="text-[25px] text-shadow-lg text-shadow-gray-400 hover:text-[#9deac6] hover:scale-[1.3] ease-in-out duration-100">Home</Link>
          <Link className="text-[25px] text-shadow-lg text-shadow-gray-400 hover:text-[#9deac6] hover:scale-[1.3] ease-in-out duration-100">Service</Link>
          <Link className="text-[25px] text-shadow-lg text-shadow-gray-400 hover:text-[#9deac6] hover:scale-[1.3] ease-in-out duration-100">About</Link>
          <Link className="text-[25px] text-shadow-lg text-shadow-gray-400 hover:text-[#9deac6] hover:scale-[1.3] ease-in-out duration-100">Order Pc</Link>
          <Link className="text-[25px] text-shadow-lg text-shadow-gray-400 hover:text-[#9deac6] hover:scale-[1.3] ease-in-out duration-100">Products</Link>
          <Link className="text-[25px] text-shadow-lg text-shadow-gray-400 hover:text-[#9deac6] hover:scale-[1.3] ease-in-out duration-100">News</Link>
          <Link className="text-[25px] text-shadow-lg text-shadow-gray-400 hover:text-[#9deac6] hover:scale-[1.3] ease-in-out duration-100">Pc-industry</Link>
        </div>
        <div className="w-[30%] h-full flex items-center justify-end">
          <div className="w-[50%] h-full flex items-center justify-evenly ">
            <button className="w-full h-[50%] bg-gray-900 rounded-full text-white shadow-lg shadow-gray-400">Login</button>



            <div className="hidden w-full h-full flex items-center justify-evenly">
              <button className="w-[36%] h-full border rounded-full bg-gray-800 text-white">
              <img src="" alt="User" />
              </button>
              <p>User</p>
            </div>
          </div>
          <div className="w-[40%] h-full flex items-center justify-center gap-[4%]">
            <button className="h-full">
              <img src="public/Icons/icons8-bag-96.png" alt="Menu" className="w-full h-[50%] "/>
            </button>
            <button className="h-full">
              <img src="public/Icons/icons8-heart-100.png" alt="Menu" className="w-full h-[50%] "/>
            </button>
            <button className="h-full">
              <img src="public/Icons/icons8-menu(1).svg" alt="Menu" className="w-full h-[50%] "/>
            </button>
          </div>
        </div>
      </div>
    )
}
