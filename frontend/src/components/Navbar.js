import { Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, useDisclosure } from '@chakra-ui/react'
import {Link} from 'react-router-dom'
import { useSignOut } from '../hooks/useSignOut'

// Only show navbar when logged in 

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { signOut } = useSignOut()

    const handleClick = () => {
        signOut()
        onClose()
    }

    return (
        <header>
            <Button onClick={onOpen}>=</Button>
            <Drawer isOpen={isOpen} onClose={onClose} placement='left'>
                    <DrawerOverlay />
                    <DrawerContent>
                        <DrawerHeader>Welcome {/* user */}</DrawerHeader>
                        <DrawerBody>
                            <nav>
                                <form action="/selectedFacility" method="post" name="selectedFacility" id="selectedFacility">
                                    {/* insert facility select component */}
                                </form>
                                {/* when handle is clicked, add 'active' css to nav-menu: expand on mobile */}
                                <ul className='nav-menu'>
                                    <li className='nav-item' onClick={onClose}>
                                        <Link to='/' className='nav-link' onClose={onClose} >Overview</Link>
                                    </li>
                                    <li className='nav-item' onClick={onClose}>
                                        <Link to='/reservations' className='nav-link'>Reservations</Link>
                                    </li>
                                    <li className='nav-item' onClick={onClose}>
                                        <Link className='nav-link' to='/campsites'>Campsites</Link>
                                    </li>
                                    <li className='nav-item' onClick={onClose}>
                                        <Link className='nav-link' to='/settings'>
                                            {/* import user firstname and lastname from db */} Settings
                                        </Link>
                                    </li>
                                    <li className='nav-item' onClick={handleClick}>
                                        <Link className='nav-link' to='/settings'>
                                            Sign out
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </DrawerBody>
                    </DrawerContent>
            </Drawer>
        </header>
    )
    }

export default Navbar
