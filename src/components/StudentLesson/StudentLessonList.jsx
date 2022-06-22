import React, { useState } from "react";
import StudentLessonItem from "./StudentLessonItem";
import "./StudentLessonList.css";

const StudentLessonList = (props) => {
  const { lessons, neededCredit, selectedLessons, setSelectedLessons } = props;

  const addToSelected = (lesson) => {
    if (neededCredit - lesson.credit >= 0) {
      setSelectedLessons([...selectedLessons, lesson]);
      console.log("add", lesson);
    } else {
      alert("Kredi Aşılamaz.");
    }
  };

  const removeFromSelected = (lesson) => {
    const newSelectedLessons = selectedLessons.filter((x) => x.id != lesson.id);
    setSelectedLessons(newSelectedLessons);
    console.log("remove", lesson);
  };

  return (
    <div className="student-lesson-list-div">
      <div className="student-lesson-list-div">
        <h2>Secilebilecek Dersler</h2>
        {lessons
          .filter((item) => !selectedLessons.includes(item))
          .map((x) => (
            <StudentLessonItem
              onClick={() => addToSelected(x)}
              key={x.id}
              isAdd={true}
              lesson={x}
            />
          ))}
      </div>
      <div>
        <h2>Secilen Dersler</h2>
        {selectedLessons.map((x) => (
          <StudentLessonItem
            onClick={() => removeFromSelected(x)}
            key={x.id}
            isAdd={false}
            lesson={x}
          />
        ))}
      </div>
    </div>
  );
};

export default StudentLessonList;
