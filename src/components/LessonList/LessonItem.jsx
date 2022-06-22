import React from "react";
import "./LessonList.css";
const LessonItem = (props) => {
  const { lesson, deleteLesson, editLessonFunction } = props;

  return (
    <div className="lesson-item">
      <div>
        <p>
          {lesson.name} - {lesson.code} - {lesson.hoca} - KREDI: {lesson.credit} - SINIF:
          {lesson.grade}

        </p>
      </div>
      <div className="lesson-item-buttons">
        <button className="lesson-item-remove-btn" onClick={deleteLesson}>
          Sil
        </button>
        <button className="lesson-item-edit-btn" onClick={editLessonFunction}>
          Düzenle
        </button>
      </div>
    </div>
  );
};

export default LessonItem;
