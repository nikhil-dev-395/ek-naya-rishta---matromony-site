import { useState } from "react";
import { useNavigate } from "react-router-dom";

const UserDetails = () => {
    const [previewImage, setPreviewImage] = useState(null);
    const navigate = useNavigate()


    const ProfileRegister = () => { 
        navigate("/registration/user/VerifyDocs")
    }

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setPreviewImage(reader.result);
            };
            reader.readAsDataURL(file);
        } else {
            setPreviewImage(null);
        }
    };

    // Define an array of objects containing the input field details
    const inputFields = [
        { label: "Name", placeholder: "Name", name: "name", type: "text" },
        { label: "Father's Name", placeholder: "Father's Name", name: "fatherName", type: "text" },
        { label: "Surname", placeholder: "Surname", name: "surname", type: "text" },
        { label: "Mother's Name", placeholder: "Mother's Name", name: "motherName", type: "text" },
        { label: "Age", placeholder: "Age", name: "age", type: "number" },
        { label: "Gender", placeholder: "Select Gender", name: "gender", type: "select", options: ["Male", "Female", "Other"] },
        { label: "Date of Birth", name: "dob", type: "date" },
        { label: "Phone Number", placeholder: "Phone Number", name: "phone", type: "tel" },
        { label: "Email", placeholder: "Email", name: "email", type: "email" },
        { label: "Address", placeholder: "Address", name: "address", type: "textarea" },
        { label: "Height", placeholder: "Height in cm eg. 170cm", name: "height", type: "text" },
        { label: "Weight", placeholder: "Weight (e.g., 70kg)", name: "weight", type: "text" },
         { label: "Education", placeholder: "Education", name: "education", type: "text" },
        { label: "Religion", placeholder: "Religion", name: "religion", type: "text" },
        { label: "Occupation", placeholder: "Occupation", name: "occupation", type: "text" },
        { label: "Annual Income", placeholder: "Annual Income", name: "income", type: "text" },
        { label: "Preferred Age Range", placeholder: "Preferred Age Range", name: "preferredAge", type: "select", options: ["18-25", "26-35", "36-45", "46+"], },
        { label: "Preferred Height Range", placeholder: "Preferred Height Range", name: "preferredHeight", type: "select", options: ["Short", "Average", "Tall"], },
        { label: "Preferred Education", placeholder: "Preferred Education", name: "preferredEducation", type: "select", options: ["High School", "Bachelor's Degree", "Master's Degree", "PhD"], },
        { label: "Preferred Religion", placeholder: "Preferred Religion", name: "preferredReligion", type: "select", options: ["Islam", "Christianity", "Hinduism", "Buddhism", "Judaism", "Other"], },
        { label: "Preferred Complexion", placeholder: "Preferred Complexion", name: "preferredComplexion", type: "select", options: ["Fair", "Medium", "Dark"], },
    
        { label: "Preferred Profession", placeholder: "Preferred Profession", name: "preferredProfession", type: "text" },
    ];

    return (
        <>
            <section className="w-full bg-gradient-to-br from-[#FFF7FC] to-[#E6E6FA] flex justify-center items-center min-h-screen py-20 animate-fade">
                <main className="w-full max-w-4xl py-12 bg-white shadow-lg rounded-lg px-4 md:px-10">
                    <h1 className="text-3xl text-center font-semibold mb-4 text-gray-800">Register</h1>
                    <h2 className="text-2xl text-center mb-2 text-gray-700">Welcome to Rishta</h2>
                    <h2 className="text-2xl text-center mb-8 text-gray-700">Complete Your Rishta Profile</h2>

                    <form className="flex flex-wrap justify-center gap-6 mx-auto py-5">
                        <div className="flex justify-center mb-6 w-full md:w-auto">
                            <div className="relative ">
                                <img
                                    src={previewImage || "https://via.placeholder.com/150"}
                                    alt="Avatar"
                                    className="rounded-full w-32 h-32 object-cover border-4 border-gray-300"
                                />
                                <label
                                    htmlFor="avatar"
                                    className="absolute bottom-0 right-0 cursor-pointer bg-indigo-500 text-white rounded-full p-2 hover:bg-indigo-600 transition-colors duration-300"
                                >
                                    <input
                                        type="file"
                                        name="avatar"
                                        id="avatar"
                                        className="hidden"
                                        onChange={handleImageChange}
                                    />
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="w-6 h-6"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M12 5.25a5.25 5.25 0 016.775 7.898.75.75 0 011.106.166.75.75 0 01-1.074 1.064A7.001 7.001 0 1018 12c0-3.865-3.135-7-7-7a6.99 6.99 0 00-1.898 13.992.75.75 0 111.033-1.09A5.25 5.25 0 0112 5.25zM9 9a3 3 0 116 0 3 3 0 01-6 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </label>
                            </div>
                        </div>

                        {/* Map over inputFields array to render input fields */}
                        {inputFields.map((field, index) => (
                            <div key={index} className="flex flex-col mb-4 w-full md:w-1/2 lg:w-1/3">
                                <label htmlFor={field.name} className="flex text-gray-700 font-semibold mb-1">
                                    {field.label}
                                </label>
                                {field.type === 'select' ?
                                    (
                                        <select
                                            name={field.name}
                                            className="py-2 px-3 border-2 border-gray-300 outline-none rounded-lg focus:border-indigo-500 transition-colors duration-300" required   >

                                            <option value="">{field.placeholder}</option>
                                            {field.options.map((option, i) => (
                                                <option key={i} value={option}>
                                                    {option}
                                                </option>

                                            ))}
                                        </select>
                                    ) :
                                    field.type === 'date' ? (

                                        <input type="date" name={field.name} className="py-2 px-3 border-2 border-gray-300 outline-none rounded-lg focus:border-indigo-500 transition-colors duration-300" required />

                                    ) :
                                        field.type === 'textarea' ? (

                                            <textarea
                                                placeholder={field.placeholder}
                                                name={field.name}
                                                className="py-2 px-3 border-2 border-gray-300 outline-none rounded-lg focus:border-indigo-500 transition-colors duration-300"
                                                required
                                            ></textarea>


                                        ) : (
                                            <input
                                                type={field.type}
                                                placeholder={field.placeholder}
                                                name={field.name}
                                                className="py-2 px-3 border-2 border-gray-300 outline-none rounded-lg focus:border-indigo-500 transition-colors duration-300"
                                                required
                                            />
                                        )}
                            </div>
                        ))}
                        <div className="flex flex-col mb-4 w-full md:w-1/2 lg:w-1/3">

                            <button
                                type="button"
                                className="py-4 w-full md:w-1/2 lg:w-1/3 bg-indigo-600 text-white hover:bg-indigo-700 px-3 border-2 border-indigo-600 ease-in-out duration-300 outline-none rounded-lg mt-4 mx-auto "
                            onClick={()=>ProfileRegister()}
                            >
                                continue
                            </button>
                        </div>

                    </form>
                </main>
            </section>

        </>
    );
};

export default UserDetails;