import logo from '../../assets/img/logo.png'
import { MdPhone, MdEmail  } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { GoHeart } from "react-icons/go";
import { FiShoppingCart } from "react-icons/fi";
import { NavLink } from 'react-router-dom';




const Header = () => {
    return (
        <header>
            <div className="container">
                <div className='top-bar'>
                    <small>World Wide Completely Free Returns and Shipping</small>
                    <ul>
                        <li><MdPhone /> +012 3456 789</li>
                        <li><MdEmail /> demo@example.com</li>
                        <li> <FaUserAlt /> Account</li>
                    </ul>
                </div>
            
                <div className='middle-bar'>
                    <div>
                        <img className='logo' src={logo} alt="logo" />
                    </div>
                    <form className='search-form'>
                        <input className='form-control' type="text" name="" id="" placeholder='Search your product' />
                        <button><IoSearchOutline /> </button>
                    </form>
                    <div className='e-com-icon'>
                        <button> <GoHeart /> </button>
                        <button> <FiShoppingCart /> </button>
                    </div>
                </div>
                <div>
                    <nav>
                        <ul className='nav-bar'>
                            <li> <NavLink  to="/"  className={({ isActive }) =>  isActive ? "active" : "" }> Home </NavLink> </li>
                            <li> <NavLink  to="/products"  className={({ isActive }) =>  isActive ? "active" : "" }> Products </NavLink> </li>
                            <li className='dropdown-costom' >
                                <a href="#">PAGES</a>
                                <ul className='dropdown-menu-custom'>
                                    <li><NavLink  to="/cart"  className={({ isActive }) =>  isActive ? "active" : "" }> Cart Page </NavLink></li>
                                    <li><NavLink  to="/checkout"  className={({ isActive }) =>  isActive ? "active" : "" }> Checkout Page </NavLink></li>
                                    <li><NavLink  to="/faq"  className={({ isActive }) =>  isActive ? "active" : "" }>FAQ Page </NavLink></li>
                                    <li><NavLink  to="/login"  className={({ isActive }) =>  isActive ? "active" : "" }>Login Page </NavLink></li>
                                    <li><NavLink  to="/register"  className={({ isActive }) =>  isActive ? "active" : "" }>Registration Page </NavLink></li>
                                    <li><NavLink  to="/not-found"  className={({ isActive }) =>  isActive ? "active" : "" }>Page Not Found </NavLink></li>
                                    <li><NavLink  to="/privacy-policy"  className={({ isActive }) =>  isActive ? "active" : "" }>Privacy Policy Page </NavLink></li>
                                    <li><NavLink  to="/reviews"  className={({ isActive }) =>  isActive ? "active" : "" }>Reviews Page</NavLink></li>
                                    <li><NavLink  to="/search-result"  className={({ isActive }) =>  isActive ? "active" : "" }>Search Result Page</NavLink></li>
                                    <li><NavLink  to="/terms-and-conditions"  className={({ isActive }) =>  isActive ? "active" : "" }>Terms and Condition Page</NavLink></li>
                                    <li><NavLink  to="/thankyou"  className={({ isActive }) =>  isActive ? "active" : "" }>Thank You Page</NavLink></li>
                                    
                                </ul>
                            

                            </li>
                            <li> <NavLink  to="/blog"  className={({ isActive }) =>  isActive ? "active" : "" }> Blog </NavLink> </li>
                            <li> <NavLink  to="/contact"  className={({ isActive }) =>  isActive ? "active" : "" }> Contact </NavLink> </li>
                            
                        </ul>
                    </nav>
                </div>
                
            </div>
        </header>
    );
};

export default Header;