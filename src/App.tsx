import React, { useState } from "react";
import MainValentinesPage from "./components/MainValentinesPage";
import Preview from "./components/Preview";
import SentCard from "./components/SentCard";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainValentinesPage />} />
        <Route path="/previewcards" element={<Preview />} />
        <Route path="/sentcard" element={<SentCard />} />
      </Routes>
    </Router>
  );
}

export default App;
