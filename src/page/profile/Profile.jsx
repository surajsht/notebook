import Main from "../../component/main/Main";
import NotePopup from "../../component/notePopup/NotePopup";
import Sidebar from "../../component/sidebar/Sidebar";
import { InvokeContext } from "../../context/Context";
import "./profile.css";

const Profile = () => {
  const { sidebarActive } = InvokeContext();

  return (
    <div className={`profile-container ${sidebarActive ? "active" : ""}`}>
      <Sidebar />
      <NotePopup />
      <Main />
    </div>
  );
};

export default Profile;
