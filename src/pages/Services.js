import React from "react";
import TopSection from "../components/TopSection";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactUs from "../components/ContactUs";
import services from "../data/services.json";
import products from "../data/products.json";

function Services() {
    
    window.addEventListener('load', function () {
        let nextButton = document.getElementById("next");
        let prevButton = document.getElementById("prev");
        let slider = document.getElementById("slider");
    
        if (!nextButton || !prevButton || !slider) {
            console.error("Required elements not found: next, prev, or slider.");
            return;
        }
    
        let defaultTransform = 0;
        const slideAmount = 180;  // Change this value if needed for proper sliding
    
        function goNext() {
            defaultTransform -= slideAmount;
            if (Math.abs(defaultTransform) >= slider.scrollWidth - slider.clientWidth) {
                defaultTransform = 0;
            }
            slider.style.transform = `translateX(${defaultTransform}px)`;
        }
    
        function goPrev() {
            if (defaultTransform === 0) {
                defaultTransform = -(slider.scrollWidth - slider.clientWidth);
            } else {
                defaultTransform += slideAmount;
            }
            slider.style.transform = `translateX(${defaultTransform}px)`;
        }
    
        nextButton.addEventListener("click", goNext);
        prevButton.addEventListener("click", goPrev);
    });
    console.log(services); // Check the structure and data of services


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
                                        src="/Pramukh-Pharmaceutical/img/Slideshow/Image-1.jpg" alt=""/>
                                    <img className="block object-cover w-full h-32 mx-auto mb-8 rounded-md sm:h-64"
                                        src="/Pramukh-Pharmaceutical/img/Slideshow/Image-2.jpg" alt=""/>
                                </div>
                                <div className="mt-12">
                                    <img className="block object-cover w-full h-32 mx-auto mb-8 rounded-md sm:h-64"
                                        src="/Pramukh-Pharmaceutical/img/Slideshow/Image-3.jpg" alt=""/>
                                    <img className="block object-cover w-full h-32 mx-auto mb-8 rounded-md sm:h-64"
                                        src="/Pramukh-Pharmaceutical/img/Slideshow/Image-4.jpg" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Services Section */}

            <section>
                <div className="bg-bgCL2 bg-cover">
                    <div className="pt-5 md:pt-10">
                    <h1 className="text-clientsServedColor font-bold text-5.5xl text-center lg:text-7xl">
                        Our Core Services
                    </h1>
                    </div>
                    <div className="flex items-center justify-center w-full h-full py-14 px-6 sm:py-20 md:px-16">
                    <div className="w-full relative flex items-center justify-center">
                        <button aria-label="slide backward" type="button" className="absolute top-0 start-0 z-30 ml-4 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" id="prev">
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/30 dark:bg-gray-800/50 group-hover:bg-black/80 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10" aria-hidden="true">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
                            </svg>
                            <span className="sr-only">Previous</span>
                        </span>
                        </button>
                        <div className="w-full h-5/6 mx-auto overflow-x-hidden overflow-y-hidden">
                        <div
                            id="slider"
                            className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700"
                        >
                            {services.map((service, index) => (
                            <div
                                key={index}
                                className="flex flex-shrink-0 relative w-full sm:w-auto"
                            >
                                <div className="w-[296px] h-[430px]"></div>
                                <div className="bg-mainBlue bg-opacity-30 absolute w-full h-full p-6">
                                <div className="h-full p-6 text-left transition duration-200 rounded-md shadow bg-gray-50">
                                    <div
                                    className={`inline-flex items-center justify-center w-16 h-16 mx-auto mb-6 ${service.iconColor} rounded-lg`}
                                    >
                                    <i className={`${service.iconClass} fa-xl`}></i>
                                    </div>
                                    <h2 className="mb-4 text-xl font-bold leading-tight md:text-2xl">
                                    {service.title}
                                    </h2>
                                    <p className="font-medium text-gray-600">
                                    {service.description}
                                    </p>
                                </div>
                                </div>
                            </div>
                            ))}
                        </div>
                        </div>
                        <button
                        aria-label="slide forward"
                        type="button"
                        className="absolute top-0 end-0 z-30 mr-4 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                        id="next"
                        >
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/30 dark:bg-gray-800/50 group-hover:bg-black/80 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg
                            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 6 10"
                            aria-hidden="true"
                            >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 9l4-4-4-4"
                            />
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
                    <h1 className="text-clientsServedColor font-contactUs font-bold text-5.5xl text-center lg:text-5xl">
                        <span className="text-gray-700">Frequently</span> Bought Products
                    </h1>
                    </div>
                    <div className="grid grid-cols-2 grid-rows-4 lg:grid-rows-2 gap-6 lg:grid-cols-4">
                    {products.map((product, index) => (
                        <div key={index} className="relative bg-white rounded-2xl">
                        <div className="w-full h-[210px] px-4 pt-4">
                            <img
                            src={product.image}
                            alt={product.name}
                            className="object-contain w-full h-full rounded-lg"
                            />
                        </div>
                        <div>
                            <div className="p-4">
                            <div className="mb-3">
                                <a href={product.url} target="_blank" rel="noopener noreferrer">
                                <h2 className="text-2xl font-semibold">{product.name}</h2>
                                </a>
                            </div>
                            </div>
                            <div className="flex items-center justify-end ">
                            <a
                                href={product.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="absolute bottom-0 right-0 px-3 py-4 text-sm font-semibold text-gray-100 bg-mainBlue rounded-tl-2xl rounded-br-2xl hover:bg-darkerBlue hover:text-gray-100"
                            >
                                Find out more
                            </a>
                            </div>
                        </div>
                        </div>
                    ))}
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