import React from "react";
import PropTypes from 'prop-types';
import GoogleSignin from "../../img/btn_google_signin_dark_pressed_web.png";
import { auth } from "../../firebase";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import {
  WelcomeWrapper,
  StyledButton,
} from './Welcome.styled';

const Welcome = () => {
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

  return (
    <WelcomeWrapper className="welcome">
      <h2>Welcome to Planning Poker.</h2>
      <img src="/logo512.png" alt="ReactJs logo" width={50} height={50} />
      <p>Sign in with Google to chat with with your fellow React Developers.</p>
      <StyledButton className="sign-in">
        <img
          onClick={googleSignIn}
          src={GoogleSignin}
          alt="sign in with google"
          type="button"
        />
      </StyledButton>
    </WelcomeWrapper>
  );
};


Welcome.propTypes = {
  className: PropTypes.string
};

Welcome.defaultProps = {
  className: null,
};

export default Welcome;
