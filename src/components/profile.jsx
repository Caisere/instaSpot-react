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
      <section className="flex flex-col items-center justify-center pb-6 gap-6 sm:flex-row md:flex-row md:items-start md:justify-between md:max-w-[100%] md:gap-0 lg:flex-row lg:p-11 ">
        <div className="flex justify-center items-center">
          <img
            className="w-[full] h-full object-cover md:w-[80%] lg:w-[80%]"
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
