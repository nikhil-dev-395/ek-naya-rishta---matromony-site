const Profile = () => {
    const personalInfo = [
        { label: 'First Name', value: 'Nikhil' },
        { label: 'Last Name', value: 'Wankhade' },
        { label: 'Email', value: 'nikhil@example.com' },
        { label: 'Phone', value: '+91 1234567890' },
        { label: 'Job', value: 'Data Analyst' },
        { label: 'Job Type', value: 'Private' },
        { label: 'Qualification', value: 'B.C.A., Degree College of Physical Education, H.V.P.M.' },
        { label: 'Salary', value: '$ 30,000' },
    ];

    const otherInfo = [
        { label: 'City', value: 'Amravati' },
        { label: 'State', value: 'Maharashtra' },
        { label: 'Property', value: '$ 1,00,000' },
        { label: 'Hometown', value: 'Pune' },
        { label: 'Address', value: 'Chaitanya Colony, Amravati, 444606' },
    ];

    const hobbies = ['Reading', 'Traveling', 'Music', 'Photography'];

    return (
        <>
            <section className="w-full py-24 bg-[#FFF7FC] animate-fade fadeIn">
                <div className=" px-4">
                    <h1 className="text-3xl text-center capitalize text-red-800 font-semibold mb-8">
                        RISTHA - naye bandhono ka
                    </h1>

                    <h1 className="text-3xl text-center capitalize text-slate-500 font-semibold mb-8">
                        my profile
                    </h1>
                    <div className="max-w-4xl  mx-auto p-6 rounded-lg shadow-md" id="profile">
                        <div className="bg-red-100 flex flex-col md:flex-row items-center gap-6 p-6 rounded-lg shadow-md" id="top">
                            <img
                                src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.1125138304.1716659476"
                                className="w-32 h-32 rounded-full object-cover"
                                alt="Profile"
                            />
                            <div className="text-center md:text-left">
                                <h2 className="text-xl font-semibold">Nikhil Wankhade</h2>
                                <p>Web Developer</p>
                                <p className="text-slate-600">
                                    Chaitanya Colony, Amravati, 444606
                                </p>
                            </div>
                            <button type="button" className="py-2 px-6 bg-slate-500 text-white rounded-lg text-lg">
                                Edit
                            </button>
                        </div>
                        {/* Bottom Section */}
                        <div className="mt-6 w-full flex flex-col md:flex-row gap-4">
                            {/* Personal Information */}
                            <div id="leftProfile" className="bg-slate-200 py-5 px-4 rounded-lg shadow-md w-full md:w-1/2">
                                <h3 className="text-center text-2xl mb-4">Personal Information</h3>
                                <div className="flex justify-center">
                                    <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 text-center">
                                        {personalInfo.map((info, index) => (
                                            <li key={index} className="flex flex-col items-start">
                                                <p className="text-slate-600">{info.label}</p>
                                                <p className="break-words overflow-hidden">{info.value}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            {/* Other Information */}
                            <div id="rightProfile" className="bg-slate-200 py-5 px-4 rounded-lg shadow-md w-full md:w-1/2">
                                <h3 className="text-center text-2xl mb-4">Other Information</h3>
                                <div className="flex justify-center">
                                    <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 text-center">
                                        {otherInfo.map((info, index) => (
                                            <li key={index} className="flex flex-col items-start">
                                                <p className="text-slate-600">{info.label}</p>
                                                <p className="break-words overflow-hidden">{info.value}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* Hobbies Section */}
                        <div className="mt-6 w-full flex flex-col items-center gap-4">
                            <div id="hobbiesProfile" className="bg-violet-200 py-5 px-4 rounded-lg shadow-md w-full">
                                <h3 className="text-center text-2xl mb-4">Hobbies</h3>
                                <div className="flex justify-center">
                                    <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 text-center">
                                        {hobbies.map((hobby, index) => (
                                            <li key={index} className="flex flex-col items-start">
                                                <p className="text-slate-600">{hobby}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Profile;
