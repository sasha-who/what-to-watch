import * as React from "react";
import {Redirect, Link} from "react-router-dom";
import {AppRoute, AuthorizationStatus, LoginErrorMessage} from "../../const";
import Footer from "../footer/footer";

interface Props {
  isInputValid: boolean;
  authorizationStatus: string;
  loginError?: number;
  onAuthorizationFormSubmit: (userData: {email: string, password: string}) => void;
  onInputValidityChange: () => void;
}

class AuthorizationScreen extends React.PureComponent<Props, null> {
  private emailRef: React.RefObject<HTMLInputElement>;
  private passwordRef: React.RefObject<HTMLInputElement>;

  constructor(props) {
    super(props);

    this.emailRef = React.createRef();
    this.passwordRef = React.createRef();

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(evt) {
    const {onAuthorizationFormSubmit} = this.props;

    evt.preventDefault();

    onAuthorizationFormSubmit({
      email: this.emailRef.current.value,
      password: this.passwordRef.current.value
    });
  }

  render() {
    const {
      isInputValid,
      onInputValidityChange,
      authorizationStatus,
      loginError
    } = this.props;

    if (authorizationStatus === AuthorizationStatus.AUTHORIZED) {
      return <Redirect to={AppRoute.ROOT} />;
    }

    return (
      <div className="user-page">
        <header className="page-header user-page__head">
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
          <h1 className="page-title user-page__title">Sign in</h1>
        </header>
        <div className="sign-in user-page__content">
          <form
            action=""
            className="sign-in__form"
            onSubmit={this.handleFormSubmit}
          >
            <div className="sign-in__message">
              {!isInputValid &&
                <p>{LoginErrorMessage.INVALID}</p>
              }
              {loginError !== null &&
                <p>{`${LoginErrorMessage.SERVER_ERROR} ${loginError}`}</p>
              }
            </div>
            <div className="sign-in__fields">
              <div className="sign-in__field">
                <input
                  className="sign-in__input"
                  type="email"
                  placeholder="Email address"
                  name="user-email"
                  id="user-email"
                  ref={this.emailRef}
                  onInvalid={onInputValidityChange}
                />
                <label
                  className="sign-in__label visually-hidden"
                  htmlFor="user-email"
                >
                  Email address
                </label>
              </div>
              <div className="sign-in__field">
                <input
                  className="sign-in__input"
                  type="password"
                  placeholder="Password"
                  name="user-password"
                  id="user-password"
                  ref={this.passwordRef}
                />
                <label
                  className="sign-in__label visually-hidden"
                  htmlFor="user-password"
                >
                  Password
                </label>
              </div>
            </div>
            <div className="sign-in__submit">
              <button className="sign-in__btn" type="submit">
                Sign in
              </button>
            </div>
          </form>
        </div>
        <Footer />
      </div>
    );
  }
}

export default AuthorizationScreen;
