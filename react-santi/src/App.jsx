import { useState } from 'react';
import './App.css';
import NavBar from './components/navbar/NavBar';
import ItemListContainer from './containers/itemListContainer';
import ItemDetailContainer from './containers/itemDetailContainer/itemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/category/:idCategory' element={<ItemListContainer />} />
        <Route path='/item/:id' element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
