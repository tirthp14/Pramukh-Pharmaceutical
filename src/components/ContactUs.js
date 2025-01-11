const ContactUs = () => {
    return (
        <div>
            <section className="bg-gradient-to-bl from-cyan-600 to-darkerBlue font-contactUs rounded-3xl md:my-16 md:mx-16 mx-4">
                <div className="p-4 lg:py-12 md:pt-6 md:pb-14 md:px-16 md:pr-24">
                    {/* Heading & Subheading */}
                    <div className="mx-auto md:w-1/2">
                        <h1 className="text-[60px] tracking-tight font-extrabold text-white text-center">Contact Us</h1>
                        <p className="pb-8 lg:pb-12 font-light text-center sm:text-lg text-zinc-200">Got a technical issue? Want to send feedback about a service? Need details about our services? Let us know.</p>
                    </div>
                    {/* Form Section */}
                    <div className="grid auto-rows-min gap-12 md:grid-rows-none md:grid-cols-3 md:gap-24">
                        <div className="md:col-span-2">
                            <form action="#" className="grid md:grid-cols-2 grid-rows-2 gap-5 bg-gray-100 p-8 rounded-3xl">
                                <div>
                                    <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900">First Name</label>
                                    <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500" placeholder="George" required/>
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900">Last Name</label>
                                    <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500" placeholder="Russell" required/>
                                </div>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                                    <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" placeholder="name@gmail.com" required/>
                                </div>
                                <div>
                                    <label htmlFor="phone-input" className="block mb-2 text-sm font-medium text-gray-900">Phone number:</label>
                                    <input type="text" id="phone-input" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" pattern="[0-9]{4} [0-9]{3}-[0-9]{3}" placeholder="1234 567-890" required/>
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">Your message</label>
                                    <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                                    <p className="text-sm mt-3 mb-3 md:mb-0">By submitting this form you agree to our <a href="#" className="text-blue-600 hover:underline">terms and conditions</a> and our <a href="#" className="text-blue-600 hover:underline">privacy policy</a> which explains how we may collect, use and disclose your personal information including to third parties.</p>
                                </div>
                                <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-700 sm:w-fit hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-primary-300">Send message</button>
                            </form>
                        </div>
                        <div className="grid grid-rows-3 gap-8 text-center mb-8 md:mb-0">
                            <div>
                                <i className="fa-solid fa-envelope fa-xl text-blue-950 bg-gray-500 bg-opacity-50 p-5 py-7 rounded-lg m-3.5 mt-0"></i>
                                <p className="text-white text-2xl md:text-lg font-extrabold">Email Us:</p>
                                <p className="text-zinc-200 pt-2.5 px-3 md:px-0 md:pt-0">Email us for general queries, including marketing and partnership opportunities.</p>
                            </div>
                            <div>
                                <i className="fa-solid fa-phone fa-xl text-blue-950 bg-gray-500 bg-opacity-50 p-5 py-7 rounded-lg m-3.5 mt-0"></i>
                                <p className="text-white text-2xl md:text-lg font-extrabold">Call Us:</p>
                                <p className="text-gray-200 pt-2.5 md:pt-0 px-3 md:px-0">Call us to speak to a member of our team. We are always happy to help.</p>
                            </div>
                            <div>
                                <i className="fa-solid fa-location-dot fa-xl text-blue-950 bg-gray-500 bg-opacity-50 p-5 py-7 rounded-lg m-3.5 mt-0"></i>
                                <p className="text-white text-2xl md:text-lg font-extrabold">Address: (Main Branch)</p>
                                <div>
                                    <p className="text-gray-200 pt-2.5 md:pt-0">Mackay Rd, Kampala, Uganda</p>
                                    <p className="text-gray-200">Zip Code/Postal Code: 10102</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
};

export default ContactUs;