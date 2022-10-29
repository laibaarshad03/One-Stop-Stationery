import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import Login from './screens/Login/Login';
import Signup from './screens/Signup/Signup';

function App() {
  return (
    <div>
      {/* <Login/> */}
      <Signup/>
      <Router>
          <Routes>
            {/* <Route path="/api/login" element={<Login />} exact /> */}
            <Route path="/api/signup" element={<Signup />} exact />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
