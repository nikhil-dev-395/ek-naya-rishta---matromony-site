import { useState } from "react";
import { CgGenderFemale, CgGenderMale } from "react-icons/cg";
import { FaVoteYea } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoColorWand } from "react-icons/io5";
import { MdCastForEducation } from "react-icons/md";
import { PiCheckSquareLight } from "react-icons/pi";

const Partner = () => {
    const [selectStatus, setSelectStatus] = useState("add");

    const selectStatusButton = () => {
        setSelectStatus(selectStatus === "add" ? "remove" : "add");
    };

    return (
        <>
            <section className="w-full  bg-[#FFF7FC] py-28 flex flex-col gap-10 animate-fade">
                <h1 className="text-center text-slate-800 text-3xl">find your partner</h1>

                <form className="w-[95%] text-sm mx-auto max-w-full flex flex-wrap items-center gap-2 px-10 md:px-2">
                    <label htmlFor="ageRange" className="px-3 flex items-center w-full sm:w-auto">
                        <FaVoteYea className="mr-1" />
                        <span className="w-full">age range</span>
                    </label>
                    <select name="ageRange" id="ageRange" className="border-2 py-2 rounded-xl w-full sm:w-auto">
                        <option value="18-25">18-25</option>
                        <option value="26-30">26-30</option>
                        <option value="31-35">31-35</option>
                        <option value="36-40">36-40</option>
                        <option value="41-45">41-45</option>
                        <option value="46-50">46-50</option>
                        <option value="51-60">51-60</option>
                    </select>

                    <label htmlFor="religion" className="pl-10 pr-2 flex items-center w-full sm:w-auto">
                        <PiCheckSquareLight className="mr-1" />
                        <span>religion</span>
                    </label>
                    <select name="religion" id="religion" className="border-2 px-3 py-2 rounded-xl w-full sm:w-auto">
                        <option value="hinduism">hinduism</option>
                        <option value="islam">islam</option>
                        <option value="christianity">christianity</option>
                        <option value="buddhism">buddhism</option>
                        <option value="jainism">jainism</option>
                    </select>

                    <label htmlFor="skinColor" className="pl-10 pr-2 flex items-center w-full sm:w-auto">
                        <IoColorWand className="mr-1" />
                        <span>skinColor</span>
                    </label>
                    <select name="skinColor" id="skinColor" className="border-2 px-3 py-2 rounded-xl w-full sm:w-auto">
                        <option value="black">black</option>
                        <option value="white">white</option>
                        <option value="brown">brown</option>
                    </select>

                    
                    <label htmlFor="gender" className="pl-10 pr-2 flex items-center w-full sm:w-auto">
                        <CgGenderFemale  />
                        <CgGenderMale className="mr-1" />
                        <span>gender</span>
                    </label>
                    <select name="gender" id="gender" className="border-2 px-3 py-2 rounded-xl w-full sm:w-auto">
                        <option value="male">male</option>
                        <option value="female">female</option>
                     </select>


                    

                    <label htmlFor="location" className="pl-10 pr-2 flex items-center w-full sm:w-auto">
                        <FaLocationDot className="mr-1" />
                        <span>location</span>
                    </label>
                    <select name="location" id="location" className="border-2 px-3 py-2 rounded-xl w-full sm:w-auto">
                        <option value="amravati">amravati</option>
                        <option value="murtizapur">murtizapur</option>
                        <option value="badnera">badnera</option>
                        <option value="balaghat">balaghat</option>
                    </select>

                    <label htmlFor="education" className="pl-10 pr-2 flex items-center w-full sm:w-auto">
                        <MdCastForEducation className="mr-1" />
                        <span>education</span>
                    </label>
                    <select name="education" id="education" className="border-2 px-3 py-2 rounded-xl w-full sm:w-auto">
                        <option value="10th">10th</option>
                        <option value="12th">12th</option>
                        <option value="graduate">graduate</option>
                        <option value="postgraduate">postgraduate</option>
                        <option value="doctorate">doctorate</option>
                        <option value="below-10th">below-10th</option>
                    </select>

                    <button className="rounded-2xl py-2 px-4 bg-slate-950 text-white mx-1">search</button>
                </form>

                <div id="partners" className="w-[90%] px-4 sm:px-10 flex flex-wrap gap-x-12 gap-y-8 mx-auto">
                    {/* card where people details  */}
                    <div className="w-full sm:w-[30%] border border-slate-500 bg-violet-300 bg-gradient-to-r from-red-100 via-purple-300 to-blue-200 px-3 py-2 rounded-3xl ">
                        <img src="https://images.unsplash.com/photo-1715638427009-8b0fe7096838?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMHx8fGVufDB8fHx8fA%3D%3D" alt="partners image" className="rounded-xl" />
                        
                        <ul className="py-4">
                            <li> name : <span>nikhil wankhade</span></li>
                            <li>age : <span>18</span></li>
                            <li>education : <span>bca</span></li>
                            <li>job-title : <span>software developer</span></li>
                            <li>job type : <span>private</span></li>
                            <li>location : <span>amravati</span></li>
                            <li>religion : <span>religion</span></li>
                        </ul>

                        <button onClick={selectStatusButton} className="text-xl border-2 border-black px-4 py-2 rounded-3xl bg-black text-white hover:bg-slate-400">{selectStatus}</button>
                    </div>

 
                  
                </div>
            </section>
        </>
    );
};

export default Partner;
