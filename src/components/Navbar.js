import { Link } from "react-router-dom";

const Navbar = () => {

    document.addEventListener('DOMContentLoaded', function () {
        const btn = document.getElementById('menu-btn');
        const nav = document.getElementById('menu');
        
        btn.addEventListener('click', () => {
            btn.classList.toggle('open');
            nav.classList.toggle('flex');
            nav.classList.toggle('hidden');
        });
    });  

    return (
        <div>
            <nav className="relative p-4 pb-2 md:pb-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div>
                        <img src={require('../img/Pramukh Pharmcueticals Logo.png')} alt="Logo" className="w-60"/>
                    </div>
                    {/* Menu Items */}
                    <div className="hidden space-x-12 md:flex text-lg font-semibold">
                        <Link to="/" className="hover:text-mainBlue">Home</Link>
                        <Link to="/about" className="hover:text-mainBlue">About Us</Link>
                        <Link to="/services" className="hover:text-mainBlue">Services</Link>
                        <Link to="/branches" className="hover:text-mainBlue">Branches</Link>
                    </div>
                    {/* Phone Number */}
                    <div className="hidden lg:flex items-center space-x-5 text-darkerBlue">
                        <i className="fa-solid fa-phone fa-lg"></i>
                        <a href="tel:0756545315" className="text-2xl font-sans">0756 545-315</a>
                    </div>
                    {/* Button */}
                    <a href="tel:0756545315" className="hidden p-3 px-6 pt-2 text-white bg-mainGreen rounded-full baseline hover:bg-lighterGreen md:block">Contact Us</a>
                    {/* Mobile Menu */}
                    <div className="md:hidden">
                        <div id="menu" className="absolute flex-col items-center hidden self-end mt-10 space-y-6 font-bold sm:w-auto sm:self-center left-6 right-6 drop-shadow-md">
                            <ul className="w-full font-medium flex flex-col p-4 border border-gray-200 rounded-lg bg-gray-100 rtl:space-x-reverse">
                                <li>
                                <a href="index.html" className="block py-2 px-3 text-white bg-blue-700 rounded" aria-current="page">Home</a>
                                </li>
                                <li>
                                <a href="About Us.html" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100">About Us</a>
                                </li>
                                <li>
                                <a href="Services.html" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100">Services</a>
                                </li>
                                <li>
                                <a href="Branches.html" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100">Branches</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* Hamburger Menu */}
                    <button id="menu-x`btn" className="block hamburger md:hidden focus:outline-none mr-4">
                        <span className="hamburger-top"></span>
                        <span className="hamburger-middle"></span>
                        <span className="hamburger-bottom"></span>
                    </button>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;