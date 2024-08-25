// src/components/main/RecommendCategory.js

import React from 'react';
import { Box, Chip } from '@mui/material';

function RecommendCategory() {
  return (
    <Box mt={2} display="flex" justifyContent="center">
      <Chip label="식료품" component="a" href="/recommend" clickable />
      <Chip label="생활용품" component="a" href="/recommend" clickable />
      <Chip label="뷰티" component="a" href="/recommend" clickable />
    </Box>
  );
}

export default RecommendCategory;