import React, { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const AuthPage = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  //Contditaional render
  return (
    <>
      {isSignIn ? (
        <SignIn setIsSignIn={setIsSignIn} />
      ) : (
        <SignUp setIsSignIn={setIsSignIn} />
      )}
    </>
  );
};

export default AuthPage;

/**
 *  <>
      {isSignIn && <SignIn />}
      {!isSignIn && <SignUp />}
    </>
 */
