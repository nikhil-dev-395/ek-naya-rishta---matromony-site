const About = () => {
    return (
        <>
            <section className="w-full py-28 animate-fade bg-[#FFF7FC] ">
                <h1 className="text-center text-4xl md:text-5xl font-extrabold font-serif text-gray-800">RISHTA</h1>
                <h2 className="text-xl md:text-2xl text-center text-violet-700 mt-4">About Us</h2>

                <div id="container" className="max-w-7xl px-4 md:px-10 flex flex-col md:flex-row mx-auto gap-8 md:gap-16 py-16">
                    <div id="left" className="w-full md:w-2/3">
                        <h1 className="text-xl md:text-2xl font-semibold text-red-400 mb-4">Connecting Hearts, Fulfilling Dreams - Your Perfect Match Awaits</h1>
                        <p className="text-gray-700 mb-6">
                            We match people as life partners based on their requirements. We are a matrimony organization dedicated to helping individuals find their suitable relationships.
                        </p>

                        <div id="mission" className="py-10">
                            <h2 className="text-xl md:text-2xl font-extrabold text-gray-800 mb-4">Our Goal</h2>
                            <p className="text-gray-700 leading-relaxed">
                                At RISHTA, our mission is to facilitate meaningful connections and help individuals find their perfect life partner. We believe that every person deserves a fulfilling relationship, and we are dedicated to making that dream a reality through a trusted and personalized platform.
                            </p>
                        </div>
                    </div>

                    <div id="right" className="w-full md:w-1/3 items-center">
                        <img
                            src="https://plus.unsplash.com/premium_photo-1670588775988-ae6d15872e3c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y291cGxlfGVufDB8fDB8fHww"
                            alt="profile"
                            className="w-2/3 h-2/3  object-cover rounded-full border-4 border-gray-200 shadow-lg"
                        />
                    </div>
                </div>

                <div id="introduction" className="w-full max-w-4xl mx-auto">
                    <div id="box" className="mx-auto w-full max-w-md shadow-xl border px-6 md:px-10 py-8 md:py-12 bg-white rounded-lg">
                        <img
                            src="https://plus.unsplash.com/premium_photo-1670588775988-ae6d15872e3c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y291cGxlfGVufDB8fDB8fHww"
                            alt="owner"
                            className="w-20 md:w-24 h-20 md:h-24 object-cover rounded-full mx-auto mb-6"
                        />
                        <h1 className="text-center text-xl font-bold text-gray-800">Owner</h1>
                        <h2 className="text-center text-lg font-semibold text-gray-700 mt-2 mb-4">Shalini Wankhade</h2>
                        <p className="text-gray-600 leading-relaxed">
                            As the head of our premier matchmaking organization, I specialize in helping individuals find their perfect life partners based on their unique preferences. We are committed to creating meaningful connections and ensuring each match aligns with our clients desires and values. Let us guide you on your journey to finding true love.
                        </p>
                    </div>
                </div>

                <div id="testimonials" className="w-full max-w-7xl mx-auto mt-20 py-10 bg-white rounded-lg shadow-md">
                    <h2 className="text-xl md:text-2xl font-extrabold text-center text-gray-800 mb-8">Testimonials</h2>
                    <div className="flex flex-col md:flex-row justify-around gap-8 px-4 md:px-10">
                        <div className="w-full md:w-1/3 p-4 border rounded-lg shadow-sm">
                            <p className="text-gray-700 italic">RISHTA helped me find the love of my life! The personalized approach made all the difference.</p>
                            <p className="mt-4 text-gray-800 font-semibold">- Aisha Khan</p>
                        </div>
                        <div className="w-full md:w-1/3 p-4 border rounded-lg shadow-sm">
                            <p className="text-gray-700 italic">A wonderful service that truly cares about its clients. Highly recommended!</p>
                            <p className="mt-4 text-gray-800 font-semibold">- Raj Patel</p>
                        </div>
                        <div className="w-full md:w-1/3 p-4 border rounded-lg shadow-sm">
                            <p className="text-gray-700 italic">I found my soulmate through RISHTA. The team was supportive and attentive throughout.</p>
                            <p className="mt-4 text-gray-800 font-semibold">- Priya Sharma</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;