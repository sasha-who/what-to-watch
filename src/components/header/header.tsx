import * as React from "react";
import {Link} from "react-router-dom";
import {AuthorizationStatus, AppRoute} from "../../const";
import {AuthorizationData} from "../../types";

interface Props {
  authorizationStatus: string;
  authorizationData: AuthorizationData;
  additionalClass?: string;
  children?: React.ReactNode;
}

const Header: React.FunctionComponent<Props> = (props: Props) => {
  const {authorizationStatus, authorizationData, children, additionalClass} = props;

  return (
    <header className={`page-header ${additionalClass}`}>
      <div className="logo">
        <Link
          className="logo__link"
          to={AppRoute.ROOT}
        >
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
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

export default Header;
