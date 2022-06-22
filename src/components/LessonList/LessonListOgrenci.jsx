import React from "react";
import LessonItemOgrenci from "./LessonItemOgrenci";
import "./LessonList.css";
const LessonListOgrenci = (props) => {
  const {lessons} = props;
  return (
    <div>
      {lessons.map((x, index) => (
        <LessonItemOgrenci
          key={x.id}
          lesson={x}
        />
      ))}
    </div>
  );
};

export default LessonListOgrenci;
