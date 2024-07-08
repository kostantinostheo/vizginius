import './App.css';
import { Routes, Route } from "react-router-dom";
import { CustomNavbar } from './components/CustomNavbar';
import Team from './components/Team';
import Home from './components/Home';
import ReferencesPage from './components/Reference';

function App() {
  return (
    <>
      <div className="App">
        <CustomNavbar/>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/ref" element={<ReferencesPage />} />
      </Routes>

    </>
  );
}

export default App;
