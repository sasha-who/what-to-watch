import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {AuthorizationStatus, AppRoute} from "../../const.js";

const Header = (props) => {
  const {authorizationStatus, authorizationData, children, additionalClass} = props;

  return (
    <header className={`page-header ${additionalClass}`}>
      <div className="logo">
        <a href="main.html" className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </a>
      </div>
      {children}
      <div className="user-block">
        {authorizationStatus === AuthorizationStatus.AUTHORIZED ?
          <Link
            to={AppRoute.MY_LIST}
          >
            <div className="user-block__avatar">
              <img
                src={`https://4.react.pages.academy${authorizationData.avatarUrl}`}
                alt="User avatar"
                width={63}
                height={63}
              />
            </div>
          </Link> :
          <Link
            href="#"
            className="user-block__link"
            to={AppRoute.LOGIN}
          >
            Sign in
          </Link>
        }
      </div>
    </header>
  );
};

Header.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  authorizationData: PropTypes.shape({
    id: PropTypes.number,
    email: PropTypes.string,
    name: PropTypes.string,
    avatarUrl: PropTypes.string
  }),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  additionalClass: PropTypes.string
};

export default Header;
