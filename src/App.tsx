import MainValentinesPage from "./components/MainValentinesPage";
import Preview from "./components/Preview";
import LandingPage from "./components/LandingPage";
import SentCard from "./components/SentCard";
import "./App.css";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/create" element={<MainValentinesPage />} />
        <Route path="/previewcards" element={<Preview />} />
        <Route path="/sentcard" element={<SentCard />} />
      </Routes>
    </Router>
  );
}

export default App;
