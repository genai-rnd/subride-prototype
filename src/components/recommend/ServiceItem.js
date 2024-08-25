// src/components/recommend/ServiceItem.js

import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';

const ServiceBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  border: '1px solid #eee',
  padding: 16,
  marginBottom: 8,
  cursor: 'pointer',
});

function ServiceItem({ item }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/recommend/${item.id}`);
  };

  return (
    <ServiceBox onClick={handleClick}>
      <img src={item.image} alt="service" width="50" height="50" />
      <Box ml={2}>
        <Typography variant="subtitle1">{item.name}</Typography>
        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>
        <Typography variant="body2">월 {item.price}원</Typography>
      </Box>
    </ServiceBox>
  );
}

export default ServiceItem;