import { HashRouter, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Nav from "./Components/Nav"


function App() {

  return (
    <div className="w-full h-auto py-[1%] px-[2%] bg-gray-100">
      <HashRouter>
      <Nav />
        <Routes>
          <Route path="/" element={<Home />}/>
          
        </Routes>
      </HashRouter>
    </div>
  )
}
export default App
