import { useNavigate } from "react-router-dom";
import { InvokeContext } from "../../context/Context";
import { useEffect } from "react";

const ProtectedRoute = ({ children }) => {
  const { currentUser, profileLoading } = InvokeContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser && !profileLoading) {
      navigate("/signin");
    }
  }, [profileLoading, currentUser, navigate]);

  if (profileLoading) return <h1> Loading... </h1>;

  return currentUser ? children : null;
};

export default ProtectedRoute;
