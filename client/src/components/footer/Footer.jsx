 import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-gray-200 py-10 w-full  h-auto">
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 px-4">
                {/* About Section */}
                <div className="footer-section">
                    <h2 className="text-xl font-bold mb-4">About Us</h2>
                    <p>We are committed to helping you find the perfect partner. Our platform offers personalized matchmaking services and a secure environment to meet new people.</p>
                </div>

                {/* Quick Links */}
                <div className="footer-section">
                    <h2 className="text-xl font-bold mb-4">Quick Links</h2>
                    <ul>
                        <li className="mb-2"><a href="#" className="hover:underline">Home</a></li>
                        <li className="mb-2"><a href="#" className="hover:underline">About</a></li>
                        <li className="mb-2"><a href="#" className="hover:underline">Services</a></li>
                        <li className="mb-2"><a href="#" className="hover:underline">Contact</a></li>
                    </ul>
                </div>

                {/* Contact Information */}
                <div className="footer-section">
                    <h2 className="text-xl font-bold mb-4">Contact Us</h2>
                    <p>Email: support@matrimony.com</p>
                    <p>Phone: +123 456 7890</p>
                    <p>Address: 123 Matrimony Lane, Love City, Heartland</p>
                </div>

                {/* Social Media */}
                <div className="footer-section">
                    <h2 className="text-xl font-bold mb-4">Follow Us</h2>
                    <div className="flex space-x-4">
                        <a href="#" className="hover:text-white">
                            <FaFacebookF />
                        </a>
                        <a href="#" className="hover:text-white">
                            <FaTwitter />
                        </a>
                        <a href="#" className="hover:text-white">
                            <FaInstagram />
                        </a>
                        <a href="#" className="hover:text-white">
                            <FaLinkedinIn />
                        </a>
                    </div>
                </div>
            </div>

            <div className="text-center text-gray-500 mt-10">
                &copy; 2024 Matrimony. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
