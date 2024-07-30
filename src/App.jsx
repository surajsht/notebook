import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./page/auth/Signin";
import Signup from "./page/auth/Signup";
import Profile from "./page/dashboard/profile/Profile";
import ProtectedRoute from "./component/protectedRoute/ProtectedRoute";
import Trash from "./page/dashboard/trash/Trash";
import Archive from "./page/dashboard/archive/Archive";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/trash"
          element={
            <ProtectedRoute>
              <Trash />
            </ProtectedRoute>
          }
        />
        <Route
          path="/archive"
          element={
            <ProtectedRoute>
              <Archive />
            </ProtectedRoute>
          }
        />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
