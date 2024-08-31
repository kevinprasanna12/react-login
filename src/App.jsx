import {Routes, Route,useLocation} from "react-router-dom";
import './App.css';
import Signup from './components/Signup.jsx';
import Login from './components/Login.jsx';
import { AnimatePresence } from "framer-motion";

function App() {

  const loc = useLocation();

  return (
    <>
    <AnimatePresence mode="wait">
      <Routes location={loc} key={loc.pathname}>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
      </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;