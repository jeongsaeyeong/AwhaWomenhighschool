import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Section/Header'
import Main from './components/Main'
import Login from './components/Login'
import Join from './components/Join'

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/login' element={<Login />} />
                <Route path='/join' element={<Join />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App