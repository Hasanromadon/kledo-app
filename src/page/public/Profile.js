import React from "react";
import Chip from "../../components/Chip";
import profilePicture from '../../assets/profile-picture.png';
import PublicLayout from "../../layout/PublicLayout";

const Profile = () => {
  return (
    <PublicLayout>
    <div className="flex justify-center flex-col p-4 sm:p-0 items-center h-screen ">
      <h1 className="text-2xl font-bold mb-4">Profile</h1>
      <div className="flex justify-between items-center sm:items-start bg-gray-100 border border-gray-200 p-6 sm:p-8 rounded-3xl w-full sm:w-2/4 h-[70vh] sm:h-500">
        <div>
        <Chip label="Nama" value="Hasan Romadon"/>
        <Chip label="Alamat" value="Depok - Jawa barat"/>
        <Chip label="No. HP" value="0855-1188-337"/>
        <Chip label="Email" value="Hasan Romadon"/>
        <Chip label="Motto" value="Hargai pekerjaanmu, walaupun tidak membuatmu kaya, tetapi memberimu kehidupan"/>
        </div>
        <div className="self-start sm:self-auto">
            <img className="w-40 sm:w-32 " src={profilePicture} alt=""/>
        </div>
      </div>
    </div>
    </PublicLayout>
  );
};

export default Profile;
