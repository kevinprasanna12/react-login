import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Signup from './components/Signup.jsx';
import Login from './components/Login.jsx';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/react-login/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;