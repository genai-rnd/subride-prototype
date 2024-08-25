// src/pages/login/LoginPage.js

import React from 'react';
import styled from 'styled-components';  
import LoginForm from '../../components/login/LoginForm';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const Logo = styled.img`
  width: 200px;
  margin-bottom: 50px;
`;

function LoginPage() {
  return (
    <PageWrapper>
      <Logo src="/logo.png" alt="logo" /> 
      <LoginForm />
    </PageWrapper>
  );
}

export default LoginPage;