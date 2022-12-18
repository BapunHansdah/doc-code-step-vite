import React from 'react'
// import Main from './components/main'
import GitHub  from './components/gitHub'
import Home from './components/home'
import Sign from './components/auth/sign'
import Register from './components/auth/register'
import VerifyEmail from './components/auth/verifyEmail'
import Error from './components/error_page'
import Projects from './components/projectList'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'

function App() {

    return (
        <>
        <BrowserRouter>
          <Routes>
            <Route path='/github' element={<GitHub/>} />
            <Route path='/home' element={<Home/>} />
            <Route path='/error' element={<Error />} />
            <Route path='/register' element={<Register />} />
            <Route path='/verify' element={<VerifyEmail />} />
            <Route path='/sign' element={<Sign />} />
            <Route path='/' element={<Projects />} />
          </Routes>
      </BrowserRouter> 
      </>
    )
}

export default App