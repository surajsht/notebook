import { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { GoTrash } from "react-icons/go";
import { RiPushpin2Line } from "react-icons/ri";
import { InvokeContext } from "../../context/Context";
import { db } from "../../fireConfig/FireConfig";
import { doc, onSnapshot } from "firebase/firestore";
import "./note.css";

const Note = () => {
  const [allnoteLoading, setAllNoteLoading] = useState(true);

  const { gridLayout, currentUser, currentNotes, setCurrentNotes } =
    InvokeContext();

  useEffect(() => {
    onSnapshot(doc(db, "users", `${currentUser?.email}`), (doc) => {
      setCurrentNotes(doc.data()?.allNotes);
      setAllNoteLoading(false);
    });
  }, [currentUser.email]);

  if (allnoteLoading) return <h2> Loading... </h2>;

  return (
    <div
      className={`note-container ${gridLayout ? "grid-layout" : "list-layout"}`}
    >
      {currentNotes.map((item) => {
        let { id, title, desc, category, pinned } = item;

        return (
          <div key={id} className="note-item">
            <RiPushpin2Line className={`${pinned ? "active" : ""}`} />

            <div className="note-item-top">
              <h2 className="note-title">{title}</h2>

              <p className="note-description">{desc}</p>
            </div>

            <div className="note-item-middle">
              {category.map((cat, idx) => {
                return <span key={idx}> {cat} </span>;
              })}
            </div>

            <div className="note-item-bottom">
              <span className="note-time"> time </span>

              <div className="note-btn-group">
                <FaEdit />
                <GoTrash />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Note;
