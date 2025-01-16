import React from "react";
import { Link } from "react-router-dom";
import TopSection from "../components/TopSection";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {

    return(
        <div>

            <TopSection/>

            <Navbar/>

            {/* About Us Section */}
    
            <main className="bg-gradient-to-b from-white to-[#f5f5f4]">
                {/* About Us */}
                <section className="md:py-14 md:mb-6 bg-transparent items-center font-poppins">
                    <div className="justify-center flex-1 max-w-7xl py-4 mx-auto lg:py-6 md:px-6">
                        <div className="flex flex-wrap">
                            <div className="w-full px-4 md:pr-12 mb-10 lg:w-1/2 lg:mb-0">
                                <div className="relative">
                                    <img src="/Pramukh-Pharmaceutical/img/About Us Image.jpg" alt=""
                                        className="relative z-40 object-cover w-full h-96 lg:rounded-tr-[80px] lg:rounded-bl-[80px] rounded"/>
                                    <div
                                        className="absolute z-10 hidden w-full h-full bg-mainBlue rounded-bl-[80px] rounded-tr-[80px] rounded -bottom-6 right-6 lg:block">
                                    </div>
                                </div>
                            </div>
                            <div className="w-full px-4 md:pl-12 mb-7 lg:w-1/2 lg:mb-0 ">
                                <div className="relative">
                                    <h1
                                        className="absolute -top-20 left-0 text-[20px] lg:text-[100px] text-gray-900 font-bold opacity-5 md:block hidden">
                                        About Us
                                    </h1>
                                    <h1 className="pl-6 md:pl-2 text-3xl font-bold border-l-8 border-mainBlue md:text-5xl">
                                        Welcome to Pramukh Pharmaceuticals™
                                    </h1>
                                </div>
                                <p className="mt-6 text-base leading-7 text-gray-500">
                                    The place where innovation meets compassion in the pursuit of a healthier world. As pioneers in the pharmaceutical industry, we stand committed to redefining healthcare through excellence and care.
                                </p>
                                <p className="mt-6 mb-10 text-base leading-7 text-gray-500">
                                    At Pramukh Pharma, we blend cutting-edge solutions with a heart for humanity. <strong>Our mission is clear:</strong> to enhance lives through top-tier pharmaceuticals that prioritize safety, efficacy, and your well-being. Our diverse portfolio caters to a range of healthcare needs, ensuring that every product reflects our unwavering dedication to quality.
                                </p>
                                <a href="#"
                                    className="font-medium px-4 py-3 transition-all transform border-2 border-mainGreen text-mainGreen rounded-[80px] hover:bg-lighterGreen hover:border-lighterGreen hover:text-gray-50">
                                    Learn more
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Who we are? */}

                <section className="flex items-center font-poppins md:pb-6">
                    <div className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
                        <div className="flex flex-wrap-reverse items-center">
                            <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 relative">
                                <div>
                                    <div className="relative">
                                        <div className="absolute -top-16 left-0 text-[20px] lg:text-[74px] text-gray-900 font-bold opacity-5 md:block hidden">
                                            Who we are?
                                        </div>
                                        <h1 className="pl-6 md:pl-2 text-3xl font-bold border-l-8 border-mainBlue md:text-5xl">
                                            Elevating Health at Pramukh
                                        </h1>
                                    </div>
                                    <p className="mt-6 text-base leading-7 text-gray-500">
                                        Pramukh Pharmaceuticals is more than a pharmaceutical entity — we are a dynamic force dedicated to transforming healthcare. Rooted in a legacy of excellence, we have emerged as a beacon of innovation and integrity in the pharmaceutical landscape.
                                    </p>
                                    <p className="mt-6 mb-10 text-base leading-7 text-gray-500">
                                        As we forge ahead in redefining healthcare, we invite you to join us on this transformative journey. Whether you are a healthcare professional, a partner, or someone passionate about making a difference. Together, we are shaping the next chapter of healthcare innovation.
                                    </p>
                                    <div className="text-center space-x-20">
                                        <Link to="/services" className="font-medium px-4 py-3 transition-all transform border-2 border-mainGreen text-mainGreen rounded-[80px] hover:bg-lighterGreen hover:border-lighterGreen hover:text-gray-50">
                                            Services
                                        </Link>
                                        <Link to="/branches" className="font-medium px-4 py-3 transition-all transform border-2 border-mainGreen text-mainGreen rounded-[80px] hover:bg-lighterGreen hover:border-lighterGreen hover:text-gray-50">
                                            Branches
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full px-4 md:px-0 mb-10 lg:w-1/2 lg:mb-0 md:pl-20">
                                <div className="flex mb-4">
                                    <span
                                        className="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-6 bg-darkerBlue rounded text-gray-50">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="16" width="16" viewBox="0 0 512 512"><path d="M448 256A192 192 0 1 0 64 256a192 192 0 1 0 384 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 80a80 80 0 1 0 0-160 80 80 0 1 0 0 160zm0-224a144 144 0 1 1 0 288 144 144 0 1 1 0-288zM224 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>
                                    </span>
                                    <div>
                                        <h2 className="mb-4 text-xl font-bold leading-tight md:text-2xl">
                                            Our Mission
                                        </h2>
                                        <p className="text-base leading-relaxed text-gray-500">
                                            At the core of our identity is a singular mission — to improve lives and foster well-being through the relentless pursuit of scientific advancement. We are driven by a commitment to develop and deliver pharmaceutical solutions that make a meaningful difference in the health of individuals and communities around the globe.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex mb-4">
                                    <span
                                        className="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-6 bg-darkerBlue rounded text-gray-50">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" fill="currentColor" viewBox="0 0 512 512"><path d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0zm0 66.8V444.8C394 378 431.1 230.1 432 141.4L256 66.8l0 0z"/></svg>
                                    </span>
                                    <div>
                                        <h2 className="mb-4 text-xl font-bold leading-tight md:text-2xl">
                                            Our Values
                                        </h2>
                                        <p className="text-base leading-relaxed text-gray-500">
                                            Our values form the bedrock of our organization, guiding every decision and action we take. Integrity, Excellence, Innovation, and Compassion are not just words but the pillars upon which [Your Company Name] stands. We believe in upholding the highest ethical standards, pushing the boundaries of what is possible, and infusing every endeavor with a genuine concern for the well-being of humanity.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            
                {/* Testimonials Section */}

                <section className="flex items-center">
                    <div className="p-4 mx-auto max-w-7xl mt-4 mb-4">
                        <div className="text-center mb-14 relative">
                            <div className="absolute hidden md:block -top-3 left-72 text-8.2xl text-gray-400 font-bold opacity-10">
                                Testimonial
                            </div>
                            <h1 className="mb-10 text-6xl font-bold">Client Testimonial</h1>
                            <p className="max-w-xl mx-auto text-gray-500">
                                Discover the experiences of our valued customers through their testimonials. See what people have to say about our services and products, and why they choose us for their pharmaceutical needs.
                            </p>
                        </div>
                        <div className="flex ">
                            <div className="grid grid-cols-1 gap-4 lg:gap-8 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                <div>
                                    <div className="flex items-center justify-center mb-5 gap-x-4">
                                        <div className="relative w-24 h-24 rounded-full">
                                            <span
                                                className="absolute bottom-0 right-0 inline-block p-1 text-xs text-white bg-blue-500 rounded-full ">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                                                    className="bi bi-quote" viewBox="0 0 16 16">
                                                    <path
                                                        d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                                                </svg>
                                            </span>
                                            <img className="object-cover w-full h-full rounded-full"
                                                src="/Pramukh-Pharmaceutical/img/Testimonials/Review-2.png" alt=""/>
                                        </div>
                                        <div className="info">
                                            <h2 className="text-lg font-bold text-black">
                                                Stephen Attiku
                                            </h2>
                                            <span className="block text-xs font-semibold text-blue-500 uppercase">
                                                Customer
                                            </span>
                                            <span className="flex mt-2 text-orange-500 gap-x-0.5">
                                                <i class="fa-solid fa-star text-yellow-500"></i>
                                                <i class="fa-solid fa-star text-yellow-500"></i>
                                                <i class="fa-solid fa-star text-yellow-500"></i>
                                                <i class="fa-solid fa-star text-yellow-500"></i>
                                                <i class="fa-solid fa-star text-gray-300"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="relative mb-8 bg-white rounded-xl shadow">
                                        <div className="absolute inline-block overflow-hidden -translate-x-1/2 w-7 -top-4 left-1/2">
                                            <div
                                                className="w-4 h-4 origin-bottom-left transform rotate-45 bg-white drop-shadow">
                                            </div>
                                        </div>
                                        <div className="relative z-20 p-8">
                                            <p className="text-base leading-7 text-gray-700">
                                                Found an awesome spot for my pharmaceutical needs! The folks here know their stuff and are super friendly. What got me impressed was how neat and organized the store is. Made shopping a breeze, found everything I needed without a hitch. Big shoutout to the team for keeping the place so tidy and customer-friendly!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex items-center justify-center mb-5 gap-x-4">
                                        <div className="relative w-24 h-24 rounded-full">
                                            <span
                                                className="absolute bottom-0 right-0 inline-block p-1 text-xs text-white bg-blue-500 rounded-full ">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                                                    className="bi bi-quote" viewBox="0 0 16 16">
                                                    <path
                                                        d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                                                </svg>
                                            </span>
                                            <img className="object-cover w-full h-full rounded-full" src="/Pramukh-Pharmaceutical/img/Testimonials/Review-1.png" alt=""/>
                                        </div>
                                        <div className="info">
                                            <h2 className="text-lg font-bold text-black">
                                                Marvin Nyanzi Ssentamu
                                            </h2>
                                            <span className="block text-xs font-semibold text-blue-500 uppercase">
                                                Client
                                            </span>
                                            <span className="flex mt-2 text-orange-500 gap-x-0.5">
                                                <i class="fa-solid fa-star text-yellow-500"></i>
                                                <i class="fa-solid fa-star text-yellow-500"></i>
                                                <i class="fa-solid fa-star text-yellow-500"></i>
                                                <i class="fa-solid fa-star text-yellow-500"></i>
                                                <i class="fa-solid fa-star text-yellow-500"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="relative mb-8 bg-white rounded-xl shadow">
                                        <div className="absolute inline-block overflow-hidden -translate-x-1/2 w-7 -top-4 left-1/2">
                                            <div
                                                className="w-4 h-4 origin-bottom-left transform rotate-45 bg-white drop-shadow">
                                            </div>
                                        </div>
                                        <div className="relative z-20 p-8">
                                            <p className="text-base leading-7 text-gray-700">
                                                It's a great place with a dedicated staff team who receive and assist customers in all their needs. It offers wholesale and retail services for all your pharmaceutical needs. They can send goods even to customers upcountry just by making payment and approving your order for the different selected items and it's delivered in the shortest time possible. I thank the management because I liked my experience here and I call upon everyone to try it out.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex items-center justify-center mb-5 gap-x-4">
                                        <div className="relative w-24 h-24 rounded-full">
                                            <span
                                                className="absolute bottom-0 right-0 inline-block p-1 text-xs text-white bg-blue-500 rounded-full ">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                                                    className="bi bi-quote" viewBox="0 0 16 16">
                                                    <path
                                                        d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                                                </svg>
                                            </span>
                                            <img className="object-cover w-full h-full rounded-full"
                                                src="https://i.postimg.cc/wj9DLCJj/yunming-wang-G9f4-Enb8-XVM-unsplash.jpg" alt=""/>
                                        </div>
                                        <div className="info">
                                            <h2 className="text-lg font-bold text-black">
                                                John Doe
                                            </h2>
                                            <span className="block text-xs font-semibold text-blue-500 uppercase">
                                                Customer
                                            </span>
                                            <span className="flex mt-2 text-orange-500 gap-x-0.5">
                                                <i class="fa-solid fa-star text-yellow-500"></i>
                                                <i class="fa-solid fa-star text-yellow-500"></i>
                                                <i class="fa-solid fa-star text-yellow-500"></i>
                                                <i class="fa-solid fa-star text-yellow-500"></i>
                                                <i class="fa-solid fa-star text-gray-300"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="relative mb-8 bg-white rounded-xl shadow">
                                        <div className="absolute inline-block overflow-hidden -translate-x-1/2 w-7 -top-4 left-1/2">
                                            <div
                                                className="w-4 h-4 origin-bottom-left transform rotate-45 bg-white drop-shadow">
                                            </div>
                                        </div>
                                        <div className="relative z-20 p-8">
                                            <p className="text-base leading-7 text-gray-700">
                                                Discovered a gem! The team here is committed, making the experience top-notch. From wholesale to retail, they cater to all pharmaceutical needs. Fast, hassle-free delivery to remote locations by just paying and confirming. Thumbs up to the management – highly recommend trying it out!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Us Section */}

                <section className="font-poppins">
                    <div className="justify-center flex-1 max-w-5xl p-4 pb-16 mx-auto lg:py-10 md:px-7">
                        <div className="max-w-xl mx-auto">
                            <div className="text-center ">
                                <div className="relative flex flex-col items-center">
                                    <div
                                        className="absolute hidden md:block -top-14 left-0 text-[120px] text-gray-400 font-bold opacity-10">
                                        Contact
                                    </div>
                                    <h1 className="text-6xl font-bold text-gray-900"> Our <span className="text-mainBlue"> Contact
                                        </span> </h1>
                                    <div className="flex w-24 mt-1 mb-10 overflow-hidden rounded">
                                        <div className="flex-1 h-2 bg-blue-200">
                                        </div>
                                        <div className="flex-1 h-2 bg-mainBlue">
                                        </div>
                                        <div className="flex-1 h-2 bg-darkerBlue">
                                        </div>
                                    </div>
                                </div>
                                <p className="mb-16 text-base text-center text-gray-500">
                                    Got a technical issue? Want to send feedback about a service? Need details about our services? Let us know.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-wrap mb-6 md:mb-12 -mx-4">
                            <div className="w-full px-4 mb-10 lg:w-1/3 lg:mb-0">
                                <div className="h-full py-12 text-center rounded-lg shadow bg-white hover:shadow-lg hover:scale-105 transition-transform duration-500">
                                    <i className="fa-solid fa-envelope fa-xl text-mainBlue bg-gray-500 bg-opacity-30 p-5 py-7 rounded-lg m-3.5 mt-0"></i>
                                    <h2 className="mb-4 text-xl font-bold leading-9 text-gray-700 md:text-2xl">
                                        Email Us:</h2>
                                    <p className="text-base font-medium text-gray-500 md:text-base p-2">
                                        Email us for general queries, marketing and partnership opportunities.
                                    </p>
                                </div>
                            </div>
                            <div className="w-full px-4 mb-10 lg:w-1/3 lg:mb-0">
                                <div className="h-full py-12 text-center rounded-lg shadow bg-white hover:shadow-lg hover:scale-105 transition-transform duration-500">
                                    <i className="fa-solid fa-phone fa-xl text-mainBlue bg-gray-500 bg-opacity-30 p-5 py-7 rounded-lg m-3.5 mt-0"></i>
                                    <h2 className="mb-4 text-xl font-bold leading-9 text-gray-700 md:text-2xl">
                                        Call Us:</h2>
                                    <p className="text-base font-medium text-gray-500 md:text-base p-2">
                                        Call us to speak to a member of our team. We are always happy to help.
                                    </p>
                                </div>
                            </div>
                            <div className="w-full px-4 mb-10 lg:w-1/3 lg:mb-0">
                                <div className="h-full py-12 text-center rounded-lg shadow bg-white hover:shadow-lg hover:scale-105 transition-transform duration-500">
                                    <i className="fa-solid fa-location-dot fa-xl text-mainBlue bg-gray-500 bg-opacity-30 p-5 py-7 rounded-lg m-3.5 mt-0"></i>
                                    <h2 className="mb-4 text-xl font-bold leading-9 text-gray-700 md:text-2xl">
                                        Address: (Main Branch)
                                    </h2>
                                    <p className="text-base font-medium text-gray-500 md:text-base p-2">
                                        Mackay Rd, Kampala, Uganda
                                        Zip Code/Postal Code: 10102  
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 md:p-12 bg-white border rounded-3xl shadow-md">
                            <form action="#" className="grid md:grid-cols-2 grid-rows-2 gap-5 bg-gray-100 p-8 rounded-3xl">
                                <div>
                                    <label for="subject" className="block mb-2 text-sm font-medium text-gray-900">First Name</label>
                                    <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500" placeholder="George" required/>
                                </div>
                                <div>
                                    <label for="subject" className="block mb-2 text-sm font-medium text-gray-900">Last Name</label>
                                    <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500" placeholder="Russell" required/>
                                </div>
                                <div>
                                    <label for="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                                    <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" placeholder="name@gmail.com" required/>
                                </div>
                                <div>
                                    <label for="phone-input" className="block mb-2 text-sm font-medium text-gray-900">Phone number:</label>
                                    <input type="text" id="phone-input" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" pattern="[0-9]{4} [0-9]{3}-[0-9]{3}" placeholder="1234 567-890" required/>
                                </div>
                                <div className="sm:col-span-2">
                                    <label for="message" className="block mb-2 text-sm font-medium text-gray-900">Your message</label>
                                    <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                                    <p className="text-sm mt-3 mb-3 md:mb-0">By submitting this form you agree to our <a href="#" className="text-blue-600 hover:underline">terms and conditions</a> and our <a href="#" className="text-blue-600 hover:underline">privacy policy</a> which explains how we may collect, use and disclose your personal information including to third parties.</p>
                                </div>
                                <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-700 sm:w-fit hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-primary-300">Send message</button>
                            </form>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer Section */}

            <Footer/>
        </div>
    );
}

export default About;