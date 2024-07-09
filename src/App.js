import './App.css';
import { Routes, Route } from "react-router-dom";
import { CustomNavbar } from './components/CustomNavbar';
import Team from './components/Team';
import Home from './components/Home';
import ReferencesPage from './components/Reference';
import Video from './components/Video';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className="App">
        <CustomNavbar/>
      </div>

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/about" element={<ReferencesPage />} />
        <Route path="/video" element={<Video />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
