import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 shadow-inner mt-12">
      <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div>
            <div className="text-3xl text-black" style={{ fontFamily: "Lobster, cursive" }}>
             Tripzy
            </div>
          <p className="mt-2 text-sm text-gray-500">
            Book your flights seamlessly and securely with our trusted platform.
          </p>
        </div>

        <div className="flex flex-col space-y-2">
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <a href="#" className="hover:text-blue-600">Home</a>
          <a href="#" className="hover:text-blue-600">Search Flights</a>
          <a href="#" className="hover:text-blue-600">Offers</a>
          <a href="#" className="hover:text-blue-600">Contact</a>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-4 text-xl">
            <a href="#"><FaFacebook className="hover:text-blue-600" /></a>
            <a href="#"><FaTwitter className="hover:text-blue-400" /></a>
            <a href="#"><FaInstagram className="hover:text-pink-500" /></a>
          </div>
        </div>
      </div>

      <div className="border-t text-center text-sm py-4 text-gray-500">
        © {new Date().getFullYear()} AirlineBook. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
