import React from "react";
import PropTypes from "prop-types";
import {AuthorizationStatus, Screen} from "../../const.js";

const Header = ({authorizationStatus, authorizationData, onScreenChange}) => (
  <header className="page-header movie-card__head">
    <div className="logo">
      <a href="main.html" className="logo__link">
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </a>
    </div>
    <div className="user-block">
      {authorizationStatus === AuthorizationStatus.AUTHORIZED ?
        <div className="user-block__avatar">
          <img src={`https://4.react.pages.academy${authorizationData.avatarUrl}`} alt="User avatar" width={63} height={63} />
        </div> :
        <a
          href="#"
          className="user-block__link"
          onClick={() => {
            onScreenChange(Screen.SIGN_IN);
          }}
        >Sign in</a>
      }
    </div>
  </header>
);

Header.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  authorizationData: PropTypes.shape({
    id: PropTypes.number,
    email: PropTypes.string,
    name: PropTypes.string,
    avatarUrl: PropTypes.string
  }),
  onScreenChange: PropTypes.func.isRequired
};

export default Header;
