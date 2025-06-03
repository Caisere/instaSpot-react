import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme";
import { useState, useEffect } from "react";
import defaultPosts from "./cardjson/card.json";

//components
import Header from "./components/header";
import Profile from "./components/profile";
import CardGrid from "./components/card";
import Footer from "./components/footer";

const loadInitialPosts = () => {
  try {
    const savedPosts = localStorage.getItem("instaspots_posts");
    return savedPosts ? JSON.parse(savedPosts) : defaultPosts;
  } catch (error) {
    console.error("Error loading posts from localStorage:", error);
    return defaultPosts;
  }
};

const savePostsToStorage = (posts) => {
  try {
    localStorage.setItem("instaspots_posts", JSON.stringify(posts));
  } catch (error) {
    console.error("Error saving posts to localStorage:", error);
  }
};

function App() {
  const [posts, setPosts] = useState(loadInitialPosts());

  // Save posts to localStorage whenever they change
  useEffect(() => {
    savePostsToStorage(posts);
  }, [posts]);

  const handleUpdatePosts = (newPosts) => {
    setPosts(newPosts);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          bgcolor: " #fcf5e5",
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
          <Profile posts={posts} setPosts={handleUpdatePosts} />
          <CardGrid posts={posts} setPosts={handleUpdatePosts} />
        </Container>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
