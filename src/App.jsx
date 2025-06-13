//Pages
import LandingPage from "./pages/LandingPage"
import SearchPage from "./pages/SearchPage";
import CheckoutPage from "./pages/CheckoutPage";
import PaymentPage from "./pages/PaymentPage";
//Components

import { Routes, Route } from 'react-router-dom';

const App = () => {
  return(
   <Routes>
    <Route path="/" element={<LandingPage/>}/>
    <Route path="/search" element={<SearchPage/>}/>
    <Route path="/checkout" element={<CheckoutPage/>}/>
    <Route path="/payment" element={<PaymentPage/>}/>
   </Routes> 
  )
}

export default App