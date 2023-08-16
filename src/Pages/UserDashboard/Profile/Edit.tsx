
const Edit: React.FC = () => {
    return (
        <div>
            <section className="bg-[#8c8fb0]">
                <div className="mx-auto max-w-screen-xl px-4 py-28 sm:px-6 lg:px-8">
                <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                    <form action="" className="space-y-4">
                    <div>
                        <p className="mb-2">Your Email Address:</p>
                        <label className="sr-only" htmlFor="email">Email</label>
                        <input
                            className="w-full rounded-lg border border-gray-300 p-3 text-sm"
                            placeholder="Email address"
                            type="email"
                            id="email"
                        />
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                            <p className="mb-2">Your Name:</p>
                            <label className="sr-only" htmlFor="name">Name</label>
                            <input
                            className="w-full rounded-lg border border-gray-300 p-3 text-sm"
                            placeholder="Name"
                            type="text"
                            id="name"
                            />
                        </div>

                        <div>
                            <p className="mb-2">Your User Name:</p>
                            <label className="sr-only" htmlFor="name">Username</label>
                            <input
                            className="w-full rounded-lg border border-gray-300 p-3 text-sm"
                            placeholder="Username"
                            type="text"
                            id="name"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                        <p className="mb-2">Phone Number:</p>
                            <label className="sr-only" htmlFor="phone">Phone</label>
                            <input
                                className="w-full rounded-lg border border-gray-300 p-3 text-sm"
                                placeholder="Phone"
                                type="tel"
                                id="phone"
                            />
                        </div>

                        <div>
                            <p className="mb-2">Location:</p>
                            <label className="sr-only" htmlFor="email">Location</label>
                            <input
                                className="w-full rounded-lg border border-gray-300 p-3 text-sm"
                                placeholder="Your Location"
                                type="text"
                                id="location"
                            />
                        </div>
                    </div>

                    <div>
                        <p className="mb-2">Change Profile Picture:</p>
                        <label className="sr-only block cursor-pointer" htmlFor="file_input">Profile Picture</label>
                        <input className="block w-full text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-white dark:border-gray-300 dark:placeholder-gray-400 " id="file_input" type="file" />
                    </div>



                    <div className="mt-4">
                        <button
                        type="submit"
                        className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                        >
                        Send Enquiry
                        </button>
                    </div>
                    </form>
                </div>
                </div>
            </section>
        </div>
    );
};

export default Edit;
