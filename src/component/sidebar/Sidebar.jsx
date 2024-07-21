import { Link } from "react-router-dom";
import { GoTrash } from "react-icons/go";
import { IoArchiveOutline } from "react-icons/io5";
import { SlNote } from "react-icons/sl";
import { FaPlus, FaSignOutAlt, FaRegUserCircle } from "react-icons/fa";
import { InvokeContext } from "../../context/Context";
import "./sidebar.css";

const Sidebar = () => {
  const { setNotePopupState, setSidebarActive } = InvokeContext();

  const AddNewNote = () => {
    setNotePopupState(true);
    setSidebarActive(false);
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-content-top">
        <h1 className="logo"> NoteBook </h1>

        <div className="sidebar-option-container">
          <div className="sidebar-top-option">
            <Link to="">
              <SlNote />
              <span className="sidebar-action-label">All Notes</span>
            </Link>
          </div>
          <div className="sidebar-top-option">
            <Link to="">
              <IoArchiveOutline />
              <span className="sidebar-action-label">Archive</span>
            </Link>
          </div>
          <div className="sidebar-top-option">
            <Link to="">
              <GoTrash />
              <span className="sidebar-action-label">Trash</span>
            </Link>
          </div>
        </div>

        <button
          className="btn profile-primary-btn"
          onClick={() => AddNewNote()}
        >
          <FaPlus />
          <span className="sidebar-action-label">Add New Note</span>
        </button>
      </div>

      <div className="sidebar-content-bottom">
        <h2 className="profile-user-info">
          <FaRegUserCircle />
          <span className="sidebar-action-label">username</span>
        </h2>

        <button className="btn profile-secondary-btn">
          <FaSignOutAlt />
          <span className="sidebar-action-label">Sign Out</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
