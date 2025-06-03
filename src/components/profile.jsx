import React, { useState } from "react";
import Button from "@mui/material/Button";
import EditProfile from "./editprofile";
import NewPost from "./newpost";
// import { useTheme } from "@mui/material/styles";
// import { FaEdit, FaPlus } from 'react-icons/fa'

const Profile = ({ posts, setPosts }) => {
//   const theme = useTheme();
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openNewPostModal, setOpenNewPostModal] = useState(false);
  const [profileName, setProfileName] = useState(
    "Aliaune Damala Bouga Time Bongo Puru Nacka Lu Lu Lu Badara Akon..."
  );
  const [profileBio, setProfileBio] = useState(
    "Known mononymously as Akon (/ˈeɪkɒn/), is a Senegalese-American singer, record producer, and entrepreneur. An influential figure in modern world..."
  );
  const [profileImage, setProfileImage] = useState("/profilepic.png");

  const handleOpenEditModal = (e) => {
    e.preventDefault();
    setOpenEditModal(true);
  };

  const handleCloseEditModal = (e) => {
    e.preventDefault();
    setOpenEditModal(false);
  };

  const handleOpenNewPostModal = (e) => {
    e.preventDefault();
    setOpenNewPostModal(true);
  };

  const handleCloseNewPostModal = (e) => {
    e?.preventDefault();
    setOpenNewPostModal(false);
  };

  return (
    <>
      <section className="flex flex-col items-center justify-center pb-6 gap-6 sm:flex-row md:flex-row md:items-start md:justify-between md:max-w-[100%] md:gap-6 lg:flex-row lg:p-11 ">
        <div className="flex justify-center items-center">
          <img
            className="w-[200px] h-[200px] object-cover rounded-full border-1 hover:cursor-pointer hover:scale-105 transition-all duration-300 sm:w-[200px] sm:h-[200px] sm:object-cover sm:rounded-full sm:flex sm:justify-center sm:items-center md:w-[210px] md:h-[210px] md:rounded-full md:flex md:justify-center md:items-center lg:w-[220px] lg:h-[220px] lg:rounded-full lg:flex lg:justify-center lg:items-center"
            src={profileImage}
            alt="profile"
          />
        </div>
        <div className="w-[80%] text-center gap-2 flex flex-col justify-center items-center sm:items-start sm:justify-start sm:text-left md:text-left md:max-w-[100%] md:flex-1 md:justify-start md:items-start lg:text-left lg:w-full lg:flex-1">
          <h1 className="text-4xl text-center font-bold max-w-[100%] sm:text-left md:max-w-[100%] md:text-3xl  md:text-left lg:max-w-[65%] lg:text-[40px] lg:text-left">
            {profileName}
          </h1>
          <p className="text-gray-500 text-lg max-w-[100%]  md:max-w-[80%] md:text-sm md:text-left lg:text-left lg:max-w-[55%] lg:text-xl">
            {profileBio}
          </p>
          <div className="flex flex-col gap-4 w-full justify-center sm:w-[100%] sm:flex-row sm:justify-between sm:items-start md:flex-row md:justify-between lg:flex-row lg:justify-between">
            <Button
              variant="contained"
              color="primary"
              sx={{
                backgroundColor: "#000",
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.8)",
                },
              }}
              onClick={handleOpenEditModal}
            >
              Edit Profile
            </Button>
            <Button
              variant="contained"
              color="primary"
              sx={{
                backgroundColor: "#000",
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.8)",
                },
              }}
              onClick={handleOpenNewPostModal}
            >
              New Post
            </Button>
          </div>
        </div>
      </section>
      <EditProfile
        open={openEditModal}
        handleClose={handleCloseEditModal}
        profileName={profileName}
        setProfileName={setProfileName}
        profileBio={profileBio}
        setProfileBio={setProfileBio}
        profileImage={profileImage}
        setProfileImage={setProfileImage}
      />
      <NewPost
        open={openNewPostModal}
        handleClose={handleCloseNewPostModal}
        posts={posts}
        setPosts={setPosts}
      />
    </>
  );
};

export default Profile;
