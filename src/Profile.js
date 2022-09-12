import React from "react";
import { useParams } from "react-router-dom";

const profileData = {
  velopert: {
    name: "김민준",
    description: "Frontend Engineer @ RIDI",
  },
  homer: {
    name: "호머 심슨",
    description: "심슨 가족에 나오는 아빠 역할 캐릭터",
  },
};

function Profile() {
  let params = useParams();
  console.log(params);
  const { username } = params;
  const profile = profileData[username];

  if (!profile) {
    return <div>존재하지 않는 사용자입니다.</div>;
  }

  return (
    <div>
      <h3>
        {username} ({profile.name})
      </h3>
      <p>{profile.description}</p>
    </div>
  );
}

export default Profile;
