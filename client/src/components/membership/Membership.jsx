import { MdOutlineCardMembership } from "react-icons/md";

const Membership = () => (
    <section className="w-full py-4 sm:py-6 md:py-8 lg:py-16 bg-[#FFF7FC] mx-auto">
        <div className="flex flex-col sm:flex-row px-2 sm:px-4 md:px-8 lg:px-56 pt-12 sm:pt-16">
            {/* Instructions and information */}
            <div className="max-w-md sm:max-w-lg mb-6 sm:mb-0 sm:mr-6 ">
                <div className="text-xl mt-8 md:mt-3 sm:text-2xl md:text-3xl text-slate-700 border-2 border-purple-600 rounded-2xl py-3 sm:py-10 md:py-10 flex items-center justify-center px-6 sm:px-8 md:px-14">
                    <MdOutlineCardMembership className="text-lg sm:text-xl md:text-2xl mx-2 md:mx-3 animate-bounce" />
                    <span>Buy our membership plan</span>
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold pt-3 sm:pt-5 md:pt-10 pb-2 text-center md:text-balance">
                    Why You Should Buy Our Membership
                </h3>
                <ul className="list-disc pl-4 text-xs sm:text-sm md:text-base text-slate-800 px-10  md:px-2 mx-5 md:mx-2" >
                    <li className="mb-2">
                        <span className="font-semibold">Better Matches:</span> Access a larger pool of verified and serious profiles, increasing your chances of finding a compatible partner.
                    </li>
                    <li className="mb-2">
                        <span className="font-semibold">More Features:</span> Unlock advanced search filters, direct messaging, and enhanced privacy settings to improve your matchmaking experience.
                    </li>
                    <li className="mb-2">
                        <span className="font-semibold">Higher Visibility:</span> Enjoy increased profile visibility, making it easier for potential matches to find and connect with you.
                    </li>
                </ul>
            </div>
            {/* Membership pack design */}
            <div className=" w-full md:w-2/6 bg-gradient-to-r from-slate-200 via-purple-200 to-blue-200 mx-auto p-2 sm:p-4 rounded-xl shadow-lg backdrop-blur-md bg-opacity-60 border border-gray-200">
                <img
                    src="https://images.unsplash.com/photo-1715638427009-8b0fe7096838?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMHx8fGVufDB8fHx8fA%3D%3D"
                    className="w-full mx-auto rounded-xl mb-2 sm:mb-4"
                    alt="premium membership plan"
                />
                <p className="text-xs sm:text-sm text-gray-700 mb-2 sm:mb-4 px-2 sm:px-0">
                    By purchasing this premium plan, you will gain access to all the app&apos;s features, including the ability to chat with admins, make video calls, and receive more detailed partner information for enhanced searching. Additionally, we will provide personalized partner recommendations for you.
                </p>
                <button className="py-2 sm:py-3 px-4 sm:px-6 md:px-10 rounded-xl bg-gradient-to-r from-green-400 to-blue-500 text-white flex items-center gap-2 sm:gap-3 hover:bg-gradient-to-r hover:from-green-500 hover:to-blue-600 transition-colors duration-300 animate-bounce hover:animate-none mx-auto">
                    <MdOutlineCardMembership className="text-base sm:text-lg md:text-xl animate-bounce" />
                    Get Membership
                </button>
            </div>
        </div>
    </section>
);

export default Membership;