import React from "react";
import PostDetails from "./postdetails";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const CardGrid = ({ posts, setPosts }) => {
  if (posts.length === 0) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "200px",
        }}
      >
        <Typography variant="h6" color="text.secondary">
          No posts yet. Create your first post!
        </Typography>
      </Box>
    );
  }

  const handleDeletePost = (postId) => {
    setPosts(posts.filter((p) => (p.id || p.image) !== postId));
  };

  return (
    <main className="container p-4 my-10 flex flex-col items-center justify-center">
      <ul className="grid grid-cols-1 gap-6 place-items-center h-full sm:grid-cols-2 sm lg:grid-cols-3">
        {posts.map((post) => (
          <PostDetails
            key={post.id || post.image}
            post={post}
            onDelete={handleDeletePost}
          />
        ))}
      </ul>
    </main>
  );
};

export default CardGrid;
