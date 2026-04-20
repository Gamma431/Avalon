import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <div className="w-[96%] h-[80vh] shadow-2xl shadow-gray-600 rounded-[25px] mx-[2%] my-[2%] flex flex-col p-[2%]">
      <img src="public/Img/Screenshot From 2026-04-11 22-55-20-Photoroom.png" alt="" className="w-[50%] h-[50%] object-cover" />
      <hr className="border-gray-400 "/>
      <div className="w-full h-[40%] flex flex-col  p-[2%]">
        <div className="w-full h-[33%] flex justify-evenly items-center">
          <h2 className="text-[25px]">Pages</h2>
          <Link to="/" className="text-[15px] text-shadow-lg text-shadow-gray-500 hover:text-[#9deac6] hover:scale-[1.3] ease-in-out duration-100">Home</Link>
          <Link to="/service" className="text-[15px] text-shadow-lg text-shadow-gray-500 hover:text-[#9deac6] hover:scale-[1.3] ease-in-out duration-100">Service</Link>
          <Link to="/about" className="text-[15px] text-shadow-lg text-shadow-gray-500 hover:text-[#9deac6] hover:scale-[1.3] ease-in-out duration-100">About</Link>
          <Link to="/order-pc" className="text-[15px] text-shadow-lg text-shadow-gray-500 hover:text-[#9deac6] hover:scale-[1.3] ease-in-out duration-100">Order Pc</Link>
          <Link to="/products" className="text-[15px] text-shadow-lg text-shadow-gray-500 hover:text-[#9deac6] hover:scale-[1.3] ease-in-out duration-100">Products</Link>
          <Link to="/news" className="text-[15px] text-shadow-lg text-shadow-gray-500 hover:text-[#9deac6] hover:scale-[1.3] ease-in-out duration-100">News</Link>
          <Link to="/pc-industry" className="text-[15px] text-shadow-lg text-shadow-gray-500 hover:text-[#9deac6] hover:scale-[1.3] ease-in-out duration-100">Pc-industry</Link>
        </div>
        <div className="w-full h-[33%] flex justify-evenly items-center">
          <h2 className="text-[25px]">Socials</h2>
          <Link  className="text-[15px] text-shadow-lg text-shadow-gray-500 hover:text-[#9deac6] hover:scale-[1.3] ease-in-out duration-100">Facebook</Link>
          <Link  className="text-[15px] text-shadow-lg text-shadow-gray-500 hover:text-[#9deac6] hover:scale-[1.3] ease-in-out duration-100">Instagram</Link>
          <Link className="text-[15px] text-shadow-lg text-shadow-gray-500 hover:text-[#9deac6] hover:scale-[1.3] ease-in-out duration-100">Twitter</Link>
          <Link className="text-[15px] text-shadow-lg text-shadow-gray-500 hover:text-[#9deac6] hover:scale-[1.3] ease-in-out duration-100">Telegram</Link>
          <Link className="text-[15px] text-shadow-lg text-shadow-gray-500 hover:text-[#9deac6] hover:scale-[1.3] ease-in-out duration-100">LinkedIn</Link>
          <Link className="text-[15px] text-shadow-lg text-shadow-gray-500 hover:text-[#9deac6] hover:scale-[1.3] ease-in-out duration-100">Youtube</Link>
          <Link className="text-[15px] text-shadow-lg text-shadow-gray-500 hover:text-[#9deac6] hover:scale-[1.3] ease-in-out duration-100">Twitch</Link>
        </div>
        <div className="w-full h-[33%] flex justify-evenly items-center">
          <h2 className="text-[25px]">Contacts</h2>
          <Link  className="text-[15px] text-shadow-lg text-shadow-gray-500 hover:text-[#9deac6] hover:scale-[1.3] ease-in-out duration-100">Tel : +374 xx xxx xxx</Link>
          <Link className="text-[15px] text-shadow-lg text-shadow-gray-500 hover:text-[#9deac6] hover:scale-[1.3] ease-in-out duration-100">Gmail : Avalon@example.com</Link>
          <Link className="text-[15px] text-shadow-lg text-shadow-gray-500 hover:text-[#9deac6] hover:scale-[1.3] ease-in-out duration-100">Service-Gmail: AvalonServ@example.com</Link>
          <Link className="text-[15px] text-shadow-lg text-shadow-gray-500 hover:text-[#9deac6] hover:scale-[1.3] ease-in-out duration-100">TelegramService: tme: @avalon-serv</Link>
        </div>
      </div>
    </div>
  )
}
