import NotePopup from "../../component/notePopup/NotePopup";
import Sidebar from "../../component/sidebar/Sidebar";
import "./profile.css";

const Profile = () => {
  return (
    <div className="profile-container">
      <Sidebar />
      <NotePopup />
    </div>
  );
};

export default Profile;
