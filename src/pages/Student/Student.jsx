import React, { useEffect, useState } from "react";
import StudentLessonList from "../../components/StudentLesson/StudentLessonList";
import "./Student.css";
const Student = (props) => {
  const { lessons, users, setUsers, setLoginInfo, loginInfo } = props;

  const [user, setUser] = useState(loginInfo.user);

  const [neededCredit, setNeededCredit] = useState(0);

  const [selectedLessons, setSelectedLessons] = useState(
    loginInfo.user.lessons
  );

  useEffect(() => {
    const userList = users.map((x) => {
      if (x.id === loginInfo.user.id) {
        let tmpUser = { ...loginInfo.user };
        tmpUser.lessons = selectedLessons;
        return tmpUser;
      }
      return x;
    });
    setUsers(userList);
    const tmpUser = users.find((x) => x.number === loginInfo.user.number);
    setUser(tmpUser);
    setNeededCredit(calculateNeededCredit());
  }, [selectedLessons]);

  const calculateNeededCredit = () => {
    const tmpSelectedLessonsCredit = selectedLessons
      .map((item) => item.credit)
      .reduce((prev, next) => prev + next, 0);
    return user.requiredCredit - tmpSelectedLessonsCredit;
  };

  return (
    <div className="div-cerceve">
    <div className="ortala">
      <h1>Bilgisayar Mühendisliği</h1>

      <h2>
        {user.name} {user.surname}
      </h2>
      <h3>{user.grade}. SINIF</h3>
      <h3>
        Gerekli Kredi {user.requiredCredit} 
      </h3>
      <h3>
        Kalan Kredi:{" "}
        {neededCredit}
      </h3>

      <button
        onClick={() => {
          setLoginInfo({ isLoggedIn: 0, user: undefined });
        }}
        style={{ margin: 10 }}
        className="lesson-item-edit-btn"
      >
        ÇIKIŞ YAP
      </button>
      <StudentLessonList
      neededCredit={neededCredit}
        selectedLessons={selectedLessons}
        setSelectedLessons={setSelectedLessons}
        lessons={lessons.filter((x) => x.grade === loginInfo.user.grade)}
      />
      <br/>
      <br/>
      <br/>
    </div>
    </div>
  );
};

export default Student;
