import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div className="profile">
      {isAuthenticated ? (
        <div>
          <div className="profile__container">
            <div className="profile__top-info">
              <img src={user?.picture} alt={user?.name} />
              <h2>{user?.name}</h2>
              <h3>{user?.email_verified && user?.email}</h3>
            </div>

            <div className="profile__main">
              <div className="profile__main-info">
                <h3>
                  First Name: <span>{user?.given_name}</span>
                </h3>
                <h3>
                  Last Name: <span>{user?.family_name}</span>
                </h3>
              </div>

              <div className="profile__main-info">
                <h3>
                  Nick Name: <span>{user?.nickname}</span>
                </h3>
                <h3>
                  Email: <span>{user?.email}</span>
                </h3>
                <h3>
                  Locale: <span>{user?.locale}</span>
                </h3>
              </div>
            </div>
            <button className="profile__logout" onClick={() => logout()}>
              Log Out
            </button>
          </div>
        </div>
      ) : (
        <div className="profile__authenticated">
          <p>You are not logged into your account yet</p>
          <button onClick={() => loginWithRedirect()}>Log In</button>
        </div>
      )}
    </div>
  );
};

export default Profile;
