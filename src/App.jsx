import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/navigation/Navigation";
import Home from "./components/home/Home";
import Courses from "./components/courses/Courses";
import Service from "./components/services/Service";
import Testimonials from "./components/testimonials/Testimonials";
import Footer from "./components/footer/Footer";
// import Achievement from './components/achievements/Achievement';
// import Footer from './components/footer/Footer';
// import GalleryHome from './components/gallery/GalleryHome';
// import SchoolGallery from './components/gallery/SchoolGallery';

const App = () => {
  return (
    <Router>
      {/* Entire layout with min-h-screen to fix spacing */}
      <div className="min-h-screen flex flex-col">
        <Navigation />

        {/* Main Content Area */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Service />}></Route>
            <Route path="/testimonials" element={<Testimonials/>}></Route>
            <Route path="/courses" element={<Courses/>}></Route>
          </Routes>
        </main>

        {/* Footer stays at the bottom */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
