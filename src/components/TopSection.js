const TopSection = () => {
    return (
        <div>
            <div className="bg-mainBlue lg:flex items-center justify-between p-6 px-8 text-white hidden">
                {/* Phone Number, Location & Operational Hours  */}
                <div className="flex space-x-8 items-center">
                    <div className="flex items-center space-x-3">
                        <i className="fa-solid fa-phone fa-beat"></i>
                        <a href="tel:0756545315">Phone: <strong>0756545315</strong></a>
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
        </div>
    )
};

export default TopSection;