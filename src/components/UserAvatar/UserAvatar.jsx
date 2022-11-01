import React from "react";

export const UserAvatar = ({ image, address }) => {
  return (
    <div>
      <img src={image} alt="avatar" />
      <b>{address}</b>
    </div>
  );
};
