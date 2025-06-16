import { useState, useRef, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authUser } from '../redux/Slices/authSlice';
import CustomButton from "./button";

const OtpInput = ({ onVerify }) => {
  const OTP_LENGTH = 6;
  const RESEND_TIME = 30; 

  const [otp, setOtp] = useState(Array(OTP_LENGTH).fill(""));
  const [setActiveInput] = useState(0);
  const [timer, setTimer] = useState(RESEND_TIME);
  const [status, setStatus] = useState("idle"); 

  const inputsRef = useRef([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    let interval;
    if (timer > 0) {
      interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
    }
    return () => clearInterval(interval);
  }, [timer]);

  // Focus next input
  const handleChange = (e, index) => {
    const value = e.target.value;
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);

    if (value && index < OTP_LENGTH - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
     if (e.key === "Enter") {
      handleVerify()
    }
  }

  // Verify OTP (mock)
  const handleVerify = () => {
    setStatus("verifying");
    setTimeout(() => {
      if (otp.join("") === "123456") {
        setStatus("success");
         try {
           dispatch(authUser()) 
           navigate('/payment');
         } catch (error) {
           console.error("Login failed:", error); 
         }
        onVerify && onVerify(true);
      } else {
        setStatus("failed");
        onVerify && onVerify(false);
      }
    }, 1200);
  };

  // Resend OTP
  const handleResend = () => {
    setOtp(Array(OTP_LENGTH).fill(""));
    setTimer(RESEND_TIME);
    setStatus("idle");
    setActiveInput(0);
    inputsRef.current[0]?.focus();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
    <div className="w-full max-w-md mx-auto bg-white p-6 rounded-xl shadow-lg text-center space-y-6">
      <h2 className="text-xl font-semibold text-gray-800">Enter OTP</h2>
      
      <div className="flex justify-center space-x-2">
        {otp.map((digit, i) => (
          <input
            key={i}
            type="text"
            inputMode="numeric"
            maxLength="1"
            value={digit}
            ref={(el) => (inputsRef.current[i] = el)}
            onChange={(e) => handleChange(e, i)}
            onKeyDown={(e) => {handleKeyDown(e,i)}}
            className="w-12 h-12 text-2xl text-center border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        ))}
      </div>

      {/* Timer & Resend */}
      <div className="text-sm text-gray-500">
        {timer > 0 ? (
          <>Resend OTP in <span className="font-medium">{timer}s</span></>
        ) : (
          <button
            onClick={handleResend}
            className="text-blue-600 font-medium hover:underline"
          >
            Resend OTP
          </button>
        )}
      </div>

       <div className="flex justify-center">
      <CustomButton
        onClick={handleVerify}
        text={status === "verifying" ? "Verifying..." : "Verify OTP"}
        disabled={status === "verifying"}
      />
      </div>

      {status === "success" && (
        <p className="text-green-600 font-medium">✅ OTP Verified Successfully</p>
      )}
      {status === "failed" && (
        <p className="text-red-600 font-medium">❌ Invalid OTP. Try again.</p>
      )}
    </div>
    </div>
  );
};

export default OtpInput;
