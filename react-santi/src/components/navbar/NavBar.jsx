import React from 'react';
import Button from 'react-bootstrap/Button';
import './NavBar.css';
import '../cartwidget/CarWidget';
import CarWidget from '../cartwidget/CarWidget';
import { Link } from 'react-router-dom';
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
                    <Link to={'/'}>
                        <Button className='links'>HOME</Button>
                    </Link>
                    
                    <Link to={'/category/electronics'}>
                        <Button className='links'>ELECTRONICS</Button>
                    </Link>
                    
                    <Link to={'/category/jewelery'}>
                    <Button className='links'>JEWELERY</Button>
                    </Link>
                    
                </div>

                <div>
                    <CarWidget/>
                </div>
            </nav>
        </header>
    )
}

export default NavBar