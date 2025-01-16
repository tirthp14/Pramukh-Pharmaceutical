import React from "react";
import TopSection from "../components/TopSection";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactUs from "../components/ContactUs";

function Branches() {
    
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
            <TopSection/>

            <Navbar/>
    
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
                                <img src={"/Pramukh-Pharmaceutical/img/Map/Uganda Map.svg".default} className="w-full h-full" alt=""/>
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
    
            <ContactUs/>
            
            {/* Footer Section */}
    
            <Footer/>
        </div>
    );
}

export default Branches;