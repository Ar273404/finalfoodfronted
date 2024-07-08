import './App.css';
import Navbar from './components/Navbar/Navbar';
import {Routes,Route, BrowserRouter} from 'react-router-dom'
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import LoginPage from './pages/SignLogin/LoginPage';
import SignupPage from './pages/SignLogin/SignUpPage';
import Payment from './components/Payment/Payment';
function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<PlaceOrder />} />
        <Route path="/pay" element={<Payment/>}/>
      </Routes>
    </div>
  );
}

export default App;
