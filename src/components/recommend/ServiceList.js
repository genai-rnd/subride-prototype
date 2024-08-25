// src/components/recommend/ServiceList.js

import React from 'react';
import { Box, Typography } from '@mui/material';
import ServiceItem from './ServiceItem';

function ServiceList({ items }) {
  if (!items || items.length === 0) {
    return <Typography>해당 카테고리의 구독 서비스가 없습니다.</Typography>;
  }

  return (
    <Box>
      {items.map((item) => (
        <ServiceItem key={item.id} item={item} />
      ))}
    </Box>
  );
}

export default ServiceList;