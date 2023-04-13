import React from "react";
import logo from "../../assets/Images/logo/BrainFlix-logo.svg";
import profilePicture from "../../assets/Images/Mohan-muruge.jpg";
import uploadSVG from "../../assets/Images/Icons/upload.svg";
import "./Header.scss";
import { Link } from "react-router-dom";

const Header = () => (
  <header className="header">
    <Brand />
    <Search />
    <div className="header__upload">
      <UploadButton />
      <ProfilePicture />
    </div>
  </header>
);

const Brand = () => (
  <Link to="/">
    <div className="header__image">
      <img src={logo} alt="Brand-Logo" className="header__logo" />
    </div>
  </Link>
);

const Search = () => (
  <form className="header__form">
    <input
      type="search"
      placeholder="Search"
      className="header__search"
    ></input>
  </form>
);

const UploadButton = () => (
  <Link to="/upload" className="header__button button">
    <img src={uploadSVG} alt="upload-icon" className="header__upload-icon" />
    UPLOAD
  </Link>
);

const ProfilePicture = () => (
  <img
    src={profilePicture}
    alt="Profile-Picture"
    className="header__profile-picture"
  />
);

export default Header;
