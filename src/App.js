import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from './Demo/pages/Home';
import About from './Demo/pages/About';
import Service from './Demo/pages/Service';
import Contact from './Demo/pages/Contact';
import { Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Navbar from './Demo/Menu/Navbar';
import Footer from './Demo/Footer/Footer';


function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route exact  path="/" Component={Home}/>
      <Route exact path="/about" Component={About}/>
      <Route exact path="/service" Component={Service}/>
      <Route exact path="/contact" Component={Contact}/>
      <Route
        path="*"
        element={<Navigate to="/" replace />}
    />
    </Routes>
    <Footer />
    </>
  );
}

export default App;
