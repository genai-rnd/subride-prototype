// src/components/recommend/CategoryList.js

import React from 'react';
import { Tabs, Tab } from '@mui/material';

function CategoryList({ categories, value, onChange }) {
  return (
    <Tabs value={value} onChange={onChange} centered>
      {categories.map((category) => (
        <Tab key={category.value} label={category.label} value={category.value} />
      ))}
    </Tabs>
  );
}

export default CategoryList;