// src/components/common/Navigator.js

import React from 'react';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { Home, Store, Category, Subscriptions } from '@mui/icons-material';  
import { grey } from '@mui/material/colors';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

function Navigator() {
  return (
    <Box 
      sx={{
        position: 'fixed',  
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: grey[200],
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
      }}
    >
      <StyledLink to="/main">
        <Box sx={{ textAlign: 'center', pt: 1, pb: 1 }}>
          <Home />
          홈
        </Box>
      </StyledLink>
      <StyledLink to="/recommend">
        <Box sx={{ textAlign: 'center', pt: 1, pb: 1 }}>
          <Category />
          추천  
        </Box>
      </StyledLink>
      <Box sx={{ textAlign: 'center', pt: 1, pb: 1 }}>
        <Store />
        썹
      </Box>
      <StyledLink to="/mysubscribe">
        <Box sx={{ textAlign: 'center', pt: 1, pb: 1 }}>
          <Subscriptions />  
          현황
        </Box>
      </StyledLink>
    </Box>
  );
}

export default Navigator;