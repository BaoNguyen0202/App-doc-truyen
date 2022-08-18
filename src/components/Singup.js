import React, { useState } from "react";
import { Link } from "react-router-dom";
import firebaseConfig from "../fire";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Singup = () => {
  const auth = getAuth();
  const navigate = useNavigate();

  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [err, setErr] = useState("");

  let handleSubmit = () => {
    if (!name && !email && !password) {
      setErr("vui long nhap day du thong tin");
    } else if (!name) {
      setErr("vui long nhap Name");
    } else if (!email) {
      setErr("vui long nhap Email");
    } else if (!password) {
      setErr("vui long nhap Password");
    } else if (password.length <= 7) {
      setErr("vui long nhap du 6 ky tu");
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          updateProfile(auth.currentUser, {
            displayName: name,
            photoURL:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnPGqX4s6HDBoVTLwIhy3fFmdxvMiDIfUtdA&usqp=CAU",
          }).then(() => {
            setErr("thanhcong");
            navigate("/");
          });
        })
        .catch((error) => {
          console.log(error.code);
          if (error.code == "auth/email-already-in-use") {
            setErr("Email da ton tai");
          } else {
            setErr("");
          }
        });
    }
  };
  return (
    <div id="singup">
      <div className="singup">
        <h2>Create a acout</h2>
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Name"
        />
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="Email"
          placeholder="Email"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="Password"
          placeholder="Password"
        />
        <p>{err}</p>
        <button onClick={handleSubmit}>Singup</button>
        <Link to="/signin">You have already accout? Singin</Link>
      </div>
    </div>
  );
};

export default Singup;
