import { useState } from 'react'
import {Link} from 'react-router-dom'
// import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'

const Navbar = () => {
    const[click, setClick] = useState(false)
    const handleClick = () => setClick(!click)


  return (
    <header>
        <nav>
            <div className='hamburger-menu' onClick={handleClick}>
                {/* Replace hamburger icon with an x when clicked 
                todo: CSS to open and close menu*/}
                {/* {click ? <CloseIcon /> : < HamburgerIcon />} */}
            </div>
            <form action="/selectedFacility" method="post" name="selectedFacility" id="selectedFacility">
                {/* insert facility select component */}
            </form>
            {/* when handle is clicked, add 'active' css to nav-menu: expand on mobile */}
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/' className='nav-link'>Overview</Link>
                </li>
                <li className='nav-item'>
                    <Link to='/reservations' className='nav-link'>Reservations</Link>
                </li>
                <li className='nav-item'>
                    <Link className='nav-link' to='/campsites'>Campsites</Link>
                </li>
                <li className='nav-item'>
                    <Link className='nav-link' to='/user'>
                        {/* import user firstname and lastname from db */}
                    </Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar
