import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import CustomButton from "../components/button";
import { Search, Plane, Calendar, Users, MapPin } from 'lucide-react';

const LandingPage = () => {
  const [form, setForm] = useState({
    from: "",
    to: "",
    date: "",
    passengers: 1,
    travelClass: "Economy",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="relative min-h-screen w-full font-sans overflow-hidden">
      {/* Background Image */}
      <img
        src="https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg?auto=compress&cs=tinysrgb&w=1920"
        alt="Airplane Background"
        className="absolute top-0 left-0 w-full h-full object-cover brightness-75 -z-10"
      />

      {/* Floating Logo */}
      <div className="absolute top-6 left-6 z-20">
        <h1 className="text-3xl font-bold text-white drop-shadow-lg tracking-wide">
          ✈️ FlyNow
        </h1>
      </div>


      {/* Centered and Wide Form Box */}
      <div className="relative z-10 flex flex-col justify-center items-center pt-20 px-4">
        {/* Floating elements for ambiance */}
        <div className="absolute -top-10 -left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-400/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        
        {/* Main ticket container */}
        <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden transform hover:scale-[1.02] transition-all duration-500">
          {/* Perforated edge effect */}
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-blue-900 rounded-full -ml-4 z-10"></div>
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-blue-900 rounded-full -mr-4 z-10"></div>
          
          {/* Dotted line separator */}
          <div className="absolute left-8 right-8 top-1/2 border-t-2 border-dashed border-gray-300 transform -translate-y-1/2"></div>
          
          {/* Header section */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full transform translate-x-16 -translate-y-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full transform -translate-x-12 translate-y-12"></div>
            
            <div className="relative z-10 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="bg-white/20 p-3 rounded-full">
                  <Plane className="w-6 h-6" />
                </div>
                <div>
                  <h1 className="text-2xl font-merriweather">Find the best flights to your destination</h1>
                </div>
              </div>
              <div className="text-right">
                <div className="text-3xl font-light">✈</div>
                <p className="text-xs text-blue-100 mt-1">BOARDING PASS</p>
              </div>
            </div>
          </div>

          {/* Top section - Departure & Arrival */}
          <div className="p-8 pb-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* From */}
              <div className="relative">
                <label className="flex items-center text-gray-600 mb-3 font-semibold text-sm uppercase tracking-wide">
                  <MapPin className="w-4 h-4 mr-2 text-blue-500" />
                  Departure
                </label>
                <div className="relative">
                  <input
                    name="from"
                    type="text"
                    placeholder="From City"
                    value={form.from}
                    onChange={handleChange}
                    className="w-full px-4 py-4 text-2xl font-bold border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 bg-gray-50 hover:bg-white"
                  />
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* To */}
              <div className="relative">
                <label className="flex items-center text-gray-600 mb-3 font-semibold text-sm uppercase tracking-wide">
                  <MapPin className="w-4 h-4 mr-2 text-indigo-500" />
                  Destination
                </label>
                <div className="relative">
                  <input
                    name="to"
                    type="text"
                    placeholder="To City"
                    value={form.to}
                    onChange={handleChange}
                    className="w-full px-4 py-4 text-2xl font-bold border-2 border-gray-200 rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all duration-300 bg-gray-50 hover:bg-white"
                  />
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                    <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Flight path visualization */}
            <div className="flex items-center justify-center my-6 relative">
              <div className="w-full h-px bg-gradient-to-r from-blue-500 via-gray-300 to-indigo-500"></div>
              <div className="absolute bg-white p-2 rounded-full border-2 border-gray-200">
                <Plane className="w-5 h-5 text-blue-600 transform rotate-90" />
              </div>
            </div>
          </div>

          {/* Bottom section - Details */}
          <div className="px-8 pb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Date */}
              <div>
                <label className="flex items-center text-gray-600 mb-2 font-semibold text-sm uppercase tracking-wide">
                  <Calendar className="w-4 h-4 mr-2 text-green-500" />
                  Departure Date
                </label>
                <input
                  name="date"
                  type="date"
                  value={form.date}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-green-500 focus:ring-4 focus:ring-green-100 transition-all duration-300 bg-gray-50 hover:bg-white font-medium"
                />
              </div>

              {/* Passengers */}
              <div>
                <label className="flex items-center text-gray-600 mb-2 font-semibold text-sm uppercase tracking-wide">
                  <Users className="w-4 h-4 mr-2 text-orange-500" />
                  Passengers
                </label>
                <div className="relative">
                  <input
                    name="passengers"
                    type="number"
                    min="1"
                    max="9"
                    value={form.passengers}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-100 transition-all duration-300 bg-gray-50 hover:bg-white font-medium text-center text-xl"
                  />
                </div>
              </div>

              {/* Class */}
              <div>
                <label className="flex items-center text-gray-600 mb-2 font-semibold text-sm uppercase tracking-wide">
                  <div className="w-4 h-4 mr-2 bg-purple-500 rounded"></div>
                  Travel Class
                </label>
                <select
                  name="travelClass"
                  value={form.travelClass}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all duration-300 bg-gray-50 hover:bg-white font-medium appearance-none cursor-pointer"
                >
                  <option value="Economy">Economy Class</option>
                  <option value="Business">Business Class</option>
                  <option value="First">First Class</option>
                </select>
              </div>
            </div>

            {/* Search button */}
            <div className="mt-8 flex justify-center">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                <Link to="/search"><CustomButton text={"search"} icon={FaSearch} /></Link>
                
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

            </div>
          </div>

          {/* Ticket stub */}
          <div className="bg-gray-50 border-t-2 border-dashed border-gray-300 p-4">
            <div className="flex justify-between items-center text-xs text-gray-500">
              <div className="flex items-center space-x-4">
                <div>
                  <span className="font-semibold">TICKET NO.</span>
                  <div className="font-mono mt-1">SK-{Math.random().toString(36).substr(2, 6).toUpperCase()}</div>
                </div>
                <div>
                  <span className="font-semibold">BOOKING REF.</span>
                  <div className="font-mono mt-1">{Math.random().toString(36).substr(2, 4).toUpperCase()}{Date.now().toString().slice(-2)}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-semibold">Valid for search only</div>
                <div className="text-gray-400 mt-1">Terms & conditions apply</div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating action hint */}
        <div className="text-center mt-6">
          <p className="text-white/70 text-sm">
            ✨ Enter your travel details and discover amazing flight deals
          </p>
        </div>
      </div>

      

  {/* Offers Banner — inserted here */}
  <div className="mt-2 mb-4 bg-yellow-100 border border-yellow-300 text-yellow-900 px-6 py-3 rounded-xl shadow-md flex items-center justify-center gap-4 w-full max-w-3xl">
    <span className="text-sm md:text-base font-semibold text-center">
      💳 Exclusive Offers on HDFC & Axis Bank Cards – Get Bonus Miles!
    </span>
    <img
      src="https://media.assettype.com/TNIE%2Fimport%2F2021%2F8%2F2%2Foriginal%2FHDFC.jpg?w=480&auto=format%2Ccompress&fit=max"
      alt="HDFC"
      className="h-6 md:h-8"
    />
    <img
      src="https://assets.upstox.com/content/assets/images/cms/202443/Axis%20Bank%20Ltd.webp"
      alt="Axis"
      className="h-6 md:h-8"
    />
  </div>
</div>

  );
}

export default LandingPage;
