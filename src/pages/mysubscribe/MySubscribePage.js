// src/pages/mysubscribe/MySubscribePage.js

import React from "react";
import { Box, Typography } from "@mui/material";
import TopBar from "../common/TopBar";

function MySubscribePage() {
  // TODO: 사용자의 구독 목록 조회 API 호출
  const mySubscriptions = [
    { id: 1, name: "꾸까", description: "매월 셰프가 엄선한...", price: 12900 },
    // ... more items
  ];

  return (
    <Box>
      <TopBar title="나의 구독서비스 현황" backButton />
      <Typography variant="h5" mt={2}>
        나의 구독 서비스
      </Typography>
      {mySubscriptions.map((item) => (
        <Box key={item.id} mt={2}>
          <Typography variant="subtitle1">{item.name}</Typography>
          <Typography variant="body2" color="text.secondary">
            {item.description}
          </Typography>
          <Typography variant="body2">월 {item.price}원</Typography>
        </Box>
      ))}
    </Box>
  );
}

export default MySubscribePage;
