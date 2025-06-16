//react imports
import { useSelector } from "react-redux";
import { Navigate } from 'react-router-dom';

//Pages
import LandingPage from "./pages/LandingPage"
import SearchPage from "./pages/SearchPage";
import CheckoutPage from "./pages/CheckoutPage";
import PaymentPage from "./pages/PaymentPage";

//Components
import Auth from "./components/Auth";

import { Routes, Route,useLocation } from 'react-router-dom';
import Loader  from "../src/components/common/loader";

const App = () => {

const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  console.log(isAuthenticated)
  if (!isAuthenticated) {
    return <Navigate to="/auth" replace state={{ from: location.pathname }} />;
  }

  return children;
};

  return(
   <Routes>
    <Route path="/" element={<LandingPage/>}/>
    <Route path="/search" element={<SearchPage/>}/>
    <Route path="/checkout" element={<CheckoutPage/>}/>
    <Route path="/auth" element={<Auth/>}/>

    <Route
          path="/payment"
          element={
            <ProtectedRoute>
              <PaymentPage/>
            </ProtectedRoute>
          }
    />

   </Routes>
  )
}

export default App