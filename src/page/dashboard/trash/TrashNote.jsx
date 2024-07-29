import { useState, useEffect } from "react";
import { GoTrash } from "react-icons/go";
import { db } from "../../../fireConfig/FireConfig";
import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import { InvokeContext } from "../../../context/Context";

const TrashNote = () => {
  const [trashNoteLoading, setTrashNoteLoading] = useState(true);
  const [trashNotes, setTrashNotes] = useState([]);

  const { gridLayout, currentUser } = InvokeContext();

  const userRef = doc(db, "users", `${currentUser.email}`);

  useEffect(() => {
    setTrashNoteLoading(true);
    onSnapshot(doc(db, "users", `${currentUser?.email}`), (doc) => {
      setTrashNotes(doc.data()?.trashNotes);
      setTrashNoteLoading(false);
    });
  }, [currentUser.email]);

  const deleteNote = async (id) => {
    let newNotes = trashNotes.filter((note) => note.id !== id);
    try {
      await updateDoc(userRef, {
        trashNotes: newNotes,
      });
    } catch (e) {
      console.log(e);
    }
  };

  if (trashNoteLoading) return <h2> Loading... </h2>;

  return (
    <div
      className={`note-container ${gridLayout ? "grid-layout" : "list-layout"}`}
    >
      {trashNotes.map((item) => {
        let { id, title, desc, category } = item;

        return (
          <div key={id} className={`note-item`}>
            <div className="note-item-top">
              <h2 className="note-title">{title}</h2>

              <p className="note-description">{desc}</p>
            </div>

            <div className="note-item-middle">
              {category?.map((cat, idx) => {
                return <span key={idx}> {cat} </span>;
              })}
            </div>

            <div className="note-item-bottom">
              <span className="note-time"> time </span>

              <div className="note-btn-group">
                <GoTrash onClick={() => deleteNote(id)} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TrashNote;
