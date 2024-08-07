import { Link, NavLink } from "react-router-dom";
import { GoTrash } from "react-icons/go";
import { IoArchiveOutline } from "react-icons/io5";
import { SlNote } from "react-icons/sl";
import { FaPlus, FaSignOutAlt, FaRegUserCircle } from "react-icons/fa";
import { InvokeContext } from "../../context/Context";
import { auth } from "../../fireConfig/FireConfig";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "./sidebar.css";

const Sidebar = () => {
  const { setNotePopupState, setSidebarActive } = InvokeContext();
  const navigate = useNavigate();

  const AddNewNote = () => {
    setNotePopupState(true);
    setSidebarActive(false);
  };

  const signOutUser = async () => {
    try {
      await signOut(auth);
      navigate("/signin");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-content-top">
        <h1 className="logo"> NoteBook </h1>

        <div className="sidebar-option-container">
          <div className="sidebar-top-option">
            <NavLink to="/">
              <SlNote />
              <span className="sidebar-action-label">All Notes</span>
            </NavLink>
          </div>
          <div className="sidebar-top-option">
            <NavLink to="/archive">
              <IoArchiveOutline />
              <span className="sidebar-action-label">Archive</span>
            </NavLink>
          </div>
          <div className="sidebar-top-option">
            <NavLink to="/trash">
              <GoTrash />
              <span className="sidebar-action-label">Trash</span>
            </NavLink>
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
          <span className="sidebar-action-label">
            {auth.currentUser.displayName}
          </span>
        </h2>

        <button className="btn profile-secondary-btn" onClick={signOutUser}>
          <FaSignOutAlt />
          <span className="sidebar-action-label">Sign Out</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
