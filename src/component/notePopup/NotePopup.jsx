import { InvokeContext } from "../../context/Context";
import { IoCloseSharp, IoArchiveOutline } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";
import "./notePopup.css";

const NotePopup = () => {
  const { notePopupState, setNotePopupState } = InvokeContext();

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
          <input type="text" placeholder="Title" />
        </div>

        <div className="note-popup-form-item">
          <label htmlFor="desc"> Note content </label>
          <textarea placeholder="Take a note..."></textarea>
        </div>

        <div className="note-popup-form-item">
          <label htmlFor="title"> Category </label>
          <div className="popup-category-tag-container">
            <input type="text" placeholder="Add a category" />
          </div>
        </div>

        <div className="note-popup-form-item">
          <label htmlFor="title"> Tags </label>
          <div className="popup-category-tag-container">
            <input type="text" placeholder="Add a Tag" />
          </div>
        </div>

        <div className="popup-btn-group">
          <button type="submit" className="note-popup-btn">
            <IoMdAdd />
            Add Note
          </button>

          <button type="submit" className="note-popup-btn">
            <IoArchiveOutline />
            Save to draft
          </button>
        </div>
      </form>
    </div>
  );
};

export default NotePopup;
