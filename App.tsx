import React from 'react';
import Header from './components/Navbar';
import LandingPage from './pages/LandingPage';
import ProjectCompletionPage from './pages/ProjectCompletionPage';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom'; 
import CourseListPage from './pages/CourseListPage';
import InternshipsSection from './pages/InternshipsSection';
import ProjectRegistrationPage from './pages/ProjectRegistrationPage';

const App: React.FC = () => {
  return (
    <div className="bg-white font-sans text-slate-800 flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Projects" element={<ProjectRegistrationPage />} />
          <Route path="/Courses" element={<CourseListPage />} />
          <Route path="/Internships" element={<InternshipsSection />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;