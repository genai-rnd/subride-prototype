// src/pages/recommend/ServiceDetailPage.js

import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Typography, Button, Snackbar } from '@mui/material';
import { styled } from '@mui/system';
import TopBar from '../common/TopBar';

const DetailBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center', 
  textAlign: 'center',
  paddingBottom: 100,
});  

function ServiceDetailPage() {
  const params = useParams();
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  // TODO: API로 해당 서비스 상세 정보 조회
  const service = {
    name: '꾸까',
    description: '매월 셰프가 엄선한 알찬 꾸까박스를 배송해드립니다...',
    price: 12900, 
    image: '/kukka.png',
  };

  const handleSubscribe = () => {
    // TODO: 구독 처리 API 호출
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
      navigate('/mysubscribe');
    }, 2000);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') { 
      return;
    }

    setOpen(false); 
  };  

  return (
    <>
      <TopBar title={service.name} backButton />
      <DetailBox>
        <Box mt={4} mb={2}>
          <img src={service.image} alt="service" width="150" height="150" />
        </Box>
        <Typography variant="h5">{service.name}</Typography>
        <Typography variant="body2" color="text.secondary">
          식료품 &gt; 구독박스
        </Typography>
        <Typography variant="body1" mt={2}>
          {service.description}
        </Typography>
        <Typography variant="h6" mt={4}>
          월 {service.price}원  
        </Typography>
        <Typography variant="body2" mb={4}>
          친구와 함께 구독 시 월 {service.price / 2}원
        </Typography>
        <Button variant="contained" size="large" onClick={handleSubscribe}>
          구독하기
        </Button>
        <Snackbar 
          open={open}
          autoHideDuration={2000}
          onClose={handleClose}
          message="구독이 완료 되었습니다"
        />
      </DetailBox>
    </>
  );
}  

export default ServiceDetailPage;