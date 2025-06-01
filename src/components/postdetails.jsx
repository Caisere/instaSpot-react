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

  return (
    <>
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          transition: "transform 0.2s",
          "&:hover": {
            transform: "translateY(-4px)",
          },
        }}
      >
        <CardMedia
          component="img"
          height="200"
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
        <CardContent sx={{ flexGrow: 1 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              mb: 1,
            }}
          >
            <Typography
              variant="h6"
              component="h3"
              sx={{
                fontSize: "1.1rem",
                fontWeight: 500,
                lineHeight: 1.2,
                mb: 1,
              }}
            >
              {post.text}
            </Typography>
            <Box>
              <IconButton
                onClick={handleLikeToggle}
                color={isLiked ? "error" : "default"}
                size="small"
              >
                {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
              </IconButton>
              <IconButton
                onClick={() => onDelete(post.image)}
                color="default"
                size="small"
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
