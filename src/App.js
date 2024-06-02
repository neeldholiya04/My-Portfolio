import './App.css';
import Navbar from './components/Navbar';
import {Route,BrowserRouter as Router, Routes} from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectPage';
import ScrollBar from './components/ScrollBar';
import ResumePage from './pages/ResumePage';
import Footer from "./components/Footer";



function App() {
  return (
    

    <div className="App">
      <Router>
        <Navbar/>
        <ScrollBar/>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/projects' element={<ProjectsPage />} />
          <Route path='/resume' element={<ResumePage />} />
        </Routes>
        <Footer/>
      </Router>
      
    </div>
    
  );
}

export default App;
