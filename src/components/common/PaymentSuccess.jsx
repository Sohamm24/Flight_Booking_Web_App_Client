import React, { useState, useEffect } from 'react';
import { CheckCircle, CreditCard } from 'lucide-react';

const PaymentSuccess = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 relative overflow-hidden">
          <div className={`transition-all duration-500 transform ${animate ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="relative">
              {/* Animated background circles */}
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-green-100 rounded-full opacity-30 animate-pulse"></div>
              <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-emerald-100 rounded-full opacity-40 animate-pulse delay-300"></div>
              
              <div className="relative z-10">
                {/* Success Icon with animation */}
                <div className="relative mb-8">
                  <div className="w-24 h-24 mx-auto bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                    <CheckCircle className="w-12 h-12 text-white" />
                  </div>
                  <div className="absolute inset-0 w-24 h-24 mx-auto rounded-full bg-green-200 animate-ping opacity-20"></div>
                </div>

                {/* Content */}
                <h1 className="text-3xl font-bold text-gray-800 mb-4 animate-fade-in-up">
                  Payment Successful!
                </h1>
                <p className="text-gray-600 mb-2 text-lg">
                  Thank you for your purchase
                </p>
                <p className="text-gray-500 mb-8 text-sm">
                  Transaction ID: #TXN-2024-001234
                </p>

                {/* Payment details card */}
                <div className="bg-gray-50 rounded-2xl p-6 mb-8 border border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <CreditCard className="w-5 h-5 text-gray-400" />
                      <span className="text-gray-600 text-sm">Payment Method</span>
                    </div>
                    <span className="text-gray-800 font-medium">•••• 4242</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 text-sm">Amount Paid</span>
                    <span className="text-2xl font-bold text-green-600">$129.99</span>
                  </div>
                </div>

                {/* Action buttons */}
                <div className="space-y-4">
                  <button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-4 px-6 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 hover:from-green-600 hover:to-emerald-700">
                    Continue Shopping
                  </button>
                  <button className="w-full border-2 border-gray-200 text-gray-700 py-3 px-6 rounded-2xl font-medium hover:bg-gray-50 transition-all duration-200 flex items-center justify-center space-x-2">
                    <span>View Receipt</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out;
        }
      `}</style>
    </div>
  );
};

export default PaymentSuccess;