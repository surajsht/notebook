import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./page/auth/Signin";
import Signup from "./page/auth/Signup";
import Profile from "./page/profile/Profile";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
