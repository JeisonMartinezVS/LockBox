import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Home from './pages/Home'
import Register from './pages/Register'
import {Route, Routes} from "react-router-dom"


function App() {
  return (
    <>
    <Navbar/>
    <div className='container'>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/registro' element={<Register />}/>
      </Routes>
      </div>
      <footer className='bg-black text-white relative bottom-0 w-full'>
        <Footer/>
      </footer>
    </>
  )
  
}

export default App
