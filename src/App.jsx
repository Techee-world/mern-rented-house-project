import React from 'react'
import { BrowserRouter ,Routes,Route } from 'react-router-dom'
import Home from './page/Home'
import About from './page/About'
import SignIn from './page/SignIn'
import SignOut from './page/SignOut'
import Header from './component/Header'

function App() {
  return (
    <div>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/sign-in' element={<SignIn/>} />
      <Route path='/sign-out' element={<SignOut/>} />
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App