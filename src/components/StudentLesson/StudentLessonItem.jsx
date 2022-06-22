import React from "react";

import "./StudentLessonList";

const StudentLessonItem = (props) => {
  const { lesson, onClick, isAdd } = props;

  return (
    <div className="lesson-item1">
      <div>
        <p>
        {lesson.name} - {lesson.code} - {lesson.hoca} - KREDI: {lesson.credit} - SINIF:
          {lesson.grade}
        </p>
      </div>
      <button className="lesson-item-edit-btn" onClick={onClick}>
        {isAdd ? "+" : "-"}
      </button>
    </div>
  );
};

export default StudentLessonItem;
