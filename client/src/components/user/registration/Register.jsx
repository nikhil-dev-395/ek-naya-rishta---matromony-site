import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <>
            <section className="w-full bg-[#FFF7FC]  ">

                <main className=" w-full py-28">

                    <h1 className="text-xl text-center font-semibold"> Register</h1>
                    <h2 className="text-2xl text-center">welcome to Rishta </h2>
                    <form className="flex flex-col md:w-1/3 h-auto px-10  mx-auto py-5">
                        <label htmlFor="name">name</label>
                        <input type="text" placeholder="name" name="name" className="py-4 px-3 border-2  border-black outline-none rounded-lg " required />
                        <label htmlFor="email" className="mt-4">email</label>
                        <input type="email" placeholder="Email" name="email" className="py-4 px-3 border-2  border-black outline-none rounded-lg " required />
                        <label htmlFor="password" className="mt-4">password</label>
                        <input type="password" placeholder="Password" className="py-4 px-3 border-2  border-black outline-none rounded-lg" required />

                        <button type="submit" className="py-4 w-32 bg-black text-white hover:bg-[#8C94FF] hover:text-black px-3 border-2  ease-in-out duration-500 border-black outline-none rounded-lg mt-4">continue</button>
                    </form>

                    <div>
                        <h2 className="text-center">OR</h2>

                        <a href="http://googl.com" target="_blank" rel="noopener noreferrer" className="text-center text-xl flex items-center gap-3 border-2 border-black rounded-2xl w-72 py-3 px-6 mx-auto my-4 bg-white"> <FcGoogle /> continue with google</a>

                        <h2 className="text-center underline text-blue-500"><Link to="/login" >already have an account</Link></h2>
                   </div>

                </main>


            </section>
        </>
    )
}

export default Register