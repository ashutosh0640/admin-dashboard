import { NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar">
                <div className="container">
                    <div>
                        <h1>Logo</h1>
                    </div>
                    
                    <div class='list'>
                        <ul>
                            <li>
                                <NavLink className='navlink' to="/home">Home</NavLink>
                            </li>
                            <li>
                                <NavLink className='navlink' to="/product">Product</NavLink>
                            </li>
                            <li>
                                <NavLink className='navlink' to="/user">User</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
