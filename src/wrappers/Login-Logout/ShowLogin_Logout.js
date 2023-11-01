import { useSelector } from "react-redux";

export const ShowOnLogin = ({ children }) => {
  const login = useSelector((state) => state.auth.isLoggedIn);
  if (login) {
    return <>{children}</>;
  }
  return null;
};

export const ShowOnLogout = ({ children }) => {
  const login = useSelector((state) => state.auth.isLoggedIn);
  if (!login) {
    return <>{children}</>;
  }
  return null;
};
