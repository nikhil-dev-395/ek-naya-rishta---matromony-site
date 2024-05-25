import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
const logoImg = "/public/img/RISHTA.png";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="w-full h-20 bg-black text-white fixed top-0 left-0 z-50 ">
            <nav className="flex justify-between items-center md:max-w-4xl max-w-60 mx-auto py-3 px-4 md:px-0">
                <Link to="/">
                    <img src={logoImg} className="w-16 h-16 rounded-full" alt="logo image" />
                </Link>

                <ul className={`md:flex gap-9 ${isMobileMenuOpen ? "flex flex-col items-center bg-black" : "hidden"} md:items-center md:static absolute top-20 left-0 w-full bg-black md:bg-transparent md:flex-row flex-col items-center md:w-auto transition-transform duration-300`}>
                    <li className="my-2 md:my-0">
                        <Link to="/" className="block py-2 px-4 text-white hover:text-gray-400">Home</Link>
                    </li>
                    <li className="my-2 md:my-0">
                        <Link to="/about" className="block py-2 px-4 text-white hover:text-gray-400">About</Link>
                    </li>
                    <li className="my-2 md:my-0">
                        <Link to="/contact" className="block py-2 px-4 text-white hover:text-gray-400">Contact</Link>
                    </li>
                    <li className="my-2 md:my-0">
                        <Link to="/partner" className="block py-2 px-4 text-white hover:text-gray-400">Partner</Link>
                    </li>
                    <li className="my-2 md:my-0">
                        <Link to="/login" className="block py-2 px-4 bg-white text-black rounded-2xl hover:bg-gray-300">Login</Link>
                    </li>
                </ul>


                <div className="md:hidden flex items-center">
                    <button onClick={toggleMobileMenu} className="focus:outline-none">
                        {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
