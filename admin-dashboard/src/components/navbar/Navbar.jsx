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
                    <div  >
                        <h1>Logo</h1>
                    </div>
                    <div>
                        <ul>
                            <li>
                                <NavLink to="/home">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/product">Product</NavLink>
                            </li>
                            <li>
                                <NavLink to="/user">User</NavLink>
                            </li>
                            <li>
                                <NavLink to="#">About</NavLink>
                            </li>
                            <li>
                                <NavLink to="#">Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
