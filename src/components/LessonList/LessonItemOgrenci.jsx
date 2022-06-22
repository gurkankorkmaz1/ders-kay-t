import React from "react";
import "./LessonList.css";
const LessonItemOgrenci = (props) => {
  const { lesson} = props;
  return (
    <div className="lesson-item-ogrenci">
      <div>
        <p>
          {lesson.name} - {lesson.code} - {lesson.hoca} - KREDI: {lesson.credit} - SINIF:
          {lesson.grade}
        </p>
      </div>
    </div>
  );
};

export default LessonItemOgrenci;
