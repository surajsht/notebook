import NotePopup from "../../../component/notePopup/NotePopup";
import Sidebar from "../../../component/sidebar/Sidebar";
import { InvokeContext } from "../../../context/Context";
import ArchiveMain from "./ArchiveMain";

const Archive = () => {
  const { sidebarActive } = InvokeContext();

  return (
    <div className={`profile-container ${sidebarActive ? "active" : ""}`}>
      <Sidebar />
      <NotePopup />
      <ArchiveMain />
    </div>
  );
};

export default Archive;
