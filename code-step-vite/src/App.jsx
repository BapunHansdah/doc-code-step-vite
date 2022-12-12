import React from 'react'
import PreMain from './components/preMain'
import Main from './components/main'
import Sign from './components/auth/sign'
import Register from './components/auth/register'
import Error from './components/error_page'
import Projects from './components/projectList'



import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'

function App() {

    return (
        <>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<PreMain />} />
            <Route path='/main' element={<Main />} />
            <Route path='/error' element={<Error />} />
            <Route path='/register' element={<Register />} />
            <Route path='/sign' element={<Sign />} />
            <Route path='/projects' element={<Projects />} />
          </Routes>
      </BrowserRouter> 
      </>
    )
}

export default App