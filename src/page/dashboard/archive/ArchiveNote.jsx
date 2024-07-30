import { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { GoTrash } from "react-icons/go";
import { RiPushpin2Line } from "react-icons/ri";
import { InvokeContext } from "../../../context/Context";
import { db } from "../../../fireConfig/FireConfig";
import { arrayUnion, doc, onSnapshot, updateDoc } from "firebase/firestore";

const ArchiveNote = () => {
  const [archiveNoteLoading, setArchiveNoteLoading] = useState(true);
  const [archiveNotes, setArchiveNotes] = useState([]);

  const { gridLayout, currentUser, pinPost } = InvokeContext();

  const userRef = doc(db, "users", `${currentUser?.email}`);

  useEffect(() => {
    onSnapshot(userRef, (doc) => {
      setArchiveNotes(doc.data()?.draftNotes);
      setArchiveNoteLoading(false);
    });
  }, [currentUser.email]);

  const pinNote = async (id) => {
    try {
      let updatePin = archiveNotes.map((note) => {
        if (note.id === id) {
          return {
            ...note,
            pinned: !note.pinned,
          };
        }

        return note;
      });
      await updateDoc(userRef, {
        draftNotes: updatePin,
      });
    } catch (e) {
      console.log(e);
    }
  };

  const deleteNote = async (id) => {
    let newNotes = archiveNotes.filter((note) => note.id !== id);
    let findDelNote = archiveNotes.find((note) => note.id === id);
    try {
      await updateDoc(userRef, {
        draftNotes: newNotes,
      });
      await updateDoc(userRef, {
        trashNotes: arrayUnion(findDelNote),
      });
    } catch (e) {
      console.log(e);
    }
  };

  if (archiveNoteLoading) return <h2> Loading... </h2>;

  return (
    <div
      className={`note-container ${
        gridLayout ? "grid-layout" : "list-layout"
      } ${pinPost ? "show-pinned" : ""}`}
    >
      {archiveNotes.map((item) => {
        let { id, title, desc, category, pinned } = item;

        return (
          <div
            key={id}
            className={`note-item ${pinPost && pinned ? "pinned-note" : ""}`}
          >
            <RiPushpin2Line
              className={`${pinned ? "active" : ""}`}
              onClick={() => pinNote(id)}
            />

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
                <FaEdit />
                <GoTrash onClick={() => deleteNote(id)} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ArchiveNote;
