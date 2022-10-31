import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import Login from './screens/Login/Login';
import Mainpage from './screens/Mainpage/Mainpage';
import Signup from './screens/Signup/Signup';

function App() {
  return (
    <div>
      <Router>
          <Routes>
            <Route path="/" element={<Login />} exact />
            <Route path="/api/signup" element={<Signup />} exact />
            <Route path="/api/mainpg" element={<Mainpage />} exact />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
