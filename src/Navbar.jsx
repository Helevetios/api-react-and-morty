import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-md bg-dark sticky-top border-bottom" data-bs-theme="dark">
            <div className="container">
                <div className="offcanvas-body">
                    <ul className="navbar-nav flex-grow-1 justify-content-between">
                        <li className="nav-item"><Link className='nav-link' to={'/'}>Personajes</Link></li>
                        <li className="nav-item"><Link className='nav-link' to={'/location'}>Lugares</Link></li>
                        <li className="nav-item"><Link className='nav-link' to={'/episodes'}>Episodios</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
