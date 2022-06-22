import logo from "./logo.svg";
import "./App.css";
import { useState,useEffect } from "react";
import { usersData } from "./veriler/users";
import { lessonsData } from "./veriler/lessons";
import { hocalarData } from "./veriler/hocalar";
import Login from "./pages/Login/Login";
import Student from "./pages/Student/Student";
import Admin from "./pages/Admin/Admin";

function App() {
  const [users, setUsers] = useState(usersData);
  const [lessons, setLessons] = useState(lessonsData);
  const [hocalar, setHocalar] = useState(hocalarData);
  const [loginInfo, setLoginInfo] = useState({
    isLoggedIn: 0,
    user: undefined,
  });
  const hocalariEkle=(newHoca)=>{
    console.log("Hoca eklendi.");
    setHocalar(eski=>[...eski,newHoca])
  }
  const ogrenciEkle=(veri)=>{
    console.log("Öğrenci eklendi.");
    setUsers(eski=>[...eski,veri])
  }
  return (
    <div>
      {(() => {
        if (loginInfo.isLoggedIn == 1 && loginInfo.user?.role == "OGRENCI") {
          return (
            <Student
              setLoginInfo={setLoginInfo}
              lessons={lessons}
              setUsers={setUsers}
              users={users}
              loginInfo={loginInfo}
            />
          );
        } else if (
          loginInfo.isLoggedIn == 1 &&
          loginInfo.user?.role == "ADMIN"
        ) {
          return (
            <Admin
              setLoginInfo={setLoginInfo}
              lessons={lessons}
              setLessons={setLessons}
              hocalar={hocalar}
              setHocalar={setHocalar}
              hocalariEkle = {hocalariEkle}
              ogrenciEkle = {ogrenciEkle}
              users={users}
            />
          );
        } else {
          return <Login users={users} setLoginInfo={setLoginInfo} />;
        }
      })()}
    </div>
  );
}

export default App;
