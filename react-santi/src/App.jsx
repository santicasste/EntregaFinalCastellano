import { useState } from 'react';
import './App.css';
import NavBar from './components/navbar/NavBar';
import ItemListContainer from './containers/itemListContainer';
import ItemDetailContainer from './containers/itemDetailContainer/itemDetailContainer'
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {

  const [categoria, setCategoria] = useState('todos')


  return (

    <>
      <BrowserRouter> 

        <NavBar handleCategoria={setCategoria}/>

        <Routes>
          <Route path='/' element={<ItemListContainer categoria={categoria}/>} /> 
          <Route path='/category/:idCategory' element={<ItemListContainer/>}></Route>
          <Route path='/productDetail/:id' element={<ItemDetailContainer/>}></Route>
        </Routes>

      </BrowserRouter>
    </>

  );
}

export default App;
