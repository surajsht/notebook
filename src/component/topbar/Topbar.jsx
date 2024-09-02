import { FaBarsStaggered } from "react-icons/fa6";
import { IoSearch, IoGridOutline } from "react-icons/io5";
import { CiGrid2H } from "react-icons/ci";
import { RiPushpin2Line } from "react-icons/ri";
import { MdOutlineWbSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa6";
import { InvokeContext } from "../../context/Context";
import "./topbar.css";
import { useEffect } from "react";

const Topbar = () => {
  const {
    gridLayout,
    setGridLayout,
    sidebarActive,
    setSidebarActive,
    pinPost,
    setPinPost,
    darkMode,
    setDarkMode,
  } = InvokeContext();

  const showPinnedPost = () => {
    setPinPost(!pinPost);
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("darkmode");
    } else {
      document.body.classList.remove("darkmode");
    }
  }, [darkMode]);

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

        <RiPushpin2Line
          className={`${pinPost ? "active" : ""} `}
          onClick={showPinnedPost}
        />
      </div>

      <div className={`topbar-right ${darkMode ? "darkmode" : ""}`}>
        <div className="dark-light" onClick={() => toggleTheme()}>
          <MdOutlineWbSunny className="light" />
          <FaMoon className="dark" />
        </div>

        <div
          className={`${gridLayout ? "grid-layout" : "list-layout"}`}
          onClick={() => setGridLayout(!gridLayout)}
        >
          <CiGrid2H className="list-layout" />
          <IoGridOutline className="grid-layout" />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
