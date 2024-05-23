import './App.css';
import NavBar from './components/navbar/NavBar';
import ItemListContainer from './containers/itemListContainer';

function App() {
  return (

    <div>
      <header>
        <NavBar />
      </header>

      <ItemListContainer greeting = 'Hola'/>
    </div>

  );
}

export default App;
