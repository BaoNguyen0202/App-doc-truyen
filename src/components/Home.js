import React from "react";
import { getAuth, signOut, onAuthStateChanged  } from "firebase/auth";
import { useNavigate } from "react-router-dom";


const Home = () => {
  const auth = getAuth();
  const navigate = useNavigate();

  let handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate("/signin")
      })
      .catch((error) => {
        console.log(error.code)
      });
  };
  onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log(auth.currentUser);
    } else {
        navigate("/signin")
    }
  });
  return (
    <div>
      <button onClick={handleLogout}>Log out</button>
    </div>
  );
};

export default Home;
