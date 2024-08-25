// src/components/login/LoginForm.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, TextField, Button } from '@mui/material';

function LoginForm() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: 로그인 처리  
    navigate('/main');
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}  
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& .MuiTextField-root': { m: 1, width: '300px' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField label="ID" variant="standard" />
        <TextField label="Password" type="password" variant="standard" />
      </div>
      <Button variant="contained" size="large" sx={{ mt: 3 }} type="submit">
        Login
      </Button>
    </Box>
  );
}

export default LoginForm;