import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./page/auth/Signin";
import Signup from "./page/auth/Signup";
import Profile from "./page/profile/Profile";
import ProtectedRoute from "./component/protectedRoute/ProtectedRoute";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
