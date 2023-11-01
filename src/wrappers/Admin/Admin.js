import { useSelector } from "react-redux";

const Admin = ({ children }) => {
  const login = useSelector((state) => state.auth.isLoggedIn);
  const email = useSelector((state) => state.auth.user.email);
  const admin = email === process.env.REACT_APP_ADMIN_EMAIL;
  if (login && admin) {
    return <>{children}</>;
  }

  return null;
};

export default Admin;
