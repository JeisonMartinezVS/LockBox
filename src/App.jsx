// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Navbar from './components/navbar/Navbar'
import Home from './pages/Home'
//import Login from './pages/Login'
import Register from './pages/Register'
import {Route, Routes} from "react-router-dom"


function App() {
  // const [count, setCount] = useState(0)
  return (
    <>
    <Navbar/>
    <div className='container'>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/registro' element={<Register />}/>
      </Routes>
      </div>
    </>
  )
  
}

export default App
