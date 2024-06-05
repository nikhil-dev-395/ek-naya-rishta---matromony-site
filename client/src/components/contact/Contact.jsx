import { FaEnvelope, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import { FaInstagramSquare, FaFacebook } from 'react-icons/fa';

const Contact = () => (
    <section className="bg-gradient-to-b bg-[#FFF7FC] min-h-screen py-32">
        <main className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 p-4">
            <div className="bg-white rounded-lg shadow-lg p-8 md:w-1/2 border border-black">
                <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">Get in Touch</h2>
                <form>
                    <div className="mb-4">
                        <label htmlFor="fullName" className="block text-gray-800 font-semibold mb-2">
                            Full Name
                        </label>
                        <input
                            type="text"
                            name="fullName"
                            id="fullName"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                            placeholder="Your full name"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="phone" className="block text-gray-800 font-semibold mb-2">
                            Phone
                        </label>
                        <input
                            type="text"
                            name="phone"
                            id="phone"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                            placeholder="Your phone number"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-800 font-semibold mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                            placeholder="Your email address"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="subject" className="block text-gray-800 font-semibold mb-2">
                            Subject
                        </label>
                        <input
                            type="text"
                            name="subject"
                            id="subject"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                            placeholder="Subject of your message"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="message" className="block text-gray-800 font-semibold mb-2">
                            Message
                        </label>
                        <textarea
                            name="message"
                            id="message"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                            rows="4"
                            placeholder="Your message"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="bg-slate-900 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300 w-full"
                    >
                        Send Message
                    </button>
                </form>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 md:w-1/2 border border-black">
                <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">Contact Information</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col items-center">
                        <a href="mailto:rishta@email.com" className="text-center flex flex-col items-center">
                            <FaEnvelope className="text-5xl text-teal-500 mb-2" />
                            <h3 className="text-lg font-semibold text-gray-900">Email us</h3>
                            <h4 className="text-teal-500 hover:underline">rishta@email.com</h4>
                            <p className="text-gray-600">Email us for general queries</p>
                        </a>
                    </div>

                    <div className="flex flex-col items-center">
                        <a href="tel:+91123345667" className="text-center flex flex-col items-center">
                            <FaPhoneAlt className="text-5xl text-teal-500 mb-2" />
                            <h3 className="text-lg font-semibold text-gray-900">Call us</h3>
                            <h4 className="text-teal-500">+91 123345667</h4>
                            <p className="text-gray-600">Contact us via mobile for any query</p>
                        </a>
                    </div>

                    <div className="flex flex-col items-center">
                        <a href="https://wa.me/91987654321" className="text-center flex flex-col items-center" target="_blank" rel="noopener noreferrer">
                            <FaWhatsapp className="text-5xl text-green-500 mb-2" />
                            <h3 className="text-lg font-semibold text-gray-900">WhatsApp us</h3>
                            <h4 className="text-green-500">+91 987654321</h4>
                            <p className="text-gray-600">Contact us via WhatsApp for any query</p>
                        </a>
                    </div>

                    <div className="flex flex-col items-center">
                        <a href="https://instagram.com/_rishta123" className="text-center flex flex-col items-center" target="_blank" rel="noopener noreferrer">
                            <FaInstagramSquare className="text-5xl text-pink-500 mb-2" />
                            <h3 className="text-lg font-semibold text-gray-900">DM us</h3>
                            <h4 className="text-pink-500">@rishta123</h4>
                            <p className="text-gray-600">Contact us via Instagram for any query</p>
                        </a>
                    </div>

                    <div className="flex flex-col items-center">
                        <a href="https://facebook.com/_rishta123" className="text-center flex flex-col items-center" target="_blank" rel="noopener noreferrer">
                            <FaFacebook className="text-5xl text-blue-600 mb-2" />
                            <h3 className="text-lg font-semibold text-gray-900">Message us</h3>
                            <h4 className="text-blue-600">@rishta123</h4>
                            <p className="text-gray-600">Contact us via Facebook for any query</p>
                        </a>
                    </div>
                </div>
            </div>
        </main>
    </section>
);

export default Contact;
