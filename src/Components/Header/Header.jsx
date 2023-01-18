import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faBars,
  faTableColumns,
  faNewspaper,
  faUser,
  faQuestion,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import { BsGithub } from "react-icons/bs";
import { SlSocialVkontakte } from "react-icons/sl";
import { Link } from "react-router-dom";
import LogInButton from "../LogInButton/LogInButton";
import { useAuth0 } from "@auth0/auth0-react";
import logo from "../../images/Crypto-TRD-logo.png";

const Header = ({ setGetInputValue, setActive, active }) => {
  const [searched, setSearched] = useState("");
  const { user, isAuthenticated } = useAuth0();

  return (
    <header className="header" onClick={(event) => event.stopPropagation()}>
      <FontAwesomeIcon
        icon={active ? faClose : faBars}
        className="header__mobile-menu"
        onClick={() => setActive(!active)}
      />

      <div className="header__img-container">
        <Link to="Crypto-TRD/">
          <img className="header__logo" src={logo} alt="logo" />
        </Link>
      </div>

      <ul className="header__nav">
        {["Dashboard", "News", "Account", "Support"].map((data) => (
          <li className="header__nav-item" key={data}>
            <FontAwesomeIcon
              icon={
                data === "Dashboard"
                  ? faTableColumns
                  : data === "News"
                  ? faNewspaper
                  : data === "Account"
                  ? faUser
                  : data === "Support"
                  ? faQuestion
                  : ""
              }
            />{" "}
            <Link
              className="header__nav-link"
              to={
                data === "Dashboard"
                  ? "Crypto-TRD/"
                  : data === "News"
                  ? "Crypto-TRD/cryptonews"
                  : data === "Account"
                  ? "Crypto-TRD/profile"
                  : data === "Support"
                  ? "Crypto-TRD/contactus"
                  : "Crypto-TRD/"
              }
            >
              {data}
            </Link>
          </li>
        ))}
        <li className="header__nav-item">
          <input
            type="text"
            placeholder="Enter the name of the cryptocoin..."
            onChange={(event) => setSearched(event.target.value)}
          />
          <Link
            to="Crypto-TRD/"
            className="header__button"
            onClick={(event) => setGetInputValue(searched)}
          >
            <FontAwesomeIcon icon={faSearch} className="header__search-icon" />{" "}
            Search
          </Link>
        </li>
      </ul>

      {active && (
        <div className="mobile__menu">
          {/* Profile */}
          <div className="mobile__img-container">
            <Link to="Crypto-TRD/" onClick={() => setActive(false)}>
              <img className="mobile__logo" src={logo} alt="logo" />
            </Link>
          </div>

          {isAuthenticated && (
            <div className="mobile__profile">
              <img src={user?.picture} alt={user?.name} />

              <div className="mobile__content">
                <h4>{user?.nickname}</h4>
                <Link to="Crypto-TRD/profile" onClick={() => setActive(false)}>
                  Go To Profile
                </Link>
              </div>
            </div>
          )}

          {/* Mobile Menu */}
          <ul className="mobile__menu-list">
            {["Dashboard", "News", "Support"].map((data) => (
              <li className="mobile__menu-item" key={data}>
                <FontAwesomeIcon
                  icon={
                    data === "Dashboard"
                      ? faTableColumns
                      : data === "News"
                      ? faNewspaper
                      : data === "Support"
                      ? faQuestion
                      : ""
                  }
                />{" "}
                <Link
                  className="mobile__menu-link"
                  to={
                    data === "Dashboard"
                      ? "Crypto-TRD/"
                      : data === "News"
                      ? "Crypto-TRD/cryptonews"
                      : data === "Support"
                      ? "Crypto-TRD/contactus"
                      : "Crypto-TRD/"
                  }
                  onClick={() => setActive(false)}
                >
                  {data}
                </Link>
              </li>
            ))}

            {/* Bottom menu */}
            <li className="mobile__menu-item-input">
              <input
                type="text"
                placeholder="Enter the name of the cryptocoin..."
                onChange={(event) => setSearched(event.target.value)}
              />
              <Link
                to="Crypto-TRD/"
                className="header__button mobile__button"
                onClick={() => {
                  setGetInputValue(searched);
                  setActive(false);
                }}
              >
                <FontAwesomeIcon
                  icon={faSearch}
                  className="header__search-icon"
                />{" "}
                Search
              </Link>
            </li>

            {!isAuthenticated && <LogInButton />}

            <li className="mobile__menu-item-social">
              <a
                href="https://github.com/ItsZeroFour"
                target="_blank"
                rel="noreferrer"
              >
                <BsGithub /> GitHub
              </a>
              <a
                href="https://vk.com/nullbebra"
                target="_blank"
                rel="noreferrer"
              >
                <SlSocialVkontakte /> VK
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
