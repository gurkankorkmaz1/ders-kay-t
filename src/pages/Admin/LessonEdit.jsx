import React from "react";
import "./Admin.css";
const LessonEdit = (props) => {
  const { editLesson, setEditLesson, saveFunction, title,setEditHoca,hocalar } = props;
  const hocalarItem =[]
  hocalarItem.push(<option selected disabled value="">{"Hoca Seçiniz!"}</option>)

  for(var i=0; i<hocalar.length;i++){
    hocalarItem.push(<option >{hocalar[i].name+" "+hocalar[i].surname}</option>)
  }
  return (
    <div className="div-cerceve2">

    <div className="admin-lesson-edit-list">
      <h2>{title}</h2>
      <div className="admin-lesson-edit-list-item">
        <span>DERS ADI</span>
        <input
          className="admin-lesson-input"
          placeholder="ders adi"
          value={editLesson.name}
          onChange={(e) =>
            setEditLesson({ ...editLesson, name: e.target.value })
          }
        />
      </div>
      <div className="admin-lesson-edit-list-item">
        <span>DERS KODU</span>
        <input
          className="admin-lesson-input"
          placeholder="ders kodu"
          value={editLesson.code}
          onChange={(e) =>
            setEditLesson({ ...editLesson, code: e.target.value })
          }
        />
      </div>
      <div className="admin-lesson-edit-list-item">
        <span>KREDI</span>
        <input
          className="admin-lesson-input"
          placeholder="kredi"
          value={editLesson.credit}
          onChange={(e) =>
            setEditLesson({ ...editLesson, credit: Number(e.target.value) })
          }
        />
      </div>
      <div className="admin-lesson-edit-list-item">
        <span>SINIF</span>
        <input
          className="admin-lesson-input"
          placeholder="sinif"
          value={editLesson.grade}
          onChange={(e) =>
            setEditLesson({ ...editLesson, grade: Number(e.target.value) })
          }
        />
      </div>
      <div className="admin-lesson-edit-list-item">
        <span>HOCA</span>
        <select 
          className="admin-lesson-input"
          onChange={(e) => {
            if(e.target.value!=""&&e.target.value!=" "){
              setEditLesson({ ...editLesson, hoca:e.target.value })
            }
          }
          }
        >
          {hocalarItem}
        </select>
      </div>
      
      <div>
        <button
          onClick={saveFunction}
          style={{ marginRight: 10 }}
          className="lesson-item-edit-btn"
        >
          Kaydet
        </button>
        <button
          onClick={() => setEditLesson()}
          className="lesson-item-remove-btn"
        >
          İptal
        </button>
      </div>
    </div>
    </div>
  );
};

export default LessonEdit;
