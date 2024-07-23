import { InvokeContext } from "../../context/Context";
import { IoCloseSharp, IoArchiveOutline } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";
import "./notePopup.css";
import { useState } from "react";
import { db } from "../../fireConfig/FireConfig";
import { doc, updateDoc, arrayUnion } from "firebase/firestore";

const NotePopup = () => {
  const [noteTitle, setNoteTitle] = useState("");
  const [noteDesc, setNoteDesc] = useState("");
  const [noteCategory, setNoteCategory] = useState("");
  const [noteCategoryList, setNoteCategoryList] = useState([]);
  const [noteTags, setNoteTags] = useState("");
  const [noteTagsList, setNoteTagsList] = useState([]);
  const { currentUser } = InvokeContext();

  const { notePopupState, setNotePopupState } = InvokeContext();
  const userDocRef = doc(db, "users", `${currentUser.email}`);

  const getNoteCategoryList = (e) => {
    if (e.key === " ") {
      e.preventDefault();

      if (noteCategory.trim() !== "") {
        setNoteCategoryList([...noteCategoryList, noteCategory.trim()]);
        setNoteCategory("");
      }
    }
  };

  const getNoteTagsList = (e) => {
    if (e.key === " ") {
      e.preventDefault();

      if (noteTags.trim() !== "") {
        setNoteTagsList([...noteTagsList, noteTags.trim()]);
        setNoteTags("");
      }
    }
  };

  const addNewNote = async (task) => {
    const random4DigitNumber = Math.floor(1000 + Math.random() * 9000);

    if (!noteTitle && !noteDesc && !getNoteCategoryList && !noteTagsList)
      return alert("Please Enter Some Data");

    try {
      if (task === "addNote") {
        await updateDoc(userDocRef, {
          allNotes: arrayUnion({
            id: random4DigitNumber,
            title: noteTitle,
            desc: noteDesc,
            category: noteCategoryList,
            tag: noteTagsList,
          }),
        });
      } else {
        await updateDoc(userDocRef, {
          draftNotes: arrayUnion({
            id: random4DigitNumber,
            title: noteTitle,
            desc: noteDesc,
            category: noteCategoryList,
            tag: noteTagsList,
          }),
        });
      }
      alert("Note added successfully");
      setNoteTitle("");
      setNoteDesc("");
      setNoteCategoryList([]);
      setNoteTagsList([]);
      setNotePopupState(false);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className={`note-popup ${notePopupState ? "active" : ""}`}>
      <form className="note-popup-form" onSubmit={(e) => e.preventDefault()}>
        <button
          className="note-popup-close"
          onClick={() => setNotePopupState(false)}
        >
          <IoCloseSharp />
        </button>

        <div className="note-popup-form-item">
          <label htmlFor="title"> Note title </label>
          <input
            type="text"
            placeholder="Title"
            value={noteTitle}
            onChange={(e) => setNoteTitle(e.target.value)}
          />
        </div>

        <div className="note-popup-form-item">
          <label htmlFor="desc"> Note content </label>
          <textarea
            placeholder="Take a note..."
            value={noteDesc}
            onChange={(e) => setNoteDesc(e.target.value)}
          ></textarea>
        </div>

        <div className="note-popup-form-item">
          <label htmlFor="title"> Category </label>
          <div className="popup-category-tag-container">
            {noteCategoryList.map((item, idx) => {
              return (
                <span key={idx} className="popup-category-tag-item">
                  {item}
                  <button className="category-tag-item-delete">
                    <IoCloseSharp />
                  </button>
                </span>
              );
            })}
            <input
              type="text"
              placeholder="Add a category"
              value={noteCategory}
              onChange={(e) => setNoteCategory(e.target.value)}
              onKeyDown={(e) => getNoteCategoryList(e)}
            />
          </div>
        </div>

        <div className="note-popup-form-item">
          <label htmlFor="title"> Tags </label>
          <div className="popup-category-tag-container">
            {noteTagsList.map((item, idx) => {
              return (
                <span key={idx} className="popup-category-tag-item">
                  {item}
                  <button className="category-tag-item-delete">
                    <IoCloseSharp />
                  </button>
                </span>
              );
            })}
            <input
              type="text"
              placeholder="Add a Tag"
              value={noteTags}
              onChange={(e) => setNoteTags(e.target.value)}
              onKeyDown={(e) => getNoteTagsList(e)}
            />
          </div>
        </div>

        <div className="popup-btn-group">
          <button
            type="submit"
            className="note-popup-btn"
            onClick={() => addNewNote("addNote")}
          >
            <IoMdAdd />
            Add Note
          </button>

          <button
            type="submit"
            className="note-popup-btn"
            onClick={() => addNewNote("draftNote")}
          >
            <IoArchiveOutline />
            Save to draft
          </button>
        </div>
      </form>
    </div>
  );
};

export default NotePopup;
