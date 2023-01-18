import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

const LogOutButton = () => {
  const { logout } = useAuth0();

  return (
    <button className="logout__button" onClick={() => logout()}>
      Log Out <FontAwesomeIcon icon={faRightFromBracket} />
    </button>
  );
};

export default LogOutButton;
