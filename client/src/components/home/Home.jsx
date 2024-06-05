import { CgProfile } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import GradientLink from "../utils/GradientLink";

const Home = () => {
    return (
        <>
            <section>
                <main className="w-full py-28 bg-[#FFF7FC] animate-fade">
                    <h1 className="text-3xl capitalize py-5 pb-10 text-center font-semibold">rishta - naye bandhano ka</h1>
                    <div id="container" className="w-full max-w-[90%] px-4 md:px-20 mx-auto flex flex-col md:flex-row">
                        <div id="left" className="w-full md:w-1/2 mx-auto">
                            <h2 className="text-2xl capitalize">find your perfect partner</h2>
                            <p className="text-xl text-slate-500 py-2">Our matrimony service connects compatible singles, helping you find your soulmate.</p>
                            <div className="py-5 gap-4 flex flex-col md:flex-row">
                                <GradientLink toWhere="/about" LinkText="about" />
                                <GradientLink toWhere="/contact" LinkText="contact us" />
                                <GradientLink toWhere="/user/membership" LinkText="get membership" />
                            </div>
                        </div>
                        <div id="right" className="w-full md:w-1/2 mt-8 md:mt-0">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmHDG7-K1q54Jw1UeiTCi6BFrCu9iJ63NdmQ&s" alt="" className="rounded-xl mx-auto" />
                        </div>
                    </div>
                    <div id="works-container" className="pt-28">
                        <h2 className="text-2xl capitalize py-4 text-center font-semibold">how it works</h2>
                        <h1 className="text-4xl font-sans text-center">A Simple 3-Step Process</h1>
                        <p className="text-slate-600 text-center max-w-[90%] mx-auto py-4">Our matrimony service makes it easy to find your perfect match. Simply sign up, create your profile, and start connecting with compatible singles.</p>
                        <ul className="flex flex-col md:flex-row px-4 md:px-20 gap-10">
                            <li className="max-w-full md:max-w-[33%]">
                                <CgProfile className="text-red-500 text-4xl mx-auto" />
                                <h3 className="text-center font-semibold">Create Profile</h3>
                                <p className="text-slate-600 text-center">Sign up and create a detailed profile to showcase your interests and preferences.</p>
                            </li>
                            <li className="max-w-full md:max-w-[30%]">
                                <CiSearch className="text-red-500 text-4xl mx-auto" />
                                <h3 className="text-center font-semibold">Find Matches</h3>
                                <p className="text-slate-600 text-center">Our advanced matching algorithm will suggest compatible singles based on your preferences</p>
                            </li>
                            <li className="max-w-full md:max-w-[30%]">
                                <CiHeart className="text-red-500 text-4xl mx-auto" />
                                <h3 className="text-center font-semibold">Connect & Communicate</h3>
                                <p className="text-slate-600 text-center">Reach out to your matches, chat, and build meaningful connections.</p>
                            </li>
                        </ul>
                    </div>
                </main>
            </section>
        </>
    )
}

export default Home