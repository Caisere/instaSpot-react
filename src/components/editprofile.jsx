import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useTheme } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Avatar from "@mui/material/Avatar";

const EditProfile = ({ open, handleClose, profileImage, setProfileImage, profileName, setProfileName, profileBio, setProfileBio }) => {
  const theme = useTheme();
  

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
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
          Edit Profile
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
            <Avatar
              src={profileImage}
              sx={{
                width: 100,
                height: 100,
                border: `2px solid ${theme.palette.primary.main}`,
              }}
            />
            <Button
              component="label"
              variant="outlined"
              startIcon={<PhotoCamera />}
              sx={{ mt: 1 }}
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
            label="Name"
            variant="outlined"
            defaultValue={profileName}
            onChange={(e) => setProfileName(e.target.value)}
          />
          <TextField
            fullWidth
            label="Bio"
            variant="outlined"
            multiline
            rows={4}
            defaultValue={profileBio}
            onChange={(e) => setProfileBio(e.target.value)}
          />
          <Box sx={{ display: "flex", gap: 2, justifyContent: "flex-end" }}>
            <Button variant="outlined" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="contained" onClick={handleClose}>
              Save Changes
            </Button>
          </Box>
        </Stack>
      </Box>
    </Modal>
  );
};

export default EditProfile;
