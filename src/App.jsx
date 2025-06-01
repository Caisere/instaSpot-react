import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme";

//components
import Header from "./components/header";
import Profile from "./components/profile";
import CardGrid from "./components/card";
import Footer from "./components/footer";
import { useState } from "react";
import defaultPosts from "./cardjson/card.json";

function App() {
  const [posts, setPosts] = useState(defaultPosts);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="flex gap-6 flex-col items-center justify-center px-20 md:px-20 lg:px-20">
        <Header />
        <Profile posts={posts} setPosts={setPosts} />
        <CardGrid posts={posts} setPosts={setPosts} />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
