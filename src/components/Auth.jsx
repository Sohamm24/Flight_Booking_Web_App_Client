import { useToast } from '../context/toastContext';
import  OtpInput  from '../components/Otp'
import { useNavigate,useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../redux/Slices/authSlice';
import { useState,useEffect } from 'react';

export default function Auth() {
  const { showSuccess,showError } = useToast()
  const [isVerified, setIsVerified] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

   const handleOtpVerification = (success) => {
    if (success){
      showSuccess('Verification Successful!', 'success')
      dispatch(loginSuccess())
      setIsVerified(true);
    }
    else showError('Enter the correct OTP!', 'fail')
  };

   useEffect(() => {
    if (isVerified) {
      const from = location.state?.from || '/'
      console.log(from)
      navigate(from, { replace: true });
    }
  }, [isVerified, navigate, location]);

  return (
    <>
    <OtpInput onVerify={handleOtpVerification}/>
    </>
  )
}
