import React from "react";
import { useLocation } from "react-router-dom";
import { Container, Typography, Box } from "@mui/material";

const HomePage: React.FC = () => {
  const { state } = useLocation();
  const { name, age } = state || {};

  return (
    <Container>
      <Box sx={{ marginTop: 8 }}>
        <Typography variant="h4">Welcome, {name}</Typography>
        <Typography variant="h6">Your age is {age} years</Typography>
      </Box>
    </Container>
  );
};

export default HomePage;
