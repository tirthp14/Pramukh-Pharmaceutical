import React from "react";
import { Link } from "react-router-dom";
import TopSection from "../components/TopSection";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactUs from "../components/ContactUs";

function Services() {
    
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
            <TopSection/>

            <Navbar/>

            {/* Hero Section */}

            <section className="relative overflow-hidden">
                <div className="mt-2 md:mt-0">
                    <div className="flex flex-wrap items-center mx-auto justify-center">
                        <div className="w-full px-4 lg:w-[46%]">
                            <div className=" lg:max-w-2xl">
                                <h1 className="mb-6 md:mb-12 text-4.5xl font-bold lg:text-7.1xl text-mainBlue text-center md:text-left">
                                    <span>Wellness Products</span>
                                    <span className="text-mainGreen"> Tailored </span>
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
                                        src={require("../img/Slideshow/Image-1.jpg")} alt=""/>
                                    <img className="block object-cover w-full h-32 mx-auto mb-8 rounded-md sm:h-64"
                                        src={require("../img/Slideshow/Image-2.jpg")} alt=""/>
                                </div>
                                <div className="mt-12">
                                    <img className="block object-cover w-full h-32 mx-auto mb-8 rounded-md sm:h-64"
                                        src={require("../img/Slideshow/Image-3.jpg")} alt=""/>
                                    <img className="block object-cover w-full h-32 mx-auto mb-8 rounded-md sm:h-64"
                                        src={require("../img/Slideshow/Image-4.jpg")} alt=""/>
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
                                <img src={require("../img/Gallery/1.jpg")} alt=""
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
                                <img src={require("../img/Gallery/2.jpg")} alt=""
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
                                <img src={require("../img/Gallery/3.jpg")} alt=""
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
                                <img src={require("../img/Gallery/4.jpg")} alt=""
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
                                <img src={require("../img/Gallery/5.jpg")} alt=""
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
                                <img src={require("../img/Gallery/6.jpg")} alt=""
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
                                <img src={require("../img/Gallery/7.jpg")} alt=""
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
                                <img src={require("../img/Gallery/8.jpg")} alt=""
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

            <ContactUs/>
            
            {/* Footer Section */}
    
            <Footer/>
        </div>
    );
}

export default Services;