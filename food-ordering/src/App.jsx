import './index.css'
import Header from "./components/Header"
import Body from "./components/Body"
import Footer from "./components/Footer"
import { Outlet } from 'react-router-dom'
import { lazy } from 'react'

// make site in smaller part
// chunking
// code spliting
// dynamic bundling
// lazy loading
// on demand loading

// this code only import when go to grocery component which is whenever call
const Grocery = lazy(() => {
  import("./components/Grocery")
});

function App() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
