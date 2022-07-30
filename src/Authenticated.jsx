import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import RootLayout from './layouts/RootLayout';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';
import AddProduct from './pages/AddProduct';

const Authenticated = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route element={<RootLayout/>}>
              <Route path="/" element={<Products/>} />
              <Route path="/addproduct" element={<AddProduct/>}/>
           
              <Route path='/about' element={<About/>} />
              <Route path='/contact' element={<Contact/>} />
          </Route>
      </Routes>
   
   </BrowserRouter>
  )
}

export default Authenticated