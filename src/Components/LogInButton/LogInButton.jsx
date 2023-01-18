import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";

const LogInButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button className="login__button" onClick={() => loginWithRedirect()}>
      Log In <FontAwesomeIcon icon={faRightToBracket} />
    </button>
  );
};

export default LogInButton;
