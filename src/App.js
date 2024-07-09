import './App.css';
import {Routes,Route, BrowserRouter} from 'react-router-dom'
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart.jsx';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import Payment from './components/Payment/Payment';
import { ToastContainer, toast } from "react-toastify";
import ProfilePage from './pages/Profile/ProfilePage.jsx';
import "react-toastify/dist/ReactToastify.css";
import MainContact from './pages/Contact/MainContact.jsx';
import Login from './auth/Component/Login.jsx';
import Signup from './auth/Component/Signup.jsx';
import PayDone from './components/Payment/PayDone.jsx';
function App() {
  return (
    <div className="app">
        <ToastContainer />
        {/* <Cart/> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/pay" element={<Payment />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/contact-us" element={<MainContact />} />
          <Route path="/paydone" element={<PayDone />} />
        </Routes>
    </div>
  );
}

export default App;
