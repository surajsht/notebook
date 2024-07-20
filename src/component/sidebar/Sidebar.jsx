import { Link } from "react-router-dom";
import { GoTrash } from "react-icons/go";
import { IoArchiveOutline } from "react-icons/io5";
import { SlNote } from "react-icons/sl";
import { FaBars } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h1 className="logo"> NoteBook </h1>

      <div className="aside-content-top">
        <div className="aside-top-item">
          <FaBars />
          <MdKeyboardArrowRight />
        </div>
        <div className="aside-top-item">
          <Link to="">
            <SlNote />
            All Notes
          </Link>
        </div>
        <div className="aside-top-item">
          <Link to="">
            <IoArchiveOutline />
            Archive
          </Link>
        </div>
        <div className="aside-top-item">
          <Link to="">
            <GoTrash />
            Trash
          </Link>
        </div>
      </div>

      <div className="aside-content-middle">
        <button className="btn primary-btn-with-icon">
          <FaPlus />
          Add New Note
        </button>
      </div>

      <div className="aside-content-bottom">
        <h2 className="profile-user-info">
          <FaRegUserCircle />
          username
        </h2>

        <button className="btn secondary-btn-with-icon">
          <FaSignOutAlt />
          Sign Out
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
