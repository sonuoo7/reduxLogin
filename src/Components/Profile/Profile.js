import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../Redux/userAction";

const Profile = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/users/${user?.id}`);
        const data = await response.json();
        dispatch(setUser(data));
      } catch (error) {
        console.error(error);
      }
    };
    if (user?.id) {
      fetchUser();
    }
  }, [dispatch, user]);

  return (
    <div className="profile-container">
      <h1 className="profile-heading">Profile</h1>
      {user ? (
        <div className="profile-info">
          <img
            src={user.image}
            alt=""
            style={{ width: "50px", borderRadius: "50%" }}
          />
          <p>User Id: {user.id || ""}</p>
          <p>First Name: {user.firstName || ""}</p>
          <p>Last Name: {user.lastName || ""}</p>
          <p>E-mail: {user.email || ""}</p>
          <p>Age: {user.age || ""}</p>
          <p>Gender: {user.gender || ""}</p>
          <p>DOB: {user.birthDate || ""}</p>
          <p>Blood Group: {user.bloodGroup || ""}</p>
          <p>Phone: {user.phone || ""}</p>
        </div>
      ) : (
        <p className="loading">Loading...</p>
      )}
    </div>
  );

};

export default Profile;
