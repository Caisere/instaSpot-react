import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const NewPost = ({ open, handleClose, posts, setPosts }) => {
  const theme = useTheme();
  const [postImage, setPostImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [caption, setCaption] = useState("");

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setPostImage(file);
      const imageUrl = URL.createObjectURL(file);
      setImagePreview(imageUrl);
    }
  };

  const handleSubmit = () => {
    if (postImage && caption) {
      // Create a new post object
      const newPost = {
        image: imagePreview, // Using the preview URL for now
        text: caption,
        name: `image of ${caption}`,
      };

      // Add the new post to the posts array
      setPosts([newPost, ...posts]);

      // Reset form
      setPostImage(null);
      setImagePreview(null);
      setCaption("");

      // Close modal
      handleClose();
    }
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: { xs: "90%", sm: 400 },
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    borderRadius: theme.shape.borderRadius,
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
          gutterBottom
        >
          Create New Post
        </Typography>
        <Stack spacing={3} sx={{ mt: 2 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 2,
            }}
          >
            {imagePreview ? (
              <Box
                component="img"
                src={imagePreview}
                alt="Post preview"
                sx={{
                  width: "100%",
                  height: 200,
                  objectFit: "cover",
                  borderRadius: 1,
                }}
              />
            ) : (
              <Box
                sx={{
                  width: "100%",
                  height: 200,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  bgcolor: "grey.100",
                  borderRadius: 1,
                }}
              >
                <Typography color="text.secondary">
                  No image selected
                </Typography>
              </Box>
            )}
            <Button
              component="label"
              variant="outlined"
              startIcon={<PhotoCamera />}
              fullWidth
            >
              Upload Photo
              <input
                type="file"
                hidden
                accept="image/*"
                onChange={handleImageChange}
              />
            </Button>
          </Box>
          <TextField
            fullWidth
            label="Post Text"
            variant="outlined"
            multiline
            rows={3}
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
          />

          <Box sx={{ display: "flex", gap: 2, justifyContent: "flex-end" }}>
            <Button
              variant="outlined"
              onClick={() => {
                // Reset form on cancel
                setPostImage(null);
                setImagePreview(null);
                setCaption("");
                handleClose();
              }}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              onClick={handleSubmit}
              disabled={!postImage || !caption}
            >
              Post
            </Button>
          </Box>
        </Stack>
      </Box>
    </Modal>
  );
};

export default NewPost;
