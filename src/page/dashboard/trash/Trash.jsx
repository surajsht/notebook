import Main from "../../../component/main/Main";
import NotePopup from "../../../component/notePopup/NotePopup";
import Sidebar from "../../../component/sidebar/Sidebar";
import { InvokeContext } from "../../../context/Context";
import TrashMain from "./TrashMain";

const Trash = () => {
  const { sidebarActive } = InvokeContext();

  return (
    <div className={`profile-container ${sidebarActive ? "active" : ""}`}>
      <Sidebar />
      <NotePopup />
      <TrashMain />
    </div>
  );
};

export default Trash;
