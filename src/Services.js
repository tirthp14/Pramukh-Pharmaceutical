import React from "react";
import { Link } from "react-router-dom";

function Services() {

    document.addEventListener('DOMContentLoaded', function () {
        const btn = document.getElementById('menu-btn');
        const nav = document.getElementById('menu');
      
        btn.addEventListener('click', () => {
          btn.classList.toggle('open');
          nav.classList.toggle('flex');
          nav.classList.toggle('hidden');
        });
      });
    
    window.addEventListener('load', function () {
        let nextButton = document.getElementById("next");
        let prevButton = document.getElementById("prev");
    
        let defaultTransform = 0;
    
        function goNext() {
            defaultTransform = defaultTransform - 180;
            var slider = document.getElementById("slider");
            if (Math.abs(defaultTransform) >= slider.scrollWidth / 2.7) defaultTransform = 0;
            slider.style.transform = "translateX(" + defaultTransform + "px)";
        }
    
        nextButton.addEventListener("click", goNext);
    
        function goPrev() {
            var slider = document.getElementById("slider");
            if (Math.abs(defaultTransform) === 0) defaultTransform = 0;
            else defaultTransform = defaultTransform + 180;
            slider.style.transform = "translateX(" + defaultTransform + "px)";
        }
    
        prevButton.addEventListener("click", goPrev);
    });

    return(
        <div>
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
                        <img src={require("./img/Pramukh Pharmcueticals Logo.png")} alt="Logo" className="w-60"/>
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
                    <a href="#" className="hidden p-3 px-6 pt-2 text-white bg-mainGreen rounded-full baseline hover:bg-lighterGreen md:block">Contact Us</a>
                    {/* Mobile Menu */}
                    <div className="md:hidden">
                        <div id="menu" className="z-50 absolute flex-col items-center hidden self-end mt-10 space-y-6 font-bold sm:w-auto sm:self-center left-6 right-6 drop-shadow-md">
                            <ul className="w-full font-medium flex flex-col p-4 border border-gray-200 rounded-lg bg-gray-100 rtl:space-x-reverse">
                                <li>
                                <a href="index.html" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100">Home</a>
                                </li>
                                <li>
                                <a href="About Us.html" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100">About Us</a>
                                </li>
                                <li>
                                <a href="Services.html" className="block py-2 px-3 text-white bg-blue-700 rounded" aria-current="page">Services</a>
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

            <section className="relative overflow-hidden">
                <div className="mt-2 md:mt-0">
                    <div className="flex flex-wrap items-center mx-auto justify-center">
                        <div className="w-full px-4 lg:w-[46%]">
                            <div className=" lg:max-w-2xl">
                                <h1 className="mb-6 md:mb-12 text-4.5xl font-bold lg:text-7.1xl text-mainBlue text-center md:text-left">
                                    <span>Wellness Products</span>
                                    <span className="text-mainGreen">Tailored</span>
                                    <span>for You</span>
                                </h1>
                                <p className="mb-7 md:mb-8 text-darkerBlue text-left font-bold pl-4 text-2xl md:text-3xl border-l-4 border-darkerBlue md:pl-9">Trusted Medications for a Healthier and Better Tomorrow</p>
                                <p className="mb-10 leading-8 text-gray-500">
                                    At Pramukh Pharma Ltd, we specialize in providing comprehensive pharmaceutical solutions. From a wide range of high-quality medications to expert prescription services, we are committed to ensuring your health and well-being.                        </p>
                                <a className="inline-block w-full px-6 py-4 mb-2 text-lg font-medium leading-6 text-center text-white transition duration-200 bg-mainBlue rounded shadow md:w-auto md:mb-0 md:mr-4 hover:bg-darkerBlue"
                                    href="#">
                                    Learn More
                                </a>
                            </div>
                        </div>
                        <div className="w-full px-4 pt-12 md:pl-8 md:mt-20 lg:w-[46%] lg:mt-0">
                            <div className="flex justify-center lg:justify-end">
                                <div className="mr-4 lg:mr-8">
                                    <img className="block object-cover w-full h-32 mx-auto mb-8 rounded-md sm:h-64"
                                        src={require("./img/Slideshow/Image-1.jpg")} alt=""/>
                                    <img className="block object-cover w-full h-32 mx-auto mb-8 rounded-md sm:h-64"
                                        src={require("./img/Slideshow/Image-2.jpg")} alt=""/>
                                </div>
                                <div className="mt-12">
                                    <img className="block object-cover w-full h-32 mx-auto mb-8 rounded-md sm:h-64"
                                        src={require("./img/Slideshow/Image-3.jpg")} alt=""/>
                                    <img className="block object-cover w-full h-32 mx-auto mb-8 rounded-md sm:h-64"
                                        src={require("./img/Slideshow/Image-4.jpg")} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Services Section */}

            <section>
                <div className="bg-ourServicesSection2 bg-cover">
                    <div className="pt-5 md:pt-10">
                        <h1 className="text-clientsServedColor font-bold text-5.5xl text-center lg:text-7xl">Our Core Services</h1>
                    </div>
                    <div className="flex items-center justify-center w-full h-full py-14 px-6 sm:py-20 md:px-16">
                        <div className="w-full relative flex items-center justify-center">
                            <button aria-label="slide backward" type="button" className="absolute top-0 start-0 z-30 ml-4 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" id="prev">
                                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/30 dark:bg-gray-800/50 group-hover:bg-black/80 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                    <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                                    </svg>
                                    <span className="sr-only">Previous</span>
                                </span>
                            </button>
                            <div className="w-full h-5/6 mx-auto overflow-x-hidden overflow-y-hidden">
                                <div id="slider" className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700">
                                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                        <div className="w-[296px] h-[430px]"></div>
                                        <div className="bg-mainBlue bg-opacity-30 absolute w-full h-full p-6">
                                            <div className="h-full p-6 text-left transition duration-200 rounded-md shadow bg-gray-50">
                                                <div className="my-auto w-full h-full">
                                                    <div className="inline-flex items-center justify-center w-16 h-16 mx-auto mb-6 text-blue-600 bg-blue-100 rounded-lg">
                                                    <i className="fa-solid fa-user-doctor fa-xl"></i>
                                                </div>
                                                <h2 className="mb-4 text-xl font-bold leading-tight md:text-2xl">
                                                    Health Consultation
                                                </h2>
                                                <p className="font-medium text-gray-600">
                                                    Receive expert advice tailored to your well-being. Our professionals are here to address your health concerns and guide you towards a healthier lifestyle.
                                                </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                        <div className="w-[296px] h-[430px]"></div>
                                        <div className="bg-mainBlue bg-opacity-30 absolute w-full h-full p-6">
                                            <div className="h-full p-6 text-left transition duration-200 rounded-md shadow bg-gray-50">
                                                <div className="inline-flex items-center justify-center w-16 h-16 mx-auto mb-6 text-red-600 bg-red-100 rounded-lg">
                                                <i className="fa-solid fa-prescription-bottle-medical fa-xl"></i>
                                                </div>
                                                <h2 className="mb-4 text-xl font-bold leading-tight md:text-2xl">
                                                    Prescription Refill
                                                </h2>
                                                <p className="font-medium text-gray-600">
                                                    Experience the convenience of effortless online prescription refills. Ensure a seamless supply of essential medications right from the comfort of your home.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                        <div className="w-[296px] h-[430px]"></div>
                                        <div className="bg-mainBlue bg-opacity-30 absolute w-full h-full p-6">
                                            <div className="h-full p-6 text-left transition duration-200 rounded-md shadow bg-gray-50">
                                                <div className="inline-flex items-center justify-center w-16 h-16 mx-auto mb-6 text-green-600 bg-green-100 rounded-lg">
                                                <i className="fa-solid fa-truck fa-xl"></i>
                                                </div>
                                                <h2 className="mb-4 text-xl font-bold leading-tight md:text-2xl">
                                                    Express Delievery & Services
                                                </h2>
                                                <p className="font-medium text-gray-600">
                                                    Enjoy the speed and security of our express delivery service for all your healthcare essentials. Your well-being delivered to your doorstep, hassle-free.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                        <div className="w-[296px] h-[430px]"></div>
                                        <div className="bg-mainBlue bg-opacity-30 absolute w-full h-full p-6">
                                            <div className="h-full p-6 text-left transition duration-200 rounded-md shadow bg-gray-50">
                                                <div className="inline-flex items-center justify-center w-16 h-16 mx-auto mb-6 text-yellow-600 bg-yellow-100 rounded-lg">
                                                <i className="fa-solid fa-house-medical fa-xl"></i>
                                                </div>
                                                <h2 className="mb-4 text-xl font-bold leading-tight md:text-2xl">
                                                    Medicine Consultation
                                                </h2>
                                                <p className="font-medium text-gray-600">
                                                    Gain personalized insights into your medications. Consult our pharmacists to receive guidance on the right medications and dosages for your unique needs.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                        <div className="w-[296px] h-[430px]"></div>
                                        <div className="bg-mainBlue bg-opacity-30 absolute w-full h-full p-6">
                                            <div className="h-full p-6 text-left transition duration-200 rounded-md shadow bg-gray-50">
                                                <div className="inline-flex items-center justify-center w-16 h-16 mx-auto mb-6 text-purple-600 bg-purple-100 rounded-lg">
                                                <i className="fa-solid fa-pills fa-xl"></i>
                                                </div>
                                                <h2 className="mb-4 text-xl font-bold leading-tight md:text-2xl">
                                                    Pharmacy Products
                                                </h2>
                                                <p className="font-medium text-gray-600">
                                                    Explore curated health essentials for your well-being. From remedies to supplements, find quality pharmacy products to support a healthier you.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                        <div className="w-[296px] h-[430px]"></div>
                                        <div className="bg-mainBlue bg-opacity-30 absolute w-full h-full p-6">
                                            <div className="h-full p-6 text-left transition duration-200 rounded-md shadow bg-gray-50">
                                                <div className="inline-flex items-center justify-center w-16 h-16 mx-auto mb-6 text-pink-600 bg-pink-100 rounded-lg">
                                                <i className="fa-solid fa-business-time fa-xl"></i>
                                                </div>
                                                <h2 className="mb-4 text-xl font-bold leading-tight md:text-2xl">
                                                    Convenient Timing
                                                </h2>
                                                <p className="font-medium text-gray-600">
                                                    Experience hassle-free healthcare that fits your schedule. Our services prioritize your time, offering flexibility for consultations and prescription refills
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button aria-label="slide forward" type="button" className="absolute top-0 end-0 z-30 mr-4 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" id="next">
                                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/30 dark:bg-gray-800/50 group-hover:bg-black/80 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                    <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                                    </svg>
                                    <span className="sr-only">Next</span>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Common Products Sold */}

            <section className="bg-slate-100">
                <div className="p-6 pt-10 md:pt-16 md:p-24">
                    <div className="pb-10 md:pb-16">
                        <h1 className="text-clientsServedColor font-contactUs font-bold text-5.5xl text-center lg:text-5xl"><span className="text-gray-700">Frequently</span> Bought Products</h1>
                    </div>
                    <div className="grid grid-cols-2 grid-rows-4 lg:grid-rows-2 gap-6 lg:grid-cols-4">
                        <div className="relative bg-white rounded-2xl">
                            <div className="w-full h-[210px] px-4 pt-4">
                                <img src={require("./img/Gallery/1.jpg")} alt=""
                                    className="object-contain w-full h-full rounded-lg"/>
                            </div>
                            <div>
                                <div className="p-4">
                                    <div className="mb-3">
                                        <a href="">
                                            <h2 className="text-2xl font-semibold">
                                                Panadol Extra
                                            </h2>
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-center justify-end ">
                                    <a href="#"
                                        className="absolute bottom-0 right-0 px-3 py-4 text-sm text-gray-100 bg-mainBlue rounded-tl-2xl rounded-br-2xl hover:bg-darkerBlue hover:text-gray-100">
                                        Find out more</a>
                                </div>
                            </div>
                        </div>
                        <div className="relative bg-white rounded-2xl">
                            <div className="w-full h-[210px] px-4 pt-4 ">
                                <img src={require("./img/Gallery/2.jpg")} alt=""
                                    className="object-contain w-full h-full rounded-lg"/>
                            </div>
                            <div>
                                <div className="p-4">
                                    <div className="mb-3">
                                        <a href="">
                                            <h2 className="text-2xl font-semibold">
                                                Paracetamol 500mg
                                            </h2>
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-center justify-end ">
                                    <a href="#"
                                        className="absolute bottom-0 right-0 px-3 py-4 text-sm text-gray-100 bg-mainBlue rounded-tl-2xl rounded-br-2xl hover:bg-darkerBlue hover:text-gray-100">
                                        Find out more</a>
                                </div>
                            </div>
                        </div>
                        <div className="relative bg-white rounded-2xl">
                            <div className="w-full h-[210px] px-4 pt-4 ">
                                <img src={require("./img/Gallery/3.jpg")} alt=""
                                    className="object-contain w-full h-full rounded-lg"/>
                            </div>
                            <div>
                                <div className="p-4">
                                    <div className="mb-3">
                                        <a href="">
                                            <h2 className="text-2xl font-semibold">
                                                Diclofenac DHG 50mg
                                            </h2>
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-center justify-end ">
                                    <a href="#"
                                        className="absolute bottom-0 right-0 px-3 py-4 text-sm text-gray-100 bg-mainBlue rounded-tl-2xl rounded-br-2xl hover:bg-darkerBlue hover:text-gray-100">
                                        Find out more</a>
                                </div>
                            </div>
                        </div>
                        <div className="relative bg-white rounded-2xl">
                            <div className="w-full h-[210px] px-4 pt-4 ">
                                <img src={require("./img/Gallery/4.jpg")} alt=""
                                    className="object-contain w-full h-full rounded-lg"/>
                            </div>
                            <div>
                                <div className="p-4">
                                    <div className="mb-3">
                                        <a href="">
                                            <h2 className="text-2xl font-semibold">
                                                Amoxycillin Capsules 250mg 
                                            </h2>
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-center justify-end ">
                                    <a href="#"
                                        className="absolute bottom-0 right-0 px-3 py-4 text-sm text-gray-100 bg-mainBlue rounded-tl-2xl rounded-br-2xl hover:bg-darkerBlue hover:text-gray-100">
                                        Find out more</a>
                                </div>
                            </div>
                        </div>
                        <div className="relative bg-white rounded-2xl">
                            <div className="w-full h-[210px] px-4 pt-4 ">
                                <img src={require("./img/Gallery/5.jpg")} alt=""
                                    className="object-contain w-full h-full rounded-lg"/>
                            </div>
                            <div>
                                <div className="p-4">
                                    <div className="mb-3">
                                        <a href="">
                                            <h2 className="text-2xl font-semibold">
                                                Ampicillin Capsules 250 mg
                                            </h2>
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-center justify-end ">
                                    <a href="#"
                                        className="absolute bottom-0 right-0 px-3 py-4 text-sm text-gray-100 bg-mainBlue rounded-tl-2xl rounded-br-2xl hover:bg-darkerBlue hover:text-gray-100">
                                        Find out more</a>
                                </div>
                            </div>
                        </div>
                        <div className="relative bg-white rounded-2xl">
                            <div className="w-full h-[210px] px-4 pt-4 ">
                                <img src={require("./img/Gallery/6.jpg")} alt=""
                                    className="object-contain w-full h-full rounded-lg"/>
                            </div>
                            <div>
                                <div className="p-4">
                                    <div className="mb-3">
                                        <a href="">
                                            <h2 className="text-2xl font-semibold">
                                                Omeprazole Capsules 20mg
                                            </h2>
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-center justify-end ">
                                    <a href="#"
                                        className="absolute bottom-0 right-0 px-3 py-4 text-sm text-gray-100 bg-mainBlue rounded-tl-2xl rounded-br-2xl hover:bg-darkerBlue hover:text-gray-100">
                                        Find out more</a>
                                </div>
                            </div>
                        </div>
                        <div className="relative bg-white rounded-2xl">
                            <div className="w-full h-[210px] px-4 pt-4 ">
                                <img src={require("./img/Gallery/7.jpg")} alt=""
                                    className="object-contain w-full h-full rounded-lg"/>
                            </div>
                            <div>
                                <div className="p-4">
                                    <div className="mb-3">
                                        <a href="">
                                            <h2 className="text-2xl font-semibold">
                                                Ampiclox 500mg
                                            </h2>
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-center justify-end ">
                                    <a href="#"
                                        className="absolute bottom-0 right-0 px-3 py-4 text-sm text-gray-100 bg-mainBlue rounded-tl-2xl rounded-br-2xl hover:bg-darkerBlue hover:text-gray-100">
                                        Find out more</a>
                                </div>
                            </div>
                        </div>
                        <div className="relative bg-white rounded-2xl">
                            <div className="w-full h-[210px] px-4 pt-4 ">
                                <img src={require("./img/Gallery/8.jpg")} alt=""
                                    className="object-contain w-full h-full rounded-lg"/>
                            </div>
                            <div>
                                <div className="p-4 pb-7">
                                    <div className="mb-3">
                                        <a href="">
                                            <h2 className="text-2xl font-semibold">
                                                Azithromycin Coated 500mg
                                            </h2>
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-center justify-end ">
                                    <a href="#"
                                        className="absolute bottom-0 right-0 px-3 py-4 text-sm text-gray-100 bg-mainBlue rounded-tl-2xl rounded-br-2xl hover:bg-darkerBlue hover:text-gray-100">
                                        Find out more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Us Section */}

            <section className="bg-slate-100 font-contactUs pt-12 pb-16 md:pt-0 md:pb-0">
                <div className="bg-gradient-to-bl from-cyan-600 to-darkerBlue rounded-3xl md:m-16 md:mt-0 mx-4">
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
                </div>
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

export default Services;