import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div>
            <footer className="bg-mainBlue">
                <div className="mx-auto w-full max-w-screen-xl p-6 md:p-4 py-6 lg:py-8">
                    <div className="md:flex md:justify-between md:items-center">
                        <div className="mb-6 md:mb-0 w-80">
                            <a href="#">
                                <img src="/Pramukh-Pharmaceutical/img/Pramukh Pharmcueticals Logo Transparent.png" className="h-20 w-64 me-3" alt="Pramukh Pharmaceuticals Logo" />
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
    )
};

export default Footer;