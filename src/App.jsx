import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./page/auth/Signin";
import Signup from "./page/auth/Signup";
import Profile from "./page/profile/Profile";
import ProtectedRoute from "./component/protectedRoute/ProtectedRoute";

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
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
