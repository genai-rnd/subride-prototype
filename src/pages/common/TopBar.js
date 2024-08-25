// src/pages/common/TopBar.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, IconButton, Typography } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';

function TopBar({ title, backButton }) {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        p: 2,
        borderBottom: '1px solid #eee',
      }}
    >
      {backButton && (
        <IconButton onClick={handleBack}>
          <ArrowBack />
        </IconButton>
      )}
      <Typography variant="h6">{title}</Typography>
      <div />
    </Box>
  );
}

export default TopBar;