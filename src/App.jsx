import { Outlet } from "react-router-dom"
import Navbar from "./header/Navbar"
import Footer from "./components/Footer"

function App() {


  return (
    <>
    <Navbar></Navbar>
    <Outlet></Outlet>
    <Footer></Footer>
    </>
  )
}

export default App
