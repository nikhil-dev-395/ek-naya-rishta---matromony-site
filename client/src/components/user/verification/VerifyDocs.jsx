import { useState } from "react";

const VerifyDocs = () => {
    const [previewImages, setPreviewImages] = useState([]);

    const handleImageChange = (e, index) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setPreviewImages((prevImages) => {
                    const updatedImages = [...prevImages];
                    updatedImages[index] = reader.result;
                    return updatedImages;
                });
            };
            reader.readAsDataURL(file);
        } else {
            setPreviewImages((prevImages) => {
                const updatedImages = [...prevImages];
                updatedImages[index] = null;
                return updatedImages;
            });
        }
    };

    return (
        <>
            <section className="w-full bg-gradient-to-br from-[#FFF7FC] to-[#E6E6FA] flex justify-center items-center min-h-screen py-24 mx-auto">
                <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg px-8 py-12">
                    <h1 className="text-3xl text-center font-semibold mb-4 text-gray-800">Verify Documents</h1>
                    <h2 className="text-2xl text-center mb-8 text-gray-700">Welcome to Rishta</h2>

                    <div className="flex flex-wrap gap-y-9 justify-center mb-8">
                        <div className="">
                            <h2 className="text-2xl font-semibold mb-4 text-gray-700">Your Images to display in profile</h2>
                            <div className="flex flex-col md:flex-row border-b-4 border-black">
                                {[...Array(3)].map((_, index) => (
                                    <div key={index} className="mb-4 md:mr-4">
                                        <img
                                            src={previewImages[index] || "https://via.placeholder.com/150"}
                                            alt={`Your Image ${index + 1}`}
                                            className="w-32 h-32 object-cover rounded-lg border-2 border-gray-300"
                                        />
                                        <input
                                            type="file"
                                            name={`yourImg${index + 1}`}
                                            id={`yourImg${index + 1}`}
                                            className="mt-2 w-full"
                                            onChange={(e) => handleImageChange(e, index)}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="">
                            <h2 className="text-2xl font-semibold mb-4 text-gray-700">Your Document Images</h2>
                            <div className="flex flex-col md:flex-row">
                                {[...Array(3)].map((_, index) => (
                                    <div key={index} className="mb-4 md:mr-4">
                                        <img
                                            src={previewImages[index + 3] || "https://via.placeholder.com/150"}
                                            alt={`Your Document Image ${index + 1}`}
                                            className="w-32 h-32 object-cover rounded-lg border-2 border-gray-300"
                                        />
                                        <input
                                            type="file"
                                            name={`docImg${index + 1}`}
                                            id={`docImg${index + 1}`}
                                            className="mt-2 w-full"
                                            onChange={(e) => handleImageChange(e, index + 3)}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="py-4 w-full md:w-1/2 lg:w-1/3 bg-indigo-600 text-white hover:bg-indigo-700 px-3 border-2 border-indigo-600 ease-in-out duration-300 outline-none rounded-lg mt-4 mx-auto block"
                    >
                        Register
                    </button>
                </div>
            </section>
        </>
    );
};

export default VerifyDocs;