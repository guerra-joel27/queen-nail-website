import Home from "./routes/Home"
import About from "./routes/About"
import Service from "./routes/Service"
import Contact from "./routes/Contact"
import "./style.css";
import { Route,Routes } from 'react-router-dom';

import React from 'react'
import BookHome from './routes/BookHome'
import CreateBooks from './routes/CreateBooks'
import ShowBook from './routes/ShowBook'
import EditBook from './routes/EditBook'
import DeleteBook from './routes/DeleteBook'

// run using 'npm run'
function App() {
  // established connection to Navbar and all other page through import
  // Routes is just another word for linking
  // path is the url to that page, it is in components/MenuItems.js
  // Routes-> Route will allow user to click on the corresponding button and go to that page
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/contact" element={<Contact/>}/>
        
        <Route path='/bookhome' element={<BookHome/>}/>
        <Route path='/books/create' element={<CreateBooks/>}/>
        <Route path='/books/details/:id' element={<ShowBook/>}/>
        <Route path='/books/edit/:id' element={<EditBook/>}/>
        <Route path='/books/delete/:id' element={<DeleteBook/>}/>
      </Routes>

      
      
    </div>
  );

  /**/ 
}

export default App;
