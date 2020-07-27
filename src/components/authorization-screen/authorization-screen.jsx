import React from "react";
import PropTypes from "prop-types";
import {Screen} from "../../const.js";
import Footer from "../footer/footer.jsx";

class AuthorizationScreen extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isEmailValid: true
    };

    this.emailRef = React.createRef();
    this.passwordRef = React.createRef();

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInputInvalid = this.handleInputInvalid.bind(this);
  }

  handleFormSubmit(evt) {
    const {onAuthorizationFormSubmit, onScreenChange} = this.props;

    evt.preventDefault();

    onAuthorizationFormSubmit({
      email: this.emailRef.current.value,
      password: this.passwordRef.current.value
    });

    onScreenChange(Screen.MAIN);
  }

  handleInputInvalid() {
    this.setState({
      isEmailValid: false
    });
  }

  render() {
    return (
      <div className="user-page">
        <header className="page-header user-page__head">
          <div className="logo">
            <a href="main.html" className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>
          <h1 className="page-title user-page__title">Sign in</h1>
        </header>
        <div className="sign-in user-page__content">
          <form
            action=""
            className="sign-in__form"
            onSubmit={this.handleFormSubmit}
          >
            {!this.state.isEmailValid && <div className="sign-in__message">
              <p>Please enter a valid email address</p>
            </div>}
            <div className="sign-in__fields">
              <div className="sign-in__field">
                <input
                  className="sign-in__input"
                  type="email"
                  placeholder="Email address"
                  name="user-email"
                  id="user-email"
                  ref={this.emailRef}
                  onInvalid={this.handleInputInvalid}
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

AuthorizationScreen.propTypes = {
  onAuthorizationFormSubmit: PropTypes.func.isRequired,
  onScreenChange: PropTypes.func.isRequired
};

export default AuthorizationScreen;
