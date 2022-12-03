import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import Login from './screens/Login/Login';
import Mainpage from './screens/Mainpage/Mainpage';
import Signup from './screens/Signup/Signup';
import Payment from './screens/Payment/Payment';
import Cart from './screens/Cart/Cart';
import Checkout from './screens/Checkout/Checkout';
import Admin from './screens/Admin/Admin';
import ViewItems from './screens/ViewItems/ViewItems';
import ItemDetails from './screens/ItemDetails/ItemDetails';
import CartScreen from './screens/CartScreen/CartScreen';

function App() {
  return (
    <div>
      <Router>
          <Routes>
            <Route path="/" element={<Mainpage />} exact />
            <Route path="/api/signup" element={<Signup />} exact />
            <Route path="/api/login" element={<Login />} exact />
            <Route path="/api/pay" element={<Payment />} exact />
            <Route path="/api/cart/:id" element={<CartScreen />}  />
            <Route path="/api/checkout" element={<Checkout />} exact />
            <Route path="/api/admin" element={<Admin />} exact />
            <Route path="/api/viewitems" element={<ViewItems />} exact />
            <Route path="/api/viewitems/:id" element={<ItemDetails />} />
            <Route path="/api/cart/:id" element={<CartScreen />}  />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
