import React from 'react';
import Button from 'react-bootstrap/Button';
import './NavBar.css';
import '../cartwidget/CarWidget';
import CarWidget from '../cartwidget/CarWidget';
const NavBar = ({handleCategoria}) => {

    const cambiarCategoria = (categoria) => {
        handleCategoria(categoria)
    }

    return (
        <header>
                        <nav className='headerContainer'>
                <div>
                    <h1 onClick={()=> cambiarCategoria('todos')}>TiendaGarcía</h1>
                </div>

                <div>
                    <Button className='links' onClick={()=> cambiarCategoria('todos')}>HOME</Button>
                    <Button className='links' onClick={()=> cambiarCategoria('electronics')}>ELECTRONICS</Button>
                    <Button className='links' onClick={()=> cambiarCategoria('jewelery')}>JEWERLY</Button>
                    {/* <Button className='links' onClick={()=> cambiarCategoria('Instrumento')}>INSTRUMENTO</Button> */}
                </div>

                <div>
                    <CarWidget/>
                </div>
            </nav>
        </header>
    )
}

export default NavBar