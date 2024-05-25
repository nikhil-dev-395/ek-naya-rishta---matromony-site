import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <>
            <section className="w-full py-10 bg-[#FFF7FC] pt-28">

                <main className="">

                    <h1 className="text-xl text-center font-semibold">Rishta login</h1>
                    <h2 className="text-2xl text-center">welcome to Rishta </h2>
                    <form className="flex flex-col md:w-1/3 px-10  mx-auto py-5">
                        <label htmlFor="email">email</label>
                        <input type="email" placeholder="Email" name="email" className="py-4 px-3 border-2  border-black outline-none rounded-lg " required />
                        <label htmlFor="password" className="mt-4">password</label>
                        <input type="password" placeholder="Password" className="py-4 px-3 border-2  border-black outline-none rounded-lg" required />
                        <a href="#forgot" className="text-end underline">forgot password</a>
                        <button type="submit" className="py-4 w-32 bg-black text-white hover:bg-[#8C94FF] hover:text-black px-3 border-2  border-black outline-none rounded-lg mt-4">Login</button>
                    </form>

                    <h2 className="text-center">OR</h2>

                    <a href="http://googl.com" target="_blank" rel="noopener noreferrer" className="text-center text-xl flex items-center gap-3 border-2 border-black rounded-2xl w-72 py-3 px-6 mx-auto my-4"> <FcGoogle /> continue with google</a>

                    <h2 className="text-center underline text-blue-500"><Link to="/register" >dont have an account</Link></h2>

                </main>


            </section>
        </>
    )
}

export default Login