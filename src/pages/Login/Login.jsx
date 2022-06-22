import React, { useState } from "react";

import "./Login.css";

const Login = (props) => {
  const { setLoginInfo, users } = props;

  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    const user = users.find((x) => x.number === number);
    if (user != undefined) {
      if (password === user.password) {
        console.log("Giris Basarili!");
        setLoginInfo({
          isLoggedIn: 1,
          user: user,
        });
      } else {
        alert("Yanlış şifre!");
      }
    } else {
      alert("Kullanıcı bulunamadı!");
    }
  };

  return (
      <div className="form">
        <h1>Giriş Ekranı</h1>
        <input
          className="input"
          placeholder="Numaranız"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <input
          className="input"
          type="password"
          placeholder="Şifreniz"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="button" onClick={() => login()}>
          GİRİŞ YAP
        </button>
      </div>
  );
};

export default Login;
