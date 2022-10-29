import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import Login from './screens/Login/Login';
function App() {
  return (
    <div>
      <Login/>
      <Router>
          <Routes>
            <Route path="/api/login" element={<Login />} exact />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
