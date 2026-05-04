import { HashRouter, Route, Routes, useLocation } from "react-router-dom"
import { useEffect, useState } from "react"

import Home from "./Pages/Home"
import Nav from "./Components/Nav"
import Footer from "./Components/Footer"
import Service from "./Pages/Service"
import About from "./Pages/About"
import OrderPc from "./Pages/OrderPc"
import Products from "./Pages/Products"
import News from "./Pages/News"
import PcIndustry from "./Pages/PcIndustry"
import Auth from "./Pages/Auth.jsx"
import SideBar from "./Components/SideBar"
import AuthProvider from "./context/AuthContext.jsx";

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <AuthProvider>
      <HashRouter>
        <ScrollToTop />

        <div className="w-full pb-[1%] h-auto bg-gray-100">
          <Nav setIsSidebarOpen={setIsSidebarOpen} />

          <SideBar
              isOpen={isSidebarOpen}
              setIsSidebarOpen={setIsSidebarOpen}
          />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/service" element={<Service />} />
            <Route path="/about" element={<About />} />
            <Route path="/order-pc" element={<OrderPc />} />
            <Route path="/products" element={<Products />} />
            <Route path="/news" element={<News />} />
            <Route path="/pc-industry" element={<PcIndustry />} />
            <Route path="/authentication" element={<Auth />} />
          </Routes>

          <Footer />
        </div>
      </HashRouter>
    </AuthProvider>
  )
}

export default App