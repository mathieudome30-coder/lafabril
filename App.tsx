
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Studio from './pages/Studio';
import MediaRegie from './pages/MediaRegie';
import Academy from './pages/Academy';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/studio" element={<Studio />} />
        <Route path="/media-regie" element={<MediaRegie />} />
        <Route path="/academy" element={<Academy />} />
      </Routes>
    </Router>
  );
};

export default App;
