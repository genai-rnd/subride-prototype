// src/pages/main/MainPage.js  

import React from 'react';
import { useNavigate } from 'react-router-dom';  
import { Box } from '@mui/material';
import { Logout } from '@mui/icons-material';
import CategorySummary from '../../components/main/CategorySummary';
import RecommendCategory from '../../components/main/RecommendCategory';

function MainPage() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // TODO: 실제 로그아웃 처리  
    navigate('/');
  };

  return (  
    <Box>
      <Box display="flex" justifyContent="space-between" alignItems="center">  
        <img src="/mainlogo.png" alt="logo" width="120" />
        <Logout onClick={handleLogout} style={{ cursor: 'pointer' }} />
      </Box>
      <CategorySummary />
      <RecommendCategory />
    </Box>
  );
}

export default MainPage;