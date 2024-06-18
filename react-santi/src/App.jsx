import { useState } from 'react';
import './App.css';
import NavBar from './components/navbar/NavBar';
import ItemListContainer from './containers/itemListContainer';
import ItemDetailContainer from './containers/itemDetailContainer/itemDetailContainer'
function App() {

  const [categoria, setCategoria] = useState('todos')


  return (

    <>
      <NavBar handleCategoria={setCategoria}/>
      <ItemListContainer categoria={categoria}/>
      <ItemDetailContainer idProduct = {2}/>
    </>

  );
}

export default App;
