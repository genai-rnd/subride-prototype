// src/components/main/CategorySummary.js

import React from 'react';
import { Box, Typography } from '@mui/material';

function CategorySummary() {
  return (
    <Box mt={4}>
      <Typography variant="body2" color="text.secondary">
        2023년 5월 기준
      </Typography>
      <Box display="flex" justifyContent="center">
        <img src="/bunnyKing.png" alt="categoy" width="70%" />
      </Box>
    </Box>
  );
}

export default CategorySummary;