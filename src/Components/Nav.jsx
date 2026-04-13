export default function Nav() {
  return (
    <div className="w-full h-[10vh] text-white flex items-center justify-between px-[2%] py-[0.8%] backdrop-blur-sm fixed top-0 left-0 z-50">
      <div className="w-[10%] h-full flex items-center justify-start rounded-[150px] ">
        <img src="public/Img/high-resolution-color-logo(3).png" alt="Logo"  className="h-full "/>
      </div>
      <div className="w-[60%] h-full  flex items-center justify-center rounded-[150px] bg-gradient-to-r from-[#9deac6] to-[#A8F8FF] shadow-lg shadow-gray-400 border border-gray-400">
        <ul className="w-full h-full flex items-center justify-around text-lg font-semibold">
          <li className="hover:text-gray-700 cursor-pointer transition duration-300">Home</li>
          <li className="hover:text-gray-700 cursor-pointer transition duration-300">About</li>
          <li className="hover:text-gray-700 cursor-pointer transition duration-300">Services</li>
          <li className="hover:text-gray-700 cursor-pointer transition duration-300">Contact</li>
        </ul>
      </div>
      <div className="w-[10%] h-full flex items-center justify-end rounded-[150px]  bg-gradient-to-r from-[#9deac6] to-[#A8F8FF] shadow-lg shadow-gray-400 border border-gray-400">
        
      </div>
    </div>
  )
}
