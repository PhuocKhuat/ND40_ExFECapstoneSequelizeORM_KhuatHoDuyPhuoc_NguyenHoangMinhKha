import { useSelector } from "react-redux";

export default function SecureGate({children}) {
  const { users } = useSelector((state) => state.reducerLogin);
  // console.log("🚀 ~ SecureGate ~ users:", users);

  return ((!users || users.data.role === "user") ? window.location.href = "/" : children);
}
