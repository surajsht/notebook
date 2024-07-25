import { useNavigate } from "react-router-dom";
import { InvokeContext } from "../../context/Context";

const ProtectedRoute = ({ children }) => {
  const { currentUser, profileLoading } = InvokeContext();
  const navigate = useNavigate();

  if (profileLoading) return <h1> Loading... </h1>;

  if (!currentUser) return navigate("/signin");

  return children;
};

export default ProtectedRoute;
