import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CloseIcon from "@mui/icons-material/Close";

const ViewPost = ({ open, handleClose, post, isLiked, onLikeToggle }) => {
  const theme = useTheme();

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: { xs: "95%", sm: "80%", md: "60%", lg: "50%" },
    maxWidth: "800px",
    maxHeight: "90vh",
    overflow: "auto",
    bgcolor: "background.paper",
    boxShadow: 24,
    borderRadius: theme.shape.borderRadius,
    p: 0,
  };

  if (!post) return null;

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="view-post-modal"
      aria-describedby="view-post-description"
    >
      <Box sx={style}>
        <Box
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            zIndex: 1,
            bgcolor: "rgba(0, 0, 0, 0.3)",
            borderRadius: "50%",
          }}
        >
          <IconButton onClick={handleClose} sx={{ color: "white" }}>
            <CloseIcon />
          </IconButton>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            height: { md: "70vh" },
          }}
        >
          {/* Image Section */}
          <Box
            sx={{
              flex: "1 1 60%",
              bgcolor: "grey.900",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              component="img"
              src={post.image}
              alt={post.name}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
          </Box>

          {/* Content Section */}
          <Box
            sx={{
              flex: "1 1 40%",
              p: 3,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              variant="h6"
              component="h2"
              gutterBottom
              sx={{ fontWeight: 500 }}
            >
              {post.text}
            </Typography>

            <Box
              sx={{
                mt: "auto",
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <IconButton
                onClick={onLikeToggle}
                color={isLiked ? "error" : "default"}
              >
                {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
              </IconButton>
              <Typography variant="body2" color="text.secondary">
                {isLiked ? "Liked" : "Like this post"}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default ViewPost;
