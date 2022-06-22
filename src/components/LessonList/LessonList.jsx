import React from "react";
import LessonItem from "./LessonItem";
import "./LessonList.css";
import App from "../../App";
const LessonList = (props) => {
  const {setNewRapor, lessons, setLessons, setEditLesson, setNewLesson,setNewHoca,setNewOgrenci,setSecilenOgr} = props;

  const deleteLesson = (lesson) => {
    console.log(lesson.name, "delete!");
    const newLessons = lessons.filter((x) => x.id !== lesson.id);
    setLessons(newLessons);
  };

  const editLessonFunction = (lesson) => {
    const editLesson = lessons.find((x) => x.id === lesson.id);
    console.log(editLesson, "edit");
    setEditLesson(editLesson);
    setNewLesson();
    setNewOgrenci();
    setNewHoca();
    setNewRapor();
    setSecilenOgr();
  };

  return (
    <div>
      {lessons.map((x, index) => (
        <LessonItem
          key={x.id}
          editLessonFunction={() => editLessonFunction(x)}
          deleteLesson={() => deleteLesson(x)}
          lesson={x}
        />
      ))}
    </div>
  );
};

export default LessonList;
