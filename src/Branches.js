import React from "react";
import { Link } from "react-router-dom";

function Branches() {

    document.addEventListener('DOMContentLoaded', function () {
        const btn = document.getElementById('menu-btn');
        const nav = document.getElementById('menu');
      
        btn.addEventListener('click', () => {
          btn.classList.toggle('open');
          nav.classList.toggle('flex');
          nav.classList.toggle('hidden');
        });
      });
    
    document.addEventListener("DOMContentLoaded", function () {
        var tooltip = document.getElementById("tooltip");
        var containerDiv = document.querySelector('.div-tooltip');
    
        if (containerDiv) {
            var locationDots = containerDiv.querySelectorAll('.location-dot');
    
            locationDots.forEach(function (locationDot) {
                locationDot.addEventListener("mouseover", function (event) {
                    
                    var locationName = locationDot.getAttribute("data-location");
                    var locationEmail = locationDot.getAttribute("data-email");
                    var locationHours = locationDot.getAttribute("data-hours");
                    var locationAddress = locationDot.getAttribute("data-address");
                    var locationPhone = locationDot.getAttribute("data-phone");
                    var locationMap = locationDot.getAttribute("data-map");
    
                    tooltip.style.opacity = 0.9;
                    tooltip.innerHTML = 
                    '<div className="p-3">' +
                        '<p className="pb-4 text-2xl text-center">' + locationName + '</p>' +
                        '<h1 className="text-base">Email: ' + '<span className="italic underline">' + locationEmail + '</span>' + '</h1>' +
                        '<h2 className="mt-2 text-base">Hours: ' + locationHours + '</h2>' +
                        '<p className="mt-2 text-base">Address: ' + locationAddress + '</p>' +
                        '<p className="mt-2 text-base">Phone: ' + locationPhone + '</p>' +
                        '<div className="flex items-center justify-center mt-6">' +
                            locationMap +
                        '</div>' +
                    '</div>'
    
                    tooltip.style.left = event.pageX + 20 + "px";
                    tooltip.style.top = event.pageY - 15 + "px";
                });
    
                locationDot.addEventListener("mouseout", function () {
                    tooltip.style.opacity = 0;
                });
            });
        }
    });

    return (
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
                        <div id="menu" className="absolute flex-col items-center hidden self-end mt-10 space-y-6 font-bold sm:w-auto sm:self-center left-6 right-6 drop-shadow-md">
                            <ul className="w-full font-medium flex flex-col p-4 border border-gray-200 rounded-lg bg-gray-100 rtl:space-x-reverse">
                                <li>
                                <a href="index.html" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100">Home</a>
                                </li>
                                <li>
                                <a href="About Us.html" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100">About Us</a>
                                </li>
                                <li>
                                <a href="Services.html" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100">Services</a>
                                </li>
                                <li>
                                <a href="Branches.html" className="block py-2 px-3 text-white bg-blue-700 rounded" aria-current="page">Branches</a>
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
    
            {/* Our Locations Section */}
            <section className="bg-stone-100 flex flex-col-reverse">
                <div id="tooltip" className="font-contactUs tracking-wider font-semibold md:absolute flex items-center justify-center w-auto h-auto m-5 md:m-0 p-3 md:p-5 text-sm bg-mainBlue shadow-md rounded-2xl pointer-events-none text-white md:opacity-0 z-50"></div>
                <section className="pb-7 md:pb-24">
                    <div className="mx-auto p-6 pt-2 md:pt-6 md:w-[70%]">
                        <h1 className="text-4.5xl md:text-[60px] tracking-tight font-extrabold text-mainBlue text-center py-7">We are Located...</h1>
                        <p className="lg:pb-6 font-light text-center sm:text-xl text-zinc-800">Got a prescription to fill? Need health advice? Or want to explore our range of healthcare products? Visit any of our six branches conveniently located across the city. Our dedicated team is ready to assist you at every location. Find the nearest pharmacy and experience top-notch service.</p>
                    </div>
                    <div className="flex justify-center items-center mt-6">
                        <div className="p-4 md:p-16 border-4 rounded-3xl w-[92%] h-[92%] md:w-[55%] md:h-[55%]">
                            <div className="div-tooltip w-full h-full relative">
                                <h1 className="hidden md:flex text-xs italic">please hover to reveal location details*</h1>
                                <h1 className="md:hidden text-xs italic">please press to reveal location details*</h1>
                                <img src={require("./img/Map/Uganda Map.svg").default} className="w-full h-full" alt=""/>
                                <i id="locationDot1" data-location="Kampala Branch" data-email="pramukh.kampala@email.com" data-hours="9:00 AM - 5:00 PM" data-address="Mackay Road, Kampala, Uganda" data-phone="0756-545-315" data-map='<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7583002186293!2d32.567482779678095!3d0.3142751632333578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbd5f8de4604d%3A0x5abe3ac246ef6865!2sPramukh%20Pharmaceuticals%20Ltd!5e0!3m2!1sen!2sca!4v1703385391307!5m2!1sen!2sca" className="rounded-2xl lg:w-88 lg:h-[300px]" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>' className="location-dot fa-solid fa-location-dot fa-xl text-clientsServedColor hover:text-mainBlue absolute left-[51%] bottom-[31.5%] w-[13px] h-[13px]"></i>
                                <i id="locationDot2" data-location="Mityana Branch" data-email="pramukh.mityana@email.com" data-hours="9:00 AM - 5:00 PM" data-address="Binyonyi Road, Mityana, Uganda" data-phone="0786-006-255" data-map='<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6709.880349118727!2d32.036534977215204!3d0.4048361830045624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177d19b1f93ca6a7%3A0xeba1b5826cac9123!2sPramukh%20pharma!5e0!3m2!1sen!2sca!4v1703385265633!5m2!1sen!2sca" className="rounded-2xl lg:w-88 lg:h-[300px]" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>' className="location-dot fa-solid fa-location-dot fa-xl text-clientsServedColor hover:text-mainBlue absolute left-[41.8%] bottom-[33.15%] w-[13px] h-[13px]"></i>
                                <i id="locationDot3" data-location="Luweero Branch" data-email="pramukh.luweero@email.com" data-hours="9:00 AM - 5:00 PM" data-address="Luweero, Uganda" data-phone="0756-545-315" data-map='<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.758296016713!2d32.569766075097434!3d0.31428616402881016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbc82c3208469%3A0x24799c94d3befe0!2sSupreme%20Pharma%20Ltd!5e0!3m2!1sen!2sca!4v1703385365826!5m2!1sen!2sca" className="rounded-2xl lg:w-88 lg:h-[300px]" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>' className="location-dot fa-solid fa-location-dot fa-xl text-clientsServedColor hover:text-mainBlue absolute left-[49.6%] bottom-[40.65%] w-[13px] h-[13px]"></i>
                                <i id="locationDot4" data-location="Kagadi Branch" data-email="pramukh.kagadi@email.com" data-hours="9:00 AM - 5:00 PM" data-address="Kagadi, Uganda" data-phone="0757-897-897" data-map='<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.2843250713163!2d30.807037410117648!3d0.9374208739600868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x176383060f02e69d%3A0x618b28cfbdacc9ca!2sPramukh%20pharma%20ltd!5e0!3m2!1sen!2sca!4v1703385287797!5m2!1sen!2sca" className="rounded-2xl lg:w-88 lg:h-[300px]" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>' className="location-dot fa-solid fa-location-dot fa-xl text-clientsServedColor hover:text-mainBlue absolute left-[20.2%] bottom-[42.15%] w-[13px] h-[13px]"></i>
                                <i id="locationDot5" data-location="Kigumba Branch" data-email="pramukh.kigumba@email.com" data-hours="9:00 AM - 5:00 PM" data-address="Kigumba, Uganda" data-phone="0756-545-315" data-map='<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.758296016713!2d32.569766075097434!3d0.31428616402881016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbc82c3208469%3A0x24799c94d3befe0!2sSupreme%20Pharma%20Ltd!5e0!3m2!1sen!2sca!4v1703385365826!5m2!1sen!2sca" className="rounded-2xl lg:w-88 lg:h-[300px]" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>' className="location-dot fa-solid fa-location-dot fa-xl text-clientsServedColor hover:text-mainBlue absolute left-[40.85%] bottom-[57.5%] w-[13px] h-[13px]"></i>
                                <i id="locationDot6" data-location="Adjumani Branch" data-email="pramukh.adjumani@email.com" data-hours="9:00 AM - 5:00 PM" data-address="Adjumani, Uganda" data-phone="0757-897-897" data-map='<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.6763293362033!2d31.058022475096735!3d0.48338456374785627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1762fd64aab28d5b%3A0x375fc6b6b793e79d!2sPramukh%20pharma%20ltd%20kyegewa!5e0!3m2!1sen!2sca!4v1703385341357!5m2!1sen!2sca" className="rounded-2xl lg:w-88 lg:h-[300px]" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>' className="location-dot fa-solid fa-location-dot fa-xl text-clientsServedColor hover:text-mainBlue absolute left-[37.1%] bottom-[84.8%] w-[13px] h-[13px]"></i>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
    
            {/* Contact Us Section */}
    
            <section className="bg-slate-100 font-contactUs pt-7 pb-16 md:pt-0 md:pb-0">
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

export default Branches;