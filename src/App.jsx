import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./page/auth/Signin";
import Signup from "./page/auth/Signup";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
