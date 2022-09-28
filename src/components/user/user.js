import React from "react";

// User Card Component
export const UserCard = ({ avatarImg, name, surname }) => {
  const userStyle = { marginTop: '10px'}; 

  return (
    <div style={userStyle}>
      <h2>{name} {surname}</h2>
      <img src={avatarImg} alt='avatar' style={{borderRadius: '90%', width: '25%'}} />
    </div>)
};