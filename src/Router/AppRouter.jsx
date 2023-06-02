import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Category from '../Pages/Category'
import Login from '../Pages/Login'
import Header from '../Common/Header'
import Search from '../Components/Search'
import Alternative from '../Pages/Alternative'
import NewLogin from '../Pages/NewLogin'

const AppRouter = () => {
  return (
    <>
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route path='/' element={<Category/>} />
                <Route path='/login' element={<Login/>} />
                <Route path='/search' element={<Search/>} />
                <Route path='/alternative' element={<Alternative/>}/>
                <Route path='/new' element={<NewLogin/>} />
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default AppRouter