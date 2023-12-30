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

            <div class="bg-mainBlue lg:flex items-center justify-between p-6 px-8 text-white hidden">
                {/* Phone Number, Location & Operational Hours  */}
                <div class="flex space-x-8 items-center">
                    <div class="flex items-center space-x-3">
                        <i class="fa-solid fa-phone fa-beat"></i>
                        <a href="tel:0756545315">Phone: <strong>0756 545-315</strong></a>
                    </div>
                    <div class="flex items-center space-x-3">
                        <i class="fa-solid fa-location-dot fa-beat"></i>
                        <h1>Location: <strong>Mackay Road, Old Kampala</strong></h1>
                    </div>
                    <div class="flex items-center space-x-3">
                        <i class="fa-solid fa-business-time fa-beat"></i>
                        <h1>Mon - Sun: <strong>8.00 AM - 6.00 PM</strong></h1>
                    </div>
                </div>

                {/* Icons */}
                <div class="space-x-6">
                    <i class="fa-brands fa-whatsapp fa-xl hover:-translate-y-1"></i>
                    <i class="fa-brands fa-instagram fa-xl hover:-translate-y-1"></i>
                    <i class="fa-brands fa-facebook fa-xl hover:-translate-y-1"></i>
                </div>
            </div>

            {/* NavBar Section */}

            <nav class="relative p-4 pb-2 md:pb-4">
                <div class="flex items-center justify-between">
                    {/* Logo */}
                    <div>
                        <img src="/img/Pramukh Pharmcueticals Logo.png" alt="Logo" class="w-60"/>
                    </div>
                    {/* Menu Items */}
                    <div class="hidden space-x-12 md:flex text-lg font-semibold">
                        <Link to="/" class="hover:text-mainBlue">Home</Link>
                        <Link to="/about" class="hover:text-mainBlue">About Us</Link>
                        <Link to="/services" class="hover:text-mainBlue">Services</Link>
                        <Link to="/branches" class="hover:text-mainBlue">Branches</Link>
                    </div>
                    {/* Phone Number */}
                    <div class="hidden lg:flex items-center space-x-5 text-darkerBlue">
                        <i class="fa-solid fa-phone fa-lg"></i>
                        <a href="tel:0756545315" class="text-2xl font-sans">0756 545-315</a>
                    </div>
                    {/* Button */}
                    <a href="#" class="hidden p-3 px-6 pt-2 text-white bg-mainGreen rounded-full baseline hover:bg-lighterGreen md:block">Contact Us</a>
                    {/* Mobile Menu */}
                    <div class="md:hidden">
                        <div id="menu" class="z-50 absolute flex-col items-center hidden self-end mt-10 space-y-6 font-bold sm:w-auto sm:self-center left-6 right-6 drop-shadow-md">
                            <ul class="w-full font-medium flex flex-col p-4 border border-gray-200 rounded-lg bg-gray-100 rtl:space-x-reverse">
                                <li>
                                <a href="index.html" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100">Home</a>
                                </li>
                                <li>
                                <a href="About Us.html" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100">About Us</a>
                                </li>
                                <li>
                                <a href="Services.html" class="block py-2 px-3 text-white bg-blue-700 rounded" aria-current="page">Services</a>
                                </li>
                                <li>
                                <a href="Branches.html" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100">Branches</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* Hamburger Menu */}
                    <button id="menu-btn" class="block hamburger md:hidden focus:outline-none mr-4">
                        <span class="hamburger-top"></span>
                        <span class="hamburger-middle"></span>
                        <span class="hamburger-bottom"></span>
                    </button>
                </div>
            </nav>

            {/* Hero Section */}

            <section class="relative overflow-hidden">
                <div class="mt-2 md:mt-0">
                    <div class="flex flex-wrap items-center mx-auto justify-center">
                        <div class="w-full px-4 lg:w-[46%]">
                            <div class=" lg:max-w-2xl">
                                <h1 class="mb-6 md:mb-12 text-4.5xl font-bold lg:text-7.1xl text-mainBlue text-center md:text-left">
                                    <span>Wellness Products</span>
                                    <span class="text-mainGreen">Tailored</span>
                                    <span>for You</span>
                                </h1>
                                <p class="mb-7 md:mb-8 text-darkerBlue text-left font-bold pl-4 text-2xl md:text-3xl border-l-4 border-darkerBlue md:pl-9">Trusted Medications for a Healthier and Better Tomorrow</p>
                                <p class="mb-10 leading-8 text-gray-500">
                                    At Pramukh Pharma Ltd, we specialize in providing comprehensive pharmaceutical solutions. From a wide range of high-quality medications to expert prescription services, we are committed to ensuring your health and well-being.                        </p>
                                <a class="inline-block w-full px-6 py-4 mb-2 text-lg font-medium leading-6 text-center text-white transition duration-200 bg-mainBlue rounded shadow md:w-auto md:mb-0 md:mr-4 hover:bg-darkerBlue"
                                    href="#">
                                    Learn More
                                </a>
                            </div>
                        </div>
                        <div class="w-full px-4 pt-12 md:pl-8 md:mt-20 lg:w-[46%] lg:mt-0">
                            <div class="flex justify-center lg:justify-end">
                                <div class="mr-4 lg:mr-8">
                                    <img class="block object-cover w-full h-32 mx-auto mb-8 rounded-md sm:h-64"
                                        src="/img/Slideshow/Image-1.jpg" alt=""/>
                                    <img class="block object-cover w-full h-32 mx-auto mb-8 rounded-md sm:h-64"
                                        src="/img/Slideshow/Image-2.jpg" alt=""/>
                                </div>
                                <div class="mt-12">
                                    <img class="block object-cover w-full h-32 mx-auto mb-8 rounded-md sm:h-64"
                                        src="/img/Slideshow/Image-3.jpg" alt=""/>
                                    <img class="block object-cover w-full h-32 mx-auto mb-8 rounded-md sm:h-64"
                                        src="/img/Slideshow/Image-4.jpg" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Services Section */}

            <section>
                <div class="bg-ourServicesSection2 bg-cover">
                    <div class="pt-5 md:pt-10">
                        <h1 class="text-clientsServedColor font-bold text-5.5xl text-center lg:text-7xl">Our Core Services</h1>
                    </div>
                    <div class="flex items-center justify-center w-full h-full py-14 px-6 sm:py-20 md:px-16">
                        <div class="w-full relative flex items-center justify-center">
                            <button aria-label="slide backward" type="button" class="absolute top-0 start-0 z-30 ml-4 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" id="prev">
                                <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/30 dark:bg-gray-800/50 group-hover:bg-black/80 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                    <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                                    </svg>
                                    <span class="sr-only">Previous</span>
                                </span>
                            </button>
                            <div class="w-full h-5/6 mx-auto overflow-x-hidden overflow-y-hidden">
                                <div id="slider" class="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700">
                                    <div class="flex flex-shrink-0 relative w-full sm:w-auto">
                                        <div class="w-[296px] h-[430px]"></div>
                                        <div class="bg-mainBlue bg-opacity-30 absolute w-full h-full p-6">
                                            <div class="h-full p-6 text-left transition duration-200 rounded-md shadow bg-gray-50">
                                                <div class="my-auto w-full h-full">
                                                    <div class="inline-flex items-center justify-center w-16 h-16 mx-auto mb-6 text-blue-600 bg-blue-100 rounded-lg">
                                                    <i class="fa-solid fa-user-doctor fa-xl"></i>
                                                </div>
                                                <h2 class="mb-4 text-xl font-bold leading-tight md:text-2xl">
                                                    Health Consultation
                                                </h2>
                                                <p class="font-medium text-gray-600">
                                                    Receive expert advice tailored to your well-being. Our professionals are here to address your health concerns and guide you towards a healthier lifestyle.
                                                </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex flex-shrink-0 relative w-full sm:w-auto">
                                        <div class="w-[296px] h-[430px]"></div>
                                        <div class="bg-mainBlue bg-opacity-30 absolute w-full h-full p-6">
                                            <div class="h-full p-6 text-left transition duration-200 rounded-md shadow bg-gray-50">
                                                <div class="inline-flex items-center justify-center w-16 h-16 mx-auto mb-6 text-red-600 bg-red-100 rounded-lg">
                                                <i class="fa-solid fa-prescription-bottle-medical fa-xl"></i>
                                                </div>
                                                <h2 class="mb-4 text-xl font-bold leading-tight md:text-2xl">
                                                    Prescription Refill
                                                </h2>
                                                <p class="font-medium text-gray-600">
                                                    Experience the convenience of effortless online prescription refills. Ensure a seamless supply of essential medications right from the comfort of your home.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex flex-shrink-0 relative w-full sm:w-auto">
                                        <div class="w-[296px] h-[430px]"></div>
                                        <div class="bg-mainBlue bg-opacity-30 absolute w-full h-full p-6">
                                            <div class="h-full p-6 text-left transition duration-200 rounded-md shadow bg-gray-50">
                                                <div class="inline-flex items-center justify-center w-16 h-16 mx-auto mb-6 text-green-600 bg-green-100 rounded-lg">
                                                <i class="fa-solid fa-truck fa-xl"></i>
                                                </div>
                                                <h2 class="mb-4 text-xl font-bold leading-tight md:text-2xl">
                                                    Express Delievery & Services
                                                </h2>
                                                <p class="font-medium text-gray-600">
                                                    Enjoy the speed and security of our express delivery service for all your healthcare essentials. Your well-being delivered to your doorstep, hassle-free.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex flex-shrink-0 relative w-full sm:w-auto">
                                        <div class="w-[296px] h-[430px]"></div>
                                        <div class="bg-mainBlue bg-opacity-30 absolute w-full h-full p-6">
                                            <div class="h-full p-6 text-left transition duration-200 rounded-md shadow bg-gray-50">
                                                <div class="inline-flex items-center justify-center w-16 h-16 mx-auto mb-6 text-yellow-600 bg-yellow-100 rounded-lg">
                                                <i class="fa-solid fa-house-medical fa-xl"></i>
                                                </div>
                                                <h2 class="mb-4 text-xl font-bold leading-tight md:text-2xl">
                                                    Medicine Consultation
                                                </h2>
                                                <p class="font-medium text-gray-600">
                                                    Gain personalized insights into your medications. Consult our pharmacists to receive guidance on the right medications and dosages for your unique needs.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex flex-shrink-0 relative w-full sm:w-auto">
                                        <div class="w-[296px] h-[430px]"></div>
                                        <div class="bg-mainBlue bg-opacity-30 absolute w-full h-full p-6">
                                            <div class="h-full p-6 text-left transition duration-200 rounded-md shadow bg-gray-50">
                                                <div class="inline-flex items-center justify-center w-16 h-16 mx-auto mb-6 text-purple-600 bg-purple-100 rounded-lg">
                                                <i class="fa-solid fa-pills fa-xl"></i>
                                                </div>
                                                <h2 class="mb-4 text-xl font-bold leading-tight md:text-2xl">
                                                    Pharmacy Products
                                                </h2>
                                                <p class="font-medium text-gray-600">
                                                    Explore curated health essentials for your well-being. From remedies to supplements, find quality pharmacy products to support a healthier you.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex flex-shrink-0 relative w-full sm:w-auto">
                                        <div class="w-[296px] h-[430px]"></div>
                                        <div class="bg-mainBlue bg-opacity-30 absolute w-full h-full p-6">
                                            <div class="h-full p-6 text-left transition duration-200 rounded-md shadow bg-gray-50">
                                                <div class="inline-flex items-center justify-center w-16 h-16 mx-auto mb-6 text-pink-600 bg-pink-100 rounded-lg">
                                                <i class="fa-solid fa-business-time fa-xl"></i>
                                                </div>
                                                <h2 class="mb-4 text-xl font-bold leading-tight md:text-2xl">
                                                    Convenient Timing
                                                </h2>
                                                <p class="font-medium text-gray-600">
                                                    Experience hassle-free healthcare that fits your schedule. Our services prioritize your time, offering flexibility for consultations and prescription refills
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button aria-label="slide forward" type="button" class="absolute top-0 end-0 z-30 mr-4 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" id="next">
                                <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/30 dark:bg-gray-800/50 group-hover:bg-black/80 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                    <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                                    </svg>
                                    <span class="sr-only">Next</span>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Common Products Sold */}

            <section class="bg-slate-100">
                <div class="p-6 pt-10 md:pt-16 md:p-24">
                    <div class="pb-10 md:pb-16">
                        <h1 class="text-clientsServedColor font-contactUs font-bold text-5.5xl text-center lg:text-5xl"><span class="text-gray-700">Frequently</span> Bought Products</h1>
                    </div>
                    <div class="grid grid-cols-2 grid-rows-4 lg:grid-rows-2 gap-6 lg:grid-cols-4">
                        <div class="relative bg-white rounded-2xl">
                            <div class="w-full h-[210px] px-4 pt-4">
                                <img src="/img/Gallery/1.jpg" alt=""
                                    class="object-contain w-full h-full rounded-lg"/>
                            </div>
                            <div>
                                <div class="p-4">
                                    <div class="mb-3">
                                        <a href="">
                                            <h2 class="text-2xl font-semibold">
                                                Panadol Extra
                                            </h2>
                                        </a>
                                    </div>
                                </div>
                                <div class="flex items-center justify-end ">
                                    <a href="#"
                                        class="absolute bottom-0 right-0 px-3 py-4 text-sm text-gray-100 bg-mainBlue rounded-tl-2xl rounded-br-2xl hover:bg-darkerBlue hover:text-gray-100">
                                        Find out more</a>
                                </div>
                            </div>
                        </div>
                        <div class="relative bg-white rounded-2xl">
                            <div class="w-full h-[210px] px-4 pt-4 ">
                                <img src="/img/Gallery/2.jpg" alt=""
                                    class="object-contain w-full h-full rounded-lg"/>
                            </div>
                            <div>
                                <div class="p-4">
                                    <div class="mb-3">
                                        <a href="">
                                            <h2 class="text-2xl font-semibold">
                                                Paracetamol 500mg
                                            </h2>
                                        </a>
                                    </div>
                                </div>
                                <div class="flex items-center justify-end ">
                                    <a href="#"
                                        class="absolute bottom-0 right-0 px-3 py-4 text-sm text-gray-100 bg-mainBlue rounded-tl-2xl rounded-br-2xl hover:bg-darkerBlue hover:text-gray-100">
                                        Find out more</a>
                                </div>
                            </div>
                        </div>
                        <div class="relative bg-white rounded-2xl">
                            <div class="w-full h-[210px] px-4 pt-4 ">
                                <img src="/img/Gallery/3.jpg" alt=""
                                    class="object-contain w-full h-full rounded-lg"/>
                            </div>
                            <div>
                                <div class="p-4">
                                    <div class="mb-3">
                                        <a href="">
                                            <h2 class="text-2xl font-semibold">
                                                Diclofenac DHG 50mg
                                            </h2>
                                        </a>
                                    </div>
                                </div>
                                <div class="flex items-center justify-end ">
                                    <a href="#"
                                        class="absolute bottom-0 right-0 px-3 py-4 text-sm text-gray-100 bg-mainBlue rounded-tl-2xl rounded-br-2xl hover:bg-darkerBlue hover:text-gray-100">
                                        Find out more</a>
                                </div>
                            </div>
                        </div>
                        <div class="relative bg-white rounded-2xl">
                            <div class="w-full h-[210px] px-4 pt-4 ">
                                <img src="/img/Gallery/4.jpg" alt=""
                                    class="object-contain w-full h-full rounded-lg"/>
                            </div>
                            <div>
                                <div class="p-4">
                                    <div class="mb-3">
                                        <a href="">
                                            <h2 class="text-2xl font-semibold">
                                                Amoxycillin Capsules 250mg 
                                            </h2>
                                        </a>
                                    </div>
                                </div>
                                <div class="flex items-center justify-end ">
                                    <a href="#"
                                        class="absolute bottom-0 right-0 px-3 py-4 text-sm text-gray-100 bg-mainBlue rounded-tl-2xl rounded-br-2xl hover:bg-darkerBlue hover:text-gray-100">
                                        Find out more</a>
                                </div>
                            </div>
                        </div>
                        <div class="relative bg-white rounded-2xl">
                            <div class="w-full h-[210px] px-4 pt-4 ">
                                <img src="/img/Gallery/5.jpg" alt=""
                                    class="object-contain w-full h-full rounded-lg"/>
                            </div>
                            <div>
                                <div class="p-4">
                                    <div class="mb-3">
                                        <a href="">
                                            <h2 class="text-2xl font-semibold">
                                                Ampicillin Capsules 250 mg
                                            </h2>
                                        </a>
                                    </div>
                                </div>
                                <div class="flex items-center justify-end ">
                                    <a href="#"
                                        class="absolute bottom-0 right-0 px-3 py-4 text-sm text-gray-100 bg-mainBlue rounded-tl-2xl rounded-br-2xl hover:bg-darkerBlue hover:text-gray-100">
                                        Find out more</a>
                                </div>
                            </div>
                        </div>
                        <div class="relative bg-white rounded-2xl">
                            <div class="w-full h-[210px] px-4 pt-4 ">
                                <img src="/img/Gallery/6.jpg" alt=""
                                    class="object-contain w-full h-full rounded-lg"/>
                            </div>
                            <div>
                                <div class="p-4">
                                    <div class="mb-3">
                                        <a href="">
                                            <h2 class="text-2xl font-semibold">
                                                Omeprazole Capsules 20mg
                                            </h2>
                                        </a>
                                    </div>
                                </div>
                                <div class="flex items-center justify-end ">
                                    <a href="#"
                                        class="absolute bottom-0 right-0 px-3 py-4 text-sm text-gray-100 bg-mainBlue rounded-tl-2xl rounded-br-2xl hover:bg-darkerBlue hover:text-gray-100">
                                        Find out more</a>
                                </div>
                            </div>
                        </div>
                        <div class="relative bg-white rounded-2xl">
                            <div class="w-full h-[210px] px-4 pt-4 ">
                                <img src="/img/Gallery/7.jpg" alt=""
                                    class="object-contain w-full h-full rounded-lg"/>
                            </div>
                            <div>
                                <div class="p-4">
                                    <div class="mb-3">
                                        <a href="">
                                            <h2 class="text-2xl font-semibold">
                                                Ampiclox 500mg
                                            </h2>
                                        </a>
                                    </div>
                                </div>
                                <div class="flex items-center justify-end ">
                                    <a href="#"
                                        class="absolute bottom-0 right-0 px-3 py-4 text-sm text-gray-100 bg-mainBlue rounded-tl-2xl rounded-br-2xl hover:bg-darkerBlue hover:text-gray-100">
                                        Find out more</a>
                                </div>
                            </div>
                        </div>
                        <div class="relative bg-white rounded-2xl">
                            <div class="w-full h-[210px] px-4 pt-4 ">
                                <img src="/img/Gallery/8.jpg" alt=""
                                    class="object-contain w-full h-full rounded-lg"/>
                            </div>
                            <div>
                                <div class="p-4 pb-7">
                                    <div class="mb-3">
                                        <a href="">
                                            <h2 class="text-2xl font-semibold">
                                                Azithromycin Coated 500mg
                                            </h2>
                                        </a>
                                    </div>
                                </div>
                                <div class="flex items-center justify-end ">
                                    <a href="#"
                                        class="absolute bottom-0 right-0 px-3 py-4 text-sm text-gray-100 bg-mainBlue rounded-tl-2xl rounded-br-2xl hover:bg-darkerBlue hover:text-gray-100">
                                        Find out more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Us Section */}

            <section class="bg-slate-100 font-contactUs pt-12 pb-16 md:pt-0 md:pb-0">
                <div class="bg-gradient-to-bl from-cyan-600 to-darkerBlue rounded-3xl md:m-16 md:mt-0 mx-4">
                    <div class="p-4 lg:py-12 md:pt-6 md:pb-14 md:px-16 md:pr-24">
                        {/* Heading & Subheading */}
                        <div class="mx-auto md:w-1/2">
                            <h1 class="text-[60px] tracking-tight font-extrabold text-white text-center">Contact Us</h1>
                            <p class="pb-8 lg:pb-12 font-light text-center sm:text-lg text-zinc-200">Got a technical issue? Want to send feedback about a service? Need details about our services? Let us know.</p>
                        </div>
                        {/* Form Section */}
                        <div class="grid auto-rows-min gap-12 md:grid-rows-none md:grid-cols-3 md:gap-24">
                            <div class="md:col-span-2">
                                <form action="#" class="grid md:grid-cols-2 grid-rows-2 gap-5 bg-gray-100 p-8 rounded-3xl">
                                    <div>
                                        <label for="subject" class="block mb-2 text-sm font-medium text-gray-900">First Name</label>
                                        <input type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500" placeholder="George" required/>
                                    </div>
                                    <div>
                                        <label for="subject" class="block mb-2 text-sm font-medium text-gray-900">Last Name</label>
                                        <input type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500" placeholder="Russell" required/>
                                    </div>
                                    <div>
                                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                                        <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" placeholder="name@gmail.com" required/>
                                    </div>
                                    <div>
                                        <label for="phone-input" class="block mb-2 text-sm font-medium text-gray-900">Phone number:</label>
                                        <input type="text" id="phone-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" pattern="[0-9]{4} [0-9]{3}-[0-9]{3}" placeholder="1234 567-890" required/>
                                    </div>
                                    <div class="sm:col-span-2">
                                        <label for="message" class="block mb-2 text-sm font-medium text-gray-900">Your message</label>
                                        <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                                        <p class="text-sm mt-3 mb-3 md:mb-0">By submitting this form you agree to our <a href="#" class="text-blue-600 hover:underline">terms and conditions</a> and our <a href="#" class="text-blue-600 hover:underline">privacy policy</a> which explains how we may collect, use and disclose your personal information including to third parties.</p>
                                    </div>
                                    <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-700 sm:w-fit hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-primary-300">Send message</button>
                                </form>
                            </div>
                            <div class="grid grid-rows-3 gap-8 text-center mb-8 md:mb-0">
                                <div>
                                    <i class="fa-solid fa-envelope fa-xl text-blue-950 bg-gray-500 bg-opacity-50 p-5 py-7 rounded-lg m-3.5 mt-0"></i>
                                    <p class="text-white text-2xl md:text-lg font-extrabold">Email Us:</p>
                                    <p class="text-zinc-200 pt-2.5 px-3 md:px-0 md:pt-0">Email us for general queries, including marketing and partnership opportunities.</p>
                                </div>
                                <div>
                                    <i class="fa-solid fa-phone fa-xl text-blue-950 bg-gray-500 bg-opacity-50 p-5 py-7 rounded-lg m-3.5 mt-0"></i>
                                    <p class="text-white text-2xl md:text-lg font-extrabold">Call Us:</p>
                                    <p class="text-gray-200 pt-2.5 md:pt-0 px-3 md:px-0">Call us to speak to a member of our team. We are always happy to help.</p>
                                </div>
                                <div>
                                    <i class="fa-solid fa-location-dot fa-xl text-blue-950 bg-gray-500 bg-opacity-50 p-5 py-7 rounded-lg m-3.5 mt-0"></i>
                                    <p class="text-white text-2xl md:text-lg font-extrabold">Address: (Main Branch)</p>
                                    <div>
                                        <p class="text-gray-200 pt-2.5 md:pt-0">Mackay Rd, Kampala, Uganda</p>
                                        <p class="text-gray-200">Zip Code/Postal Code: 10102</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Footer Section */}
    
            <footer class="bg-mainBlue">
                <div class="mx-auto w-full max-w-screen-xl p-6 md:p-4 py-6 lg:py-8">
                    <div class="md:flex md:justify-between md:items-center">
                        <div class="mb-6 md:mb-0 w-80">
                            <a href="#">
                                <img src="/img/Pramukh Pharmcueticals Logo Transparent.png" class="h-20 w-64 me-3" alt="Pramukh Pharmaceuticals Logo" />
                            </a>
                            <p class="text-white font-semibold tracking-wide text-left text-sm mt-4 font-body">
                                Your Neighborhood Pharmacy, Dedicated to Providing Quality Healthcare Solutions. 
                                Trust us for a wide range of pharmaceutical products and personalized care.
                            </p>
                        </div>
                        <div class="grid grid-cols-2 gap-8 sm:gap-10 sm:grid-cols-4">
                            <div>
                                <h2 class="mb-6 text-base font-bold uppercase text-white sm:text-center font-body tracking-widest">Links</h2>
                                <ul class="text-lightGray font-medium sm:text-center">
                                    <li class="mb-3">
                                        <Link to="/" class="hover:underline">Home</Link>
                                    </li>
                                    <li class="mb-3">
                                        <Link to="/about" class="hover:underline">About Us</Link>
                                    </li>
                                    <li class="mb-3">
                                        <Link to="/services" class="hover:underline">Services</Link>
                                    </li>
                                    <li>
                                        <Link to="/branches" class="hover:underline">Branches</Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 class="mb-6 text-base font-bold text-white sm:text-center font-body tracking-widest">LEGAL</h2>
                                <ul class="text-lightGray font-medium sm:text-center">
                                    <li class="mb-3">
                                        <a href="#" class="hover:underline">Privacy Policy</a>
                                    </li>
                                    <li>
                                        <a href="#" class="hover:underline">Terms &amp; Conditions</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-span-2 bg-white rounded-2xl sm:ml-8 p-4 w-72 font-body">
                                <h1 class="font-body text-sm">
                                    Questions or assistance needed? Call us or reach out via Email. We're here for you!
                                </h1>
                                <div class="border-t border-darkerBlue mt-3.5"></div>
                                <div class="space-x-2 text-center text-darkerBlue my-2">
                                    <a href="tel:0756545315">
                                        <i class="fa-solid fa-phone fa-lg"></i>
                                    </a>
                                    <span class="text-xl">|</span>
                                    <a href="mailto:info@example.com">
                                        <i class="fa-solid fa-envelope fa-xl"></i>
                                    </a>
                                </div>
                                <p class="text-sm text-gray-600 text-center mb-2">Mon-Fri: 9 AM - 5 PM</p>
                                <h1 class="font-body text-xs text-center">
                                    Mackay Road, New Taxi Park, Kampala, Uganda
                                </h1>
                            </div>                
                        </div>
                    </div>
                    <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                    <div class="sm:flex sm:items-center sm:justify-between text-white">
                        <span class="font-medium tracking-wide text-sm sm:text-center">© 2023 <a href="#" class="hover:underline">Pramukh Pharmaceuticals™</a>. All Rights Reserved.
                        </span>
                        <div class="flex mt-4 sm:justify-center sm:items-center sm:mt-0">
                            <i class="fa-brands fa-whatsapp fa-xl hover:-translate-y-1 mx-4"></i>
                            <i class="fa-brands fa-instagram fa-xl hover:-translate-y-1 mx-4"></i>
                            <i class="fa-brands fa-facebook fa-xl hover:-translate-y-1 mx-4"></i>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Services;