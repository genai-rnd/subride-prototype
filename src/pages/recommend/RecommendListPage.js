// src/pages/recommend/RecommendListPage.js

import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import TopBar from '../common/TopBar';
import CategoryList from '../../components/recommend/CategoryList';
import ServiceList from '../../components/recommend/ServiceList';

function RecommendListPage() {
  const [category, setCategory] = useState('food');

  const categories = [
    { label: '식료품', value: 'food' },
    { label: '생활용품', value: 'daily' },
    { label: '뷰티', value: 'beauty' },
  ];

  const mockData = {
    food: [
      { id: 1, name: '꾸까', description: '2주마다 꽃 배달 서비스', price: 3800, image: '/kukka.png' },
      // ... more items
    ],
    daily: [
      { id: 3, name: '런드리고', description: '3일에 한 번 세탁 서비스', price: 1300, image: '/laundrygo.png' }, 
      // ... more items
    ],
    beauty: [
      { id: 5, name: '미하이삭스', description: '매달 새로운 양말 배송', price: 6500, image: '/mehi.jpeg' },  
      // ... more items
    ], 
  };

  const handleCategoryChange = (event, newValue) => {
    setCategory(newValue);
  };

  return (
    <Box>
      <TopBar title="구독서비스 추천" backButton />  
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography variant="h6" mt={2}>
          <Typography component="span" color={red[500]}>
            {category} 카테고리 총 지출액 520,000원  
          </Typography>
        </Typography>
      </Box>
      <Box mt={2} mb={10}>  
        <CategoryList 
          categories={categories}
          value={category}
          onChange={handleCategoryChange}
        />
        <ServiceList items={mockData[category]} />
      </Box>
    </Box>
  );
}

export default RecommendListPage;