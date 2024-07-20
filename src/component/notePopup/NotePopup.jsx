import { InvokeContext } from "../../context/Context";
import { IoCloseSharp } from "react-icons/io5";
import "./notePopup.css";

const NotePopup = () => {
  const { notePopupState } = InvokeContext();

  return (
    <div className={`note-popup ${notePopupState ? "active" : ""}`}>
      <form className="note-popup-form">
        <button className="note-popup-close">
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
          <div className="popup-category-container">
            <input type="text" placeholder="Add a category" />
          </div>
        </div>

        <button type="submit" className="note-popup-btn">
          Add
        </button>
      </form>
    </div>
  );
};

export default NotePopup;
