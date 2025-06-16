import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import CustomButton from "../components/button";
import Navbar from '../components/navbar';
import { MapPin, Calendar, Clock, User, CreditCard, PlaneTakeoff, PlaneLanding } from 'lucide-react';

const CheckoutPage = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

   const handleProceed = () => {
      navigate('/payment', { state: { from: location.pathname }}); 
      console.log({ state: { from: location.pathname }})
    }
  
   const [journeyDetails, setJourneyDetails] = useState({
    from: "Delhi",
    to: "Mumbai",
    date: "2025-06-30",
    time: "08:30 AM",
  });

  const [travellerDetails, setTravellerDetails] = useState({
    name: "",
    age: "",
    gender: "",
    seatClass: "Economy",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTravellerDetails({ ...travellerDetails, [name]: value });
  };

  return(
    <>
      <Navbar/>
      <div className="absolute top-18 left-0 w-full h-[40vh]  bg-gradient-to-b from-gray-100 via-blue-200 to-orange-300 z-0 " />  
       <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-4">
      <div className="relative max-w-3xl mx-auto">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 rounded-3xl opacity-50 blur-3xl -z-10" />
        
        <div className="relative bg-white/80 backdrop-blur-sm border border-white/20 rounded-3xl shadow-2xl overflow-hidden">
          {/* Header with gradient */}
          <div className="bg-slate-800 p-6 text-white">
            <div className="flex items-center gap-3 justify-center">
              <CreditCard className="w-6 h-6" />
              <h2 className="text-2xl" style={{ fontFamily: "Lobster, cursive" }}>Complete Your Booking</h2>
            </div>
          </div>

          <div className="p-8 space-y-8">
            {/* Journey Details Card */}
            <div className="bg-gradient-to-r from-blue-200 to-purple-200 rounded-2xl p-6 border border-blue-100">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-blue-600" />
                Journey Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-sm">
                    <PlaneTakeoff/>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wide">From</p>
                      <p className="font-semibold text-gray-800">{journeyDetails.from}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-sm">
                    <Calendar className="w-4 h-4 text-blue-600" />
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wide">Date</p>
                      <p className="font-semibold text-gray-800">{journeyDetails.date}</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-sm">
                    <PlaneLanding/>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wide">To</p>
                      <p className="font-semibold text-gray-800">{journeyDetails.to}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-sm">
                    <Clock className="w-4 h-4 text-purple-600" />
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wide">Time</p>
                      <p className="font-semibold text-gray-800">{journeyDetails.time}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Traveller Details */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                <User className="w-5 h-5 text-purple-600" />
                Traveller Information
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Full Name</label>
                  <input
                    name="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={travellerDetails.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/50"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Age</label>
                  <input
                    name="age"
                    type="number"
                    placeholder="Enter your age"
                    value={travellerDetails.age}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/50"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Gender</label>
                  <select
                    name="gender"
                    value={travellerDetails.gender}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/50"
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Seat Class</label>
                  <select
                    name="seatClass"
                    value={travellerDetails.seatClass}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/50"
                  >
                    <option value="Economy">Economy</option>
                    <option value="Premium Economy">Premium Economy</option>
                    <option value="Business">Business</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Booking Summary */}
            <div className="bg-gradient-to-r from-gray-50 to-blue-50 border border-gray-200 rounded-2xl p-6 shadow-inner">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Booking Summary</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Passenger:</span>
                    <span className="font-medium">{travellerDetails.name || "Not specified"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Age:</span>
                    <span className="font-medium">{travellerDetails.age || "Not specified"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Class:</span>
                    <span className="font-medium px-2 py-1 bg-blue-100 text-blue-800 rounded-lg text-sm">
                      {travellerDetails.seatClass}
                    </span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Route:</span>
                    <span className="font-medium">{journeyDetails.from} → {journeyDetails.to}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Date:</span>
                    <span className="font-medium">{journeyDetails.date}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Departure:</span>
                    <span className="font-medium">{journeyDetails.time}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Button */}
            <div className="flex justify-center pt-4">   
              <CustomButton 
                onClick={handleProceed} 
                text="Proceed"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default CheckoutPage
