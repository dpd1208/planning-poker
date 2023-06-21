import React from "react";
import PropTypes from 'prop-types';
import GoogleSignin from "../../img/btn_google_signin_dark_pressed_web.png";
import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import {
  NavBarWrapper,
  HeaderTitle,
  AuthButton,
} from './NavBar.styled';

const NavBar = () => {
  const [user] = useAuthState(auth);

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

  const signOut = () => {
    auth.signOut();
  };

  return (
    <NavBarWrapper className="nav-bar">
      <HeaderTitle>Planning Poker</HeaderTitle>
      {user ? (
        <AuthButton onClick={signOut} className="sign-out" type="button">
          Sign Out
        </AuthButton>
      ) : (
        <AuthButton className="sign-in">
          <img
            onClick={googleSignIn}
            src={GoogleSignin}
            alt="sign in with google"
            type="button"
          />
        </AuthButton>
      )}
    </NavBarWrapper>
  );
};

NavBar.propTypes = {
  className: PropTypes.string
};

NavBar.defaultProps = {
  className: null,
};

export default NavBar;
