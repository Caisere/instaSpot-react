import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        py: 3,
        bgcolor: "background.paper",
        borderTop: 1,
        borderColor: "divider",
        mt: "auto",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 0.5,
          }}
        >
          {new Date().getFullYear()} &copy; InstaSpots
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
