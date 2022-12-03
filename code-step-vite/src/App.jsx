import React from 'react'
import PreMain from './components/preMain'
import Main from './components/main'
import Error from './components/error_page'


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
          </Routes>
      </BrowserRouter> 
      </>
    )
}

export default App