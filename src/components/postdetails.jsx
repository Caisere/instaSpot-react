import React, { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import DeleteIcon from "@mui/icons-material/Delete";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import ViewPost from "./viewpost";

const PostDetails = ({ post, onDelete }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [viewOpen, setViewOpen] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  const handleLikeToggle = () => {
    setIsLiked(!isLiked);
  };

  const handleDelete = () => {
    onDelete(post.id || post.image); // Fallback to image if id not present
  };

  return (
    <>
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
          "&:hover": {
            transform: "translateY(-4px)",
            boxShadow: (theme) => theme.shadows[4],
          },
        }}
      >
        <CardMedia
          component="img"
          height="240"
          image={imageError ? "/placeholder-image.png" : post.image}
          alt={post.name}
          onError={handleImageError}
          onClick={() => setViewOpen(true)}
          sx={{
            objectFit: "cover",
            bgcolor: "grey.100",
            cursor: "pointer",
            "&:hover": {
              opacity: 0.9,
            },
          }}
        />
        <CardContent
          sx={{
            flexGrow: 1,
            p: 2,
            "&:last-child": { pb: 2 },
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              gap: 1,
            }}
          >
            <Typography
              variant="h6"
              component="h3"
              sx={{
                fontSize: "1.1rem",
                fontWeight: 500,
                lineHeight: 1.3,
                flex: 1,
                mt: 0.5,
              }}
            >
              {post.text}
            </Typography>
            <Box sx={{ display: "flex", gap: 0.5 }}>
              <IconButton
                onClick={handleLikeToggle}
                color={isLiked ? "error" : "default"}
                size="small"
                sx={{ p: 1 }}
              >
                {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
              </IconButton>
              <IconButton
                onClick={handleDelete}
                color="default"
                size="small"
                sx={{ p: 1 }}
              >
                <DeleteIcon />
              </IconButton>
            </Box>
          </Box>
        </CardContent>
      </Card>

      <ViewPost
        open={viewOpen}
        handleClose={() => setViewOpen(false)}
        post={post}
        isLiked={isLiked}
        onLikeToggle={handleLikeToggle}
      />
    </>
  );
};

export default PostDetails;
