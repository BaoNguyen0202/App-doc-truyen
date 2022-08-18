import React, { useState } from "react";
import { Link } from "react-router-dom";
import firebaseConfig from "../fire";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Singin = () => {
  const auth = getAuth();
  const navigate = useNavigate();

  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [err, setErr] = useState("");

  let handleSubmit = () => {
    if (!email && !password) {
      setErr("vui long nhap day du thong tin");
    } else if (!email) {
      setErr("vui long nhap Email");
    } else if (!password) {
      setErr("vui long nhap Password");
    } else if (password.length <= 7) {
      setErr("vui long nhap du 6 ky tu");
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          setErr("");
          navigate("/");
        })
        .catch((error) => {
          console.log(error.code);
          if (error.code == "auth/wrong-password") {
            setErr("Nhap sai passWord");
          } else if (error.code == "auth/user-not-found") {
            setErr("Nhap sai Email");
          } else {
            setErr("");
          }
        });
    }
  };
  return (
    <div id="singup">
      <div className="singup">
        <h2>Login your account</h2>
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
        <button onClick={handleSubmit}>Singin</button>
        <Link to="/signup">You don't accout? Singup</Link>
      </div>
    </div>
  );
};

export default Singin;
