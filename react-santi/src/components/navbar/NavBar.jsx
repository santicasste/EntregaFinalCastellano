import React from 'react';
import Button from 'react-bootstrap/Button';
import './NavBar.css';
import '../cartwidget/CarWidget';
import CarWidget from '../cartwidget/CarWidget';
const NavBar = () => {
    return (
            <nav className='headerContainer'>
                <div>
                    <h1>TiendaGarcía</h1>
                </div>

                <div>
                    <Button className='links'>HOME</Button>
                    <Button className='links'>DISCOGRAFÍA</Button>
                    <Button className='links'>GALERÍA</Button>
                    <Button className='links'>TIENDA</Button>
                    <Button className='links'>CONTACTO</Button>
                </div>

                <div>
                    <CarWidget/>
                </div>
            </nav>
    )
}

export default NavBar