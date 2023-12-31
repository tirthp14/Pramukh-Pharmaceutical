import React from "react";
import { Link } from "react-router-dom";

function Home() {

document.addEventListener('DOMContentLoaded', function () {
    const btn = document.getElementById('menu-btn');
    const nav = document.getElementById('menu');
    
    btn.addEventListener('click', () => {
        btn.classList.toggle('open');
        nav.classList.toggle('flex');
        nav.classList.toggle('hidden');
    });
    });  

    var a = 0;
    window.addEventListener("scroll", function () {
        var counterSection = document.getElementById("counter");
        var oTop = counterSection.offsetTop - window.innerHeight;

        if (a == 0 && window.scrollY > oTop) {
        var counterValues = document.querySelectorAll(".counter-value");

        counterValues.forEach(function (element) {
            var countTo = parseInt(element.getAttribute("data-count"));
            var currentCount = 0;

            var increment = countTo > 0 ? Math.ceil(countTo / 50) : 1;

            var interval = setInterval(function () {
            currentCount += increment;
            element.textContent = currentCount + "+";

            if (currentCount >= countTo) {
                element.textContent = countTo + "+";
                clearInterval(interval);
            }
            }, 40);
        });

        a = 1;
        }
    });

    return (
        <div className="App">
            {/* Top Info Section */}

            <div className="bg-mainBlue lg:flex items-center justify-between p-6 px-8 text-white hidden">
                {/* Phone Number, Location & Operational Hours  */}
                <div className="flex space-x-8 items-center">
                    <div className="flex items-center space-x-3">
                        <i className="fa-solid fa-phone fa-beat"></i>
                        <a href="tel:0756545315">Phone: <strong>0756 545-315</strong></a>
                    </div>
                    <div className="flex items-center space-x-3">
                        <i className="fa-solid fa-location-dot fa-beat"></i>
                        <h1>Location: <strong>Mackay Road, Old Kampala</strong></h1>
                    </div>
                    <div className="flex items-center space-x-3">
                        <i className="fa-solid fa-business-time fa-beat"></i>
                        <h1>Mon - Sun: <strong>8.00 AM - 6.00 PM</strong></h1>
                    </div>
                </div>

                {/* Icons */}
                <div className="space-x-6">
                    <i className="fa-brands fa-whatsapp fa-xl hover:-translate-y-1"></i>
                    <i className="fa-brands fa-instagram fa-xl hover:-translate-y-1"></i>
                    <i className="fa-brands fa-facebook fa-xl hover:-translate-y-1"></i>
                </div>
            </div>

            {/* NavBar Section */}

            <nav className="relative p-4 pb-2 md:pb-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div>
                        <img src={require('./img/Pramukh Pharmcueticals Logo.png')} alt="Logo" className="w-60"/>
                    </div>
                    {/* Menu Items */}
                    <div className="hidden space-x-12 md:flex text-lg font-semibold">
                        <Link to="/" className="hover:text-mainBlue">Home</Link>
                        <Link to="/about" className="hover:text-mainBlue">About Us</Link>
                        <Link to="/services" className="hover:text-mainBlue">Services</Link>
                        <Link to="/branches" className="hover:text-mainBlue">Branches</Link>
                    </div>
                    {/* Phone Number */}
                    <div className="hidden lg:flex items-center space-x-5 text-darkerBlue">
                        <i className="fa-solid fa-phone fa-lg"></i>
                        <a href="tel:0756545315" className="text-2xl font-sans">0756 545-315</a>
                    </div>
                    {/* Button */}
                    <a href="tel:0756545315" className="hidden p-3 px-6 pt-2 text-white bg-mainGreen rounded-full baseline hover:bg-lighterGreen md:block">Contact Us</a>
                    {/* Mobile Menu */}
                    <div className="md:hidden">
                        <div id="menu" className="absolute flex-col items-center hidden self-end mt-10 space-y-6 font-bold sm:w-auto sm:self-center left-6 right-6 drop-shadow-md">
                            <ul className="w-full font-medium flex flex-col p-4 border border-gray-200 rounded-lg bg-gray-100 rtl:space-x-reverse">
                                <li>
                                <a href="index.html" className="block py-2 px-3 text-white bg-blue-700 rounded" aria-current="page">Home</a>
                                </li>
                                <li>
                                <a href="About Us.html" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100">About Us</a>
                                </li>
                                <li>
                                <a href="Services.html" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100">Services</a>
                                </li>
                                <li>
                                <a href="Branches.html" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100">Branches</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* Hamburger Menu */}
                    <button id="menu-btn" className="block hamburger md:hidden focus:outline-none mr-4">
                        <span className="hamburger-top"></span>
                        <span className="hamburger-middle"></span>
                        <span className="hamburger-bottom"></span>
                    </button>
                </div>
            </nav>

            {/* Hero Section */}

            <section>
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-12 p-6 pb-11 md:pb-14 pt-0 md:p-10 md:pt-2 md:px-12 mx-auto md:h-128">
                    {/* Text Section (Left Item) */}
                    <div className="flex-col space-y-8 md:space-y-12 my-auto">
                        <p className="text-darkerBlue md:text-left font-bold text-5.5xl text-center lg:text-left lg:text-7.5xl">Bring everyone together to build better products</p>
                        <p className="text-mainBlue md:text-left font-bold text-center text-2xl md:text-3xl">Your Partner in Health and Wellness</p>
                        <p className="text-mainBlue md:text-left font-medium text-center text-base md:leading-7">At Pramukh Pharma Ltd, we are dedicated to pioneering breakthrough medicines for a healthier tomorrow. With a commitment to innovation and quality, we strive to make a positive impact on global health.</p>
                        <div className="text-center space-x-20">
                            <a href="tel:0756545315" className="p-3 px-6 pt-2 text-white bg-mainGreen rounded-full baseline hover:bg-lighterGreen">Contact Us</a>
                            <Link to="/branches" className="p-3 px-6 pt-2 text-white bg-mainGreen rounded-full baseline hover:bg-lighterGreen">Our Branches</Link>
                        </div>
                    </div>
                    {/* Image Section (Right Item) */}
                    <div id="default-carousel" className="relative w-full h-full" data-carousel="slide">
                        {/* Carousel wrapper */}
                        <div className="relative h-88 md:h-full overflow-hidden rounded-lg">
                            {/* Item 1 */}
                            <div className="hidden duration-700 ease-in-out" data-carousel-item>
                                <img src={require("./img/Slideshow/Image-1.jpg")} className="rounded-lg h-full object-fill absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                            </div>
                            {/* Item 2 */}
                            <div className="hidden duration-700 ease-in-out" data-carousel-item>
                                <img src={require("./img/Slideshow/Image-2.jpg")} className="rounded-lg h-full object-fill absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                            </div>
                            {/* Item 3 */}
                            <div className="hidden duration-700 ease-in-out" data-carousel-item>
                                <img src={require("./img/Slideshow/Image-3.jpg")} className="rounded-lg h-full object-fill absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                            </div>
                            {/* Item 4 */}
                            <div className="hidden duration-700 ease-in-out" data-carousel-item>
                                <img src={require("./img/Slideshow/Image-4.jpg")} className="rounded-lg h-full object-fill absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                            </div>
                        </div>
                        {/* Slider indicators */}
                        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                            <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
                        </div>
                        {/* Slider controls */}
                        <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/30 dark:bg-gray-800/50 group-hover:bg-black/80 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
                                </svg>
                                <span className="sr-only">Previous</span>
                            </span>
                        </button>
                        <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/30 dark:bg-gray-800/50 group-hover:bg-black/80 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                                </svg>
                                <span className="sr-only">Next</span>
                            </span>
                        </button>
                    </div>
                </div>
            </section>

            {/* Achievements Section */}

            <section className="bg-hero-pattern bg-cover">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-12 p-0 md:p-10 md:pt-0 md:px-12 mx-auto md:h-128">
                    {/* Text Section (Left Item) */}
                    <div className="flex-col space-y-8 md:space-y-16 my-auto pt-6 md:pt-10">
                        <p className="text-mainBlue font-bold text-5.5xl text-center lg:text-6xl">Uganda's <strong className="text-lighterGreen">Leading</strong> Pharmacy Chain</p>
                        <p className="text-darkerBlue font-bold text-center text-2xl md:text-2xl border-l-4 border-l-darkerBlue px-8">As Uganda's leading pharmacy chain, we pride ourselves on delivering excellence in healthcare. Our mission is simple: Your health, our commitment.</p>
                        <div className="text-center space-x-20">
                            <Link to="/about" className="font-sans p-3 px-6 pt-2 text-white bg-mainGreen rounded-full baseline hover:bg-lighterGreen">About Us</Link>
                            <Link to="/branches" className="p-3 px-6 pt-2 text-white bg-mainGreen rounded-full baseline hover:bg-lighterGreen">Our Branches</Link>
                        </div>
                    </div>
                    {/* Counter Section & Image Section (Right Item) */}
                    <div>
                        <div id="counter" className="grid grid-cols-3 gap-2 md:gap-9 pt-4 md:pt-12">
                            <div className="text-center">
                                <h1 className="text-branchesColor text-xl md:text-2xl font-semibold font-body md:mb-2">Branches</h1>
                                <div className="counter-value text-branchesColor text-4xl md:text-7.2xl font-contactUs" data-count="5">0</div>
                            </div>
                            <div className="text-center">
                                <h1 className="text-clientsServedColor text-xl md:text-2xl font-semibold font-body md:mb-2">Customers</h1>
                                <div className="counter-value text-clientsServedColor text-4xl md:text-7.2xl font-contactUs" data-count="2000">600</div>
                            </div>
                            <div className="text-center">
                                <h1 className="text-pharmacistsColor text-xl md:text-2xl font-semibold font-body md:mb-2">Employees</h1>
                                <div className="counter-value text-pharmacistsColor text-4xl md:text-7.2xl font-contactUs" data-count="45">0</div>
                            </div>
                        </div>
                        <div className="pt-6 md:pt-10 text-center">
                            <h1 className="text-heartsMadeHappyColor text-2xl font-semibold font-body md:mb-2">Hearts Made Happy :)</h1>
                            <div className="counter-value text-heartsMadeHappyColor text-7.2xl font-contactUs" data-count="1500">200</div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Our Services Section */}

            <section>
                <div className="bg-ourServicesSection bg-cover">
                    <div className="pb-14 md:pb-24">
                        <div className="py-12 md:py-16 md:pb-20">
                            <h1 className="text-clientsServedColor font-bold text-5xl text-center lg:text-7xl">Our Core Services</h1>
                        </div>
                        <div className="flex flex-col gap-12 md:flex-row md:gap-8 md:px-16 items-center">
                            <div className="hover:scale-118 transition-transform duration-500 w-72 z-10 flex flex-col group bg-white shadow-xl rounded-xl overflow-hidden hover:shadow-lg" href="#">
                                <div className="relative pt-[50%] sm:pt-[60%] lg:pt-[80%] rounded-t-xl overflow-hidden">
                                    <img className="w-full h-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-t-xl" src={require("./img/Services/consultation.jpg")} alt="Image Description"/>
                                </div>
                                <div className="p-4 md:p-5">
                                    <h3 className="text-lg font-bold text-gray-800">
                                        Health Consultation
                                    </h3>
                                    <p className="mt-1 text-gray-500">
                                        Receive expert advice tailored to your well-being. Our professionals are here to address your health concerns and guide you towards a healthier lifestyle.
                                    </p>
                                </div>
                            </div>
                            <div className="hover:scale-118 transition-transform duration-500 w-72 z-20 flex flex-col group bg-white shadow-xl rounded-xl overflow-hidden hover:shadow-lg" href="#">
                                <div className="relative pt-[50%] sm:pt-[60%] lg:pt-[80%] rounded-t-xl overflow-hidden">
                                    <img className="w-full h-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-t-xl" src={require("./img/Services/refill.jpg")} alt="Image Description"/>
                                </div>
                                <div className="p-4 md:p-5">
                                    <h3 className="text-lg font-bold text-gray-800">
                                        Prescription Refill
                                    </h3>
                                    <p className="mt-1 text-gray-500">
                                        Experience the convenience of effortless online prescription refills. Ensure a seamless supply of essential medications right from the comfort of your home.
                                    </p>
                                </div>
                            </div>
                            <div className="hover:scale-118 transition-transform duration-500 w-72 z-30 flex flex-col group bg-white shadow-xl rounded-xl overflow-hidden hover:shadow-lg" href="#">
                                <div className="relative pt-[50%] sm:pt-[60%] lg:pt-[80%] rounded-t-xl overflow-hidden">
                                    <img className="w-full h-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-t-xl" src={require("./img/Services/delievery.jpg")} alt="Image Description"/>
                                </div>
                                <div className="p-4 md:p-5">
                                    <h3 className="text-lg font-bold text-gray-800">
                                        Express Delievery
                                    </h3>
                                    <p className="mt-1 text-gray-500">
                                        Enjoy the speed and security of our express delivery service for all your healthcare essentials. Your well-being delivered to your doorstep, hassle-free.
                                    </p>
                                </div>
                            </div>
                            <div className="hover:scale-118 transition-transform duration-500 w-72 z-40 flex flex-col group bg-white shadow-xl rounded-xl overflow-hidden hover:shadow-lg" href="#">
                                <div className="relative pt-[50%] sm:pt-[60%] lg:pt-[80%] rounded-t-xl overflow-hidden">
                                    <img className="w-full h-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-t-xl" src={require("./img/Services/health.jpg")} alt="Image Description"/>
                                </div>
                                <div className="p-4 md:p-5">
                                    <h3 className="text-lg font-bold text-gray-800">
                                        Medicine Consultation
                                    </h3>
                                    <p className="mt-1 text-gray-500">
                                        Gain personalized insights into your medications. Consult our pharmacists to receive guidance on the right medications and dosages for your unique needs.
                                    </p>
                                </div>
                            </div>
                            <div className="hover:scale-118 transition-transform duration-500 w-72 z-50 flex flex-col group bg-white shadow-xl rounded-xl overflow-hidden hover:shadow-lg" href="#">
                                <div className="relative pt-[50%] sm:pt-[60%] lg:pt-[80%] rounded-t-xl overflow-hidden">
                                    <img className="w-full h-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-t-xl" src={require("./img/Services/medicine.jpg")} alt="Image Description"/>
                                </div>
                                <div className="p-4 md:p-5">
                                    <h3 className="text-lg font-bold text-gray-800">
                                        Pharmacy Products
                                    </h3>
                                    <p className="mt-1 text-gray-500">
                                        Explore curated health essentials for your well-being. From remedies to supplements, find quality pharmacy products to support a healthier you.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
                
            {/* Contact Us Section */}
            
            <section className="bg-gradient-to-bl from-cyan-600 to-darkerBlue font-contactUs rounded-3xl md:mx-16 mx-4">
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
            
            {/* Testimonials Section */}
        
            <section className="md:px-36 pb-16 md:pb-28 md:pt-24 pt-16 relative">
                <img src={require("./img/Upper Quotes.png")} alt="" className="md:opacity-25 opacity-10 absolute -top-10 -left-8 w-52 h-52 md:-top-6 md:left-12 md:w-64 md:h-64"/>
                <div className="md:mx-auto text-center mx-4 md:max-w-xl lg:max-w-3xl text-neutral-700">
                    <h3 className="mb-6 text-mainBlue font-bold text-5.5xl text-center lg:text-6xl">Customer Testimonials</h3>
                    <p className="mb-9 pb-2 md:mb-12 md:pb-0 font-normal text-center sm:text-lg text-neutral-700">
                        Discover the experiences of our valued customers through their testimonials. See what people have to say about our services and products, and why they choose us for their pharmaceutical needs.
                    </p>
                </div>
        
                {/*First Testimonial*/}
                <section className="grid gap-12 md:gap-20 text-center mx-4 md:grid-cols-3 md:mx-0 items-center">
                    {/* First Testimonial */}
                    <div>
                        <div className="block rounded-3xl bg-white shadow-lg hover:text-black hover:scale-114 transition-transform duration-500">
                            <div className="h-28 overflow-hidden rounded-t-3xl bg-[#9d789b]"></div>
                            <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white">
                                <img src={require("./img/Testimonials/Review-2.png")} className="w-full h-full object-cover"/>
                            </div>
                            <div className="p-6 py-4 md:py-6">
                                <h4 className="mb-4 text-2xl font-semibold">Stephen Attiku</h4>
                                <hr />
                                <p className="mt-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                        className="inline-block h-7 w-7 pr-2" viewBox="0 0 24 24">
                                        <path
                                            d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                                    </svg>
                                    Found an awesome spot for my pharmaceutical needs! The folks here know their stuff and are super friendly. What got me impressed was how neat and organized the store is. Made shopping a breeze, found everything I needed without a hitch. Big shoutout to the team for keeping the place so tidy and customer-friendly!
                                </p>
                            </div>
                            <div className="flex items-center justify-center pb-6">
                                <svg className="w-4 h-4 text-yellow-500 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                </svg>
                                <svg className="w-4 h-4 text-yellow-500 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                </svg>
                                <svg className="w-4 h-4 text-yellow-500 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                </svg>
                                <svg className="w-4 h-4 text-yellow-500 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                </svg>
                                <svg className="w-4 h-4 text-gray-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                </svg>
                                <p className="ms-1 text-sm font-medium text-gray-500">4</p>
                                <p className="ms-1 text-sm font-medium text-gray-500">out of</p>
                                <p className="ms-1 text-sm font-medium text-gray-500">5</p>
                            </div>
                        </div>
                    </div>
                
                    {/* Second Testimonial */}
                    <div>
                        <div className="block rounded-3xl bg-white shadow-lg hover:text-black hover:hover:scale-112 transition-transform duration-500">
                            <div className="h-28 overflow-hidden rounded-t-3xl bg-[#7a81a8]"></div>
                            <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white">
                                <img src={require("./img/Testimonials/Review-1.png")} className="w-full h-full object-cover"/>
                            </div>
                            <div className="p-6 py-4 md:py-6">
                                <h4 className="mb-4 text-2xl font-semibold">Marvin Nyanzi Ssentamu</h4>
                                <hr />
                                <p className="mt-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                        className="inline-block h-7 w-7 pr-2" viewBox="0 0 24 24">
                                        <path
                                            d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                                    </svg>
                                    It's a great place with a dedicated staff team who receive and assist customers in all their needs.  It offers wholesale and retail services for all your pharmaceutical needs. They can send goods even to customers upcountry just by making payment and approving your order for the different selected items and it's delivered in the shortest time possible. I thank the management because I liked my experience here and I call upon everyone to try it out.
                                </p>
                            </div>
                            <div className="flex items-center justify-center pb-6">
                                <svg className="w-4 h-4 text-yellow-500 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                </svg>
                                <svg className="w-4 h-4 text-yellow-500 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                </svg>
                                <svg className="w-4 h-4 text-yellow-500 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                </svg>
                                <svg className="w-4 h-4 text-yellow-500 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                </svg>
                                <svg className="w-4 h-4 text-yellow-500 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                </svg>
                                <p className="ms-1 text-sm font-medium text-gray-500">4.95</p>
                                <p className="ms-1 text-sm font-medium text-gray-500">out of</p>
                                <p className="ms-1 text-sm font-medium text-gray-500">5</p>
                            </div>
                        </div>
                    </div>
                
                    {/* Third Testimonial */}
                    <div>
                        <div className="block rounded-3xl bg-white shadow-lg hover:text-black hover:hover:scale-114 transition-transform duration-500">
                            <div className="h-28 overflow-hidden rounded-t-3xl bg-[#8d8741]"></div>
                            <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white">
                                <img src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(3).webp" />
                            </div>
                            <div className="p-6 py-4 md:py-6">
                                <h4 className="mb-4 text-2xl font-semibold">John Doe</h4>
                                <hr />
                                <p className="mt-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                        className="inline-block h-7 w-7 pr-2" viewBox="0 0 24 24">
                                        <path
                                            d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                                    </svg>
                                    Discovered a gem! The team here is committed, making the experience top-notch. From wholesale to retail, they cater to all pharmaceutical needs. Fast, hassle-free delivery to remote locations by just paying and confirming. Thumbs up to the management – highly recommend trying it out!                        </p>
                            </div>
                            <div className="flex items-center justify-center pb-6">
                                <svg className="w-4 h-4 text-yellow-500 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                </svg>
                                <svg className="w-4 h-4 text-yellow-500 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                </svg>
                                <svg className="w-4 h-4 text-yellow-500 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                </svg>
                                <svg className="w-4 h-4 text-yellow-500 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                </svg>
                                <svg className="w-4 h-4 text-gray-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                </svg>
                                <p className="ms-1 text-sm font-medium text-gray-500">4.5</p>
                                <p className="ms-1 text-sm font-medium text-gray-500">out of</p>
                                <p className="ms-1 text-sm font-medium text-gray-500">5</p>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
            
            {/* Footer Section */}

            <footer className="bg-mainBlue">
                <div className="mx-auto w-full max-w-screen-xl p-6 md:p-4 py-6 lg:py-8">
                    <div className="md:flex md:justify-between md:items-center">
                        <div className="mb-6 md:mb-0 w-80">
                            <a href="#">
                                <img src={require("./img/Pramukh Pharmcueticals Logo Transparent.png")} className="h-20 w-64 me-3" alt="Pramukh Pharmaceuticals Logo" />
                            </a>
                            <p className="text-white font-semibold tracking-wide text-left text-sm mt-4 font-body">
                                Your Neighborhood Pharmacy, Dedicated to Providing Quality Healthcare Solutions. 
                                Trust us for a wide range of pharmaceutical products and personalized care.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-8 sm:gap-10 sm:grid-cols-4">
                            <div>
                                <h2 className="mb-6 text-base font-bold uppercase text-white sm:text-center font-body tracking-widest">Links</h2>
                                <ul className="text-lightGray font-medium sm:text-center">
                                    <li className="mb-3">
                                        <Link to="/" className="hover:underline">Home</Link>
                                    </li>
                                    <li className="mb-3">
                                        <Link to="/about" className="hover:underline">About Us</Link>
                                    </li>
                                    <li className="mb-3">
                                        <Link to="/services" className="hover:underline">Services</Link>
                                    </li>
                                    <li>
                                        <Link to="/branches" className="hover:underline">Branches</Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-base font-bold text-white sm:text-center font-body tracking-widest">LEGAL</h2>
                                <ul className="text-lightGray font-medium sm:text-center">
                                    <li className="mb-3">
                                        <a href="#" className="hover:underline">Privacy Policy</a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-span-2 bg-white rounded-2xl sm:ml-8 p-4 w-72 font-body">
                                <h1 className="font-body text-sm">
                                    Questions or assistance needed? Call us or reach out via Email. We're here for you!
                                </h1>
                                <div className="border-t border-darkerBlue mt-3.5"></div>
                                <div className="space-x-2 text-center text-darkerBlue my-2">
                                    <a href="tel:0756545315">
                                        <i className="fa-solid fa-phone fa-lg"></i>
                                    </a>
                                    <span className="text-xl">|</span>
                                    <a href="mailto:info@example.com">
                                        <i className="fa-solid fa-envelope fa-xl"></i>
                                    </a>
                                </div>
                                <p className="text-sm text-gray-600 text-center mb-2">Mon-Fri: 9 AM - 5 PM</p>
                                <h1 className="font-body text-xs text-center">
                                    Mackay Road, New Taxi Park, Kampala, Uganda
                                </h1>
                            </div>                
                        </div>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                    <div className="sm:flex sm:items-center sm:justify-between text-white">
                        <span className="font-medium tracking-wide text-sm sm:text-center">© 2023 <a href="#" className="hover:underline">Pramukh Pharmaceuticals™</a>. All Rights Reserved.
                        </span>
                        <div className="flex mt-4 sm:justify-center sm:items-center sm:mt-0">
                            <i className="fa-brands fa-whatsapp fa-xl hover:-translate-y-1 mx-4"></i>
                            <i className="fa-brands fa-instagram fa-xl hover:-translate-y-1 mx-4"></i>
                            <i className="fa-brands fa-facebook fa-xl hover:-translate-y-1 mx-4"></i>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Home;