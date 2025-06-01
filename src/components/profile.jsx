import React, { useState } from "react";
import Button from "@mui/material/Button";
import EditProfile from "./editprofile";
import NewPost from "./newpost";
// import { FaEdit, FaPlus } from 'react-icons/fa'

const Profile = ({ posts, setPosts }) => {
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
      <section className="flex flex-col items-center justify-center md:flex-row lg:flex-row gap-6 my-10 p-16">
        <div className="flex justify-center items-center">
          <img
            className="w-[full] h-full object-cover md:w-[80%] lg:w-[80%]"
            src={profileImage}
            alt="profile"
          />
        </div>
        <div className="w-[80%] text-center md:text-left lg:text-left md:w-full lg:w-full gap-2 flex flex-col justify-center items-center md:flex-1 lg:flex-1">
          <h1 className="text-4xl text-center font-bold max-w-[100%] max-w-md:max-w-[80%] max-w-lg:max-w-[80%] md:text-left lg:text-left">
            {profileName}
          </h1>
          <p className="text-gray-500 text-lg max-w-[100%] max-w-md:max-w-[80%] max-w-lg:max-w-[100%] md:text-left lg:text-left">
            {profileBio}
          </p>
          <div className="flex flex-col md:flex-row lg:flex-row gap-4 w-full justify-center md:justify-between lg:justify-between">
            <Button
              variant="contained"
              color="primary"
              onClick={handleOpenEditModal}
            >
              Edit Profile
            </Button>
            <Button
              variant="contained"
              color="primary"
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
