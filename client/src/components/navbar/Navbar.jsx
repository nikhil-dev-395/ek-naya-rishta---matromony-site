import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
const logoImg = "/public/img/RISHTA.png";

const navItems = [
    { to: "/", label: "Home", className: "text-white hover:text-gray-400" },
    { to: "/about", label: "About", className: "text-white hover:text-gray-400" },
    { to: "/contact", label: "Contact", className: "text-white hover:text-gray-400" },
    { to: "/partner", label: "Partner", className: "text-white hover:text-gray-400" },
    { to: "/login", label: "Login", className: "bg-white text-black rounded-2xl hover:bg-gray-300" },
];

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="w-full h-20 bg-black text-white fixed top-0 left-0 z-50">
            <nav className="flex justify-between items-center md:max-w-4xl max-w-60 mx-auto py-3 px-4 md:px-0">
                <Link to="/">
                    <img src={logoImg} className="w-16 h-16 rounded-full" alt="logo" />
                </Link>

                <ul className={`md:flex gap-9 ${isMobileMenuOpen ? "flex flex-col items-center bg-black" : "hidden"} md:items-center md:static absolute top-20 left-0 w-full bg-black md:bg-transparent md:flex-row flex-col items-center md:w-auto transition-transform duration-300`}>
                    {navItems.map((item, index) => (
                        <li key={index} className="my-2 md:my-0">
                            <Link to={item.to} className={`block py-2 px-4 ${item.className}`}>
                                {item.label}
                            </Link>
                        </li>
                      

                    ))}

                    <li className="">
                        <Link to="/user/profile" className=" bg-white text-black rounded-2xl hover:bg-gray-300">
                            <img src="https://images.unsplash.com/photo-1715638427009-8b0fe7096838?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMHx8fGVufDB8fHx8fA%3D%3D" alt="my profile" className="w-12 h-12 rounded-full object-cover" />
                        </Link>
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
