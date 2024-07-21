import { FaBarsStaggered } from "react-icons/fa6";
import { IoSearch, IoGridOutline } from "react-icons/io5";
import { CiGrid2H } from "react-icons/ci";
import { RiPushpin2Line } from "react-icons/ri";
import { InvokeContext } from "../../context/Context";
import "./topbar.css";

const Topbar = () => {
  const { gridLayout, setGridLayout, sidebarActive, setSidebarActive } =
    InvokeContext();

  return (
    <div className="topbar-container">
      <FaBarsStaggered onClick={() => setSidebarActive(!sidebarActive)} />

      <div className="topbar-middle">
        <form className="topbar-form">
          <input type="text" placeholder="Search" />
          <button type="submit" className="topbar-btn">
            <IoSearch />
          </button>
        </form>

        <RiPushpin2Line />
      </div>

      <div
        className={`topbar-right ${gridLayout ? "grid-layout" : "list-layout"}`}
        onClick={() => setGridLayout(!gridLayout)}
      >
        <CiGrid2H className="list-layout" />
        <IoGridOutline className="grid-layout" />
      </div>
    </div>
  );
};

export default Topbar;
