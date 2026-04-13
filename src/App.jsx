import { HashRouter, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Nav from "./Components/Nav"


function App() {

  return (
    <>
      <Nav />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
        </Routes>
      </HashRouter>
    </>
  )
}
export default App
