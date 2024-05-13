import { useSelector } from "react-redux";

export default function PrivateLayout({ children }) {
  const { users } = useSelector((state) => state.reducerLogin);

  return users ? children : ( alert("You're not signed in") || (window.location.href = "/"));
}
