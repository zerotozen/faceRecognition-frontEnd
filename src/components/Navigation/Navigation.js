import React from "react";

const Navigation = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
      <nav
        style={{
          display: "flex",
          justifyContent: "flex-end",
          margin: 0,
          padding: 0,
          height: 80,
        }}
      >
        <p
          onClick={() => onRouteChange("signout")}
          className="white f3 link dim black underline pa3 pointer"
        >
          Sign Out
        </p>
      </nav>
    );
  } else {
    return (
      <nav
        style={{
          display: "flex",
          justifyContent: "flex-end",
          margin: 0,
          padding: 0,
          height: 80,
        }}
      >
        <p
          onClick={() => onRouteChange("signin")}
          className="white f3 link dim black underline pa3 pointer"
        >
          Sig In
        </p>
        <p
          onClick={() => onRouteChange("register")}
          className="white f3 link dim black underline pa3 pointer"
        >
          Register
        </p>
      </nav>
    );
  }
};

export default Navigation;
