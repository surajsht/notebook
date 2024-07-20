import { Link } from "react-router-dom";
import { GoTrash } from "react-icons/go";
import { IoArchiveOutline } from "react-icons/io5";
import { SlNote } from "react-icons/sl";
import { FaBars } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h1 className="logo"> NoteBook </h1>

      <div className="aside-content-container">
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
      </div>
    </aside>
  );
};

export default Sidebar;
