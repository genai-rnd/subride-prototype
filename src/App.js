// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/login/LoginPage';
import MainPage from './pages/main/MainPage';
import RecommendListPage from './pages/recommend/RecommendListPage';
import ServiceDetailPage from './pages/recommend/ServiceDetailPage';  
import MySubscribePage from './pages/mysubscribe/MySubscribePage';
import Navigator from './components/common/Navigator';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/main" element={<><MainPage /><Navigator /></>} />
        <Route path="/recommend" element={<><RecommendListPage /><Navigator /></>} />
        <Route path="/recommend/:id" element={<><ServiceDetailPage /><Navigator /></>} />
        <Route path="/mysubscribe" element={<><MySubscribePage /><Navigator /></>} />  
      </Routes>
    </Router>
  );
}

export default App;