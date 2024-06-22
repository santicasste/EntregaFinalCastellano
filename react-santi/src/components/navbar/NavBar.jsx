import React from 'react';
import Button from 'react-bootstrap/Button';
import './NavBar.css';
import CarWidget from '../cartwidget/CarWidget';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <header>
            <nav className='headerContainer'>
                <div>
                    <Link to='/'>
                        <h1>TiendaGarcía</h1>
                    </Link>
                </div>

                <div>
                    <Link to='/'>
                        <Button className='links'>HOME</Button>
                    </Link>
                    
                    <Link to='/category/electronics'>
                        <Button className='links'>ELECTRONICS</Button>
                    </Link>
                    
                    <Link to='/category/jewelery'>
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

export default NavBar;
