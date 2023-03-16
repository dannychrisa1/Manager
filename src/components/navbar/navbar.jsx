import logo from '../../assets/logo.svg';
import { useState } from 'react';
import {RiMenu3Line, RiCloseLine } from 'react-icons/ri'; 

const Menu = () => (
        <>
        <p><a href="#home" className="hover:text-darkGrayishBlue">Pricing</a></p>
        <p><a href="#wgpt3" className="hover:text-darkGrayishBlue">Product</a></p>
        <p><a href="#possibility" className="hover:text-darkGrayishBlue">About Us</a></p>
        <p><a href="#features" className="hover:text-darkGrayishBlue">Careers</a></p>
        <p><a href="#blog" className="hover:text-darkGrayishBlue">Community</a></p>
    </> 
)
const Navbar = () => {
  
    return(
        <div className="manage-navbar relative container mx-auto p-6">
           <div className="navbar-content flex justify-between items-center">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div> 
                <div className="nav-links hidden md:flex space-x-6 items-center">
                    <Menu />
                </div>
                <div class="getstarted">
                    <a href="#home" className="bg-brightRed text-white px-6 py-3 rounded-full hover:bg-brightRedLight hidden md:block">Get Started</a>
                </div>

           </div>
        </div>
    )
}

export default Navbar;