import React, { useState } from "react";
import LessonList from "../../components/LessonList/LessonList";
import LessonListOgrenci from "../../components/LessonList/LessonListOgrenci";
import "./Admin.css";
import LessonEdit from "./LessonEdit";

const Admin = (props) => {
  const {
    lessons,
    setLessons,
    setLoginInfo,
    hocalar,
    setHocalar,
    hocalariEkle,
    ogrenciEkle,
    users,
  } = props;
  const [editLesson, setEditLesson] = useState();
  const [newLesson, setNewLesson] = useState();
  const [newHoca, setNewHoca] = useState();
  const [newOgrenci, setNewOgrenci] = useState();
  const [newRapor, setNewRapor] = useState();
  const [secilenOgr, setSecilenOgr] = useState();
  const ogrenciler = []
  ogrenciler.push(<option selected disabled value="">{"Öğrenci Seçiniz!"}</option>)
  for(var i=0;i<users.length;i++){
    if(users[i].role=="OGRENCI")
    ogrenciler.push(<option >{users[i].number}</option>);
  }
  const saveFunction = () => {
    if (
      editLesson.name !== "" &&
      editLesson.code !== "" &&
      editLesson.grade !== 0 &&
      editLesson.credit !== 0
    ) {
      const newLessons = lessons.map((x) => {
        if (x.id === editLesson.id) {
          return editLesson;
        }
        return x;
      });
      setLessons(newLessons);
      setEditLesson();
    } else {
      alert("bos alan birakilamaz!");
    }
  };

  const insertNewFunction = () => {
    if (
      newLesson.name !== "" &&
      newLesson.code !== "" &&
      newLesson.grade !== 0 &&
      newLesson.credit !== 0 &&
      newLesson.hoca !== "" &&
      newLesson.hoca !== " "
    ) {
      const newLessons = [...lessons, newLesson];
      setLessons(newLessons);
      setNewLesson();
    } else {
      alert("bos alan birakilamaz!");
    }
  };
  return (
    <div className="admin-div">
      <div className="admin-panel">
        <button
          onClick={() => {
            setNewRapor();
            setEditLesson();
            setSecilenOgr();
            setNewLesson();
            setNewOgrenci();
            setSecilenOgr();
            setNewHoca({
              id: Math.random(),
              name: "",
              surname: "",
            });
          }}
          style={{ margin: 10 }}
          className="lesson-item-edit-btn"
        >
          HOCA EKLE
        </button>

        <button
          onClick={() => {
            setNewRapor();
            setSecilenOgr();
            setEditLesson();
            setNewHoca();
            setNewOgrenci();
            setNewLesson({
              id: Math.random(),
              name: "",
              code: "",
              credit: 0,
              grade: 0,
              hoca: "",
            });
          }}
          style={{ margin: 10 }}
          className="lesson-item-edit-btn"
        >
          YENİ DERS EKLE
        </button>
        <button
          onClick={() => {
            setEditLesson();
            setNewLesson();
            setSecilenOgr();
            setNewRapor();
            setNewHoca();
            setNewOgrenci({
              id: Math.random(),
              grade: 0,
              name: "",
              surname: "",
              number: "",
              password: "",
              role: "OGRENCI",
              lessons: [],
              requiredCredit: 0,
            });
          }}
          style={{ margin: 10 }}
          className="lesson-item-edit-btn"
        >
          OGRENCI EKLE
        </button>
        <button
          onClick={() => {
            setSecilenOgr();
            setEditLesson();
            setNewLesson();
            setNewHoca();
            setNewOgrenci();
            setNewRapor(1);
          }}
          style={{ margin: 10 }}
          className="lesson-item-edit-btn"
        >
          RAPOR PANELİ
        </button>
        <button
          onClick={() => {
            
            setLoginInfo({ isLoggedIn: 0, user: undefined });
          }}
          style={{ margin: 10 }}
          className="lesson-item-edit-btn"
        >
          ÇIKIŞ YAP
        </button>
        <LessonList
          setNewLesson={setNewLesson}
          setEditLesson={setEditLesson}
          lessons={lessons}
          setLessons={setLessons}
          setHocalar={setHocalar}
          setNewHoca={setNewHoca}
          setNewOgrenci={setNewOgrenci}
          setNewRapor={setNewRapor}
          setSecilenOgr={setSecilenOgr}

          
        />

        {editLesson && (
          <LessonEdit
            title="DERS DÜZENLE"
            editLesson={editLesson}
            setEditLesson={setEditLesson}
            saveFunction={saveFunction}
            hocalar={hocalar}
          />
        )}
        {newLesson && (
          <LessonEdit
            title="YENİ DERS EKLE"
            editLesson={newLesson}
            setEditLesson={setNewLesson}
            saveFunction={insertNewFunction}
            hocalar={hocalar}
          />
        )}

        {newHoca && (
          <div className="div-cerceve2">

          <div className="admin-lesson-edit-list">
            <h2>HOCA EKLE</h2>
            <label>Hoca Adı</label>
            <input
              className="admin-lesson-input"
              onChange={(e) => {
                setNewHoca({ ...newHoca, name: e.target.value });
              }}
              type="text"
            ></input>
            <label>Hoca Soyadı</label>
            <input
              className="admin-lesson-input"
              onChange={(e) => {
                setNewHoca({ ...newHoca, surname: e.target.value });
              }}
              type="text"
            ></input>
            <button
              className="lesson-item-edit-btn"
              onClick={() => {
                if (newHoca.name != "" && newHoca.surname != "") {
                  setNewHoca();
                  hocalariEkle(newHoca);
                } else {
                  alert("Doldurulmamış Yer Vardır!");
                }
              }}
            >
              Ekle
            </button>
            <button
              className="lesson-item-remove-btn"
              onClick={() => {
                setNewHoca();
              }}
            >
              İptal
            </button>
          </div>
          </div>
        )}

        {newOgrenci && (
          <div className="div-cerceve2">
            
          <div className="admin-lesson-edit-list">
            <h2>ÖĞRENCİ EKLE</h2>
            <label>Sınıf</label>
            <input
              className="admin-lesson-input"
              value={newOgrenci.grade}
              onChange={(e) => {
                setNewOgrenci({ ...newOgrenci, grade: Number(e.target.value) });
              }}
              type="text"
            ></input>
            <label>Kredi</label>
            <input
              value={newOgrenci.requiredCredit}
              className="admin-lesson-input"
              onChange={(e) => {
                setNewOgrenci({
                  ...newOgrenci,
                  requiredCredit: Number(e.target.value),
                });
              }}
              type="text"
            ></input>
            <label>Öğrenci Adı</label>
            <input
              className="admin-lesson-input"
              onChange={(e) => {
                setNewOgrenci({ ...newOgrenci, name: e.target.value });
              }}
              type="text"
            ></input>
            <label>Öğrenci Soyadı</label>
            <input
              className="admin-lesson-input"
              onChange={(e) => {
                setNewOgrenci({ ...newOgrenci, surname: e.target.value });
              }}
              type="text"
            ></input>
            <label>Öğrenci Numarası</label>
            <input
              className="admin-lesson-input"
              onChange={(e) => {
                setNewOgrenci({ ...newOgrenci, number: e.target.value });
              }}
              type="text"
            ></input>
            <label>Öğrenci Şifresi</label>
            <input
              type="password"
              className="admin-lesson-input"
              onChange={(e) => {
                setNewOgrenci({ ...newOgrenci, password: e.target.value });
              }}
            ></input>
            <button
              className="lesson-item-edit-btn"
              onClick={() => {
                if (
                  newOgrenci.grade != "" &&
                  newOgrenci.requiredCredit != "" &&
                  newOgrenci.name != "" &&
                  newOgrenci.surname != "" &&
                  newOgrenci.no != "" &&
                  newOgrenci.password != ""
                ) {
                  setNewOgrenci();
                  ogrenciEkle(newOgrenci);
                } else {
                  alert("Doldurulmamış Yer Vardır!");
                }
              }}
            >
              Ekle
            </button>
            <button
              className="lesson-item-remove-btn"
              onClick={() => {
                setNewOgrenci();
              }}
            >
              İptal
            </button>
          </div>
          </div>
        )}

        {newRapor && (
          <div className="div-cerceve2">
            <h1>Rapor Paneli</h1>
            <div className="admin-lesson-edit-list-item">
            <span>ÖĞRENCİ SEÇİNİZ</span>
            <select 
            className="input2"
            onChange={(e) => {
              if(e.target.value!=""){
                const secilenkisi = users.filter((x) => x.number == e.target.value);
                setSecilenOgr(secilenkisi[0]);
                console.log(secilenkisi[0])
                }
              }
            }
            >
            {ogrenciler}
            </select>
            {secilenOgr &&(
              <div >
                <h2>Öğrenci Adı Soyadı</h2>
                <h2>{secilenOgr.name+" "+secilenOgr.surname}</h2>
                <h2>Seçtiği Dersler</h2>
                <LessonListOgrenci
                  lessons={secilenOgr.lessons}
                />
                {!secilenOgr.lessons.length&&(
                  <h1 className="h1-warning">Ders Seçmemiştir.</h1>
                )}
            
            </div>
            )}
          </div>
      
          <button
                onClick={() => {
                  setNewRapor();
                  setSecilenOgr();
                }}
                style={{ margin: 10 }}
                className="lesson-item-edit-btn"
              >
              KAPAT
            </button>
            </div>
        )}  
        
        <br/>
        <br/>
        <br/>
      </div>
    </div>
  );
};

export default Admin;
