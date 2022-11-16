import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import Login from './screens/Login/Login';
import Mainpage from './screens/Mainpage/Mainpage';
import Signup from './screens/Signup/Signup';
import Payment from './screens/Payment/Payment';
import Cart from './screens/Cart/Cart';
import Checkout from './screens/Checkout/Checkout';
import Admin from './screens/Admin/Admin';
function App() {
  return (
    <div>
      <Router>
          <Routes>
            <Route path="/" element={<Mainpage />} exact />
            <Route path="/api/signup" element={<Signup />} exact />
            <Route path="/api/login" element={<Login />} exact />
            <Route path="/api/pay" element={<Payment />} exact />
            <Route path="/api/cart" element={<Cart />} exact />
            <Route path="/api/checkout" element={<Checkout />} exact />
            <Route path="/api/admin" element={<Admin />} exact />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
