import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

const Header = () => {
  return (
    <Box
      component="header"
      sx={{
        width: "100%",
        height: 64,
        bgcolor: "background.paper",
        borderBottom: 1,
        borderColor: "divider",
        position: "sticky",
        top: 0,
        zIndex: 1100,
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          component="img"
          src="/Logo.svg"
          alt="logo"
          sx={{
            width: 40,
            height: 40,
            objectFit: "contain",
          }}
        />
      </Container>
    </Box>
  );
};

export default Header;
