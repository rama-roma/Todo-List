import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from './layout'
import Home from './pages/home'
import Category from './pages/category'
import Todos from './pages/todos'
import InfoCategory from './pages/infoCategory'
import InfoTodos from './pages/infoTodos'

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/category' element={<Category/>} />
          <Route path='/todos' element={<Todos/>} />
          
          <Route path='/infoCategory/:id' element={<InfoCategory/>} />
          <Route path='/infoTodos/:id' element={<InfoTodos/>} />
        </Route>  
      </Routes> 
    </BrowserRouter>
    </>
  )
}

export default App