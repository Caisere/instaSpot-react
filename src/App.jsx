import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme";
import { useState } from "react";
import defaultPosts from "./cardjson/card.json";

//components
import Header from "./components/header";
import Profile from "./components/profile";
import CardGrid from "./components/card";
import Footer from "./components/footer";

function App() {
  const [posts, setPosts] = useState(defaultPosts);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          bgcolor: "background.default",
        }}
      >
        <Header />
        <Container
          maxWidth="xl"
          sx={{
            flex: 1,
            py: { xs: 2, sm: 3, md: 4 },
            px: { xs: 4, sm: 8, md: 10 },
            display: "flex",
            flexDirection: "column",
            gap: { xs: 3, sm: 4, md: 6 },
          }}
        >
          <Profile posts={posts} setPosts={setPosts} />
          <CardGrid posts={posts} setPosts={setPosts} />
        </Container>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
