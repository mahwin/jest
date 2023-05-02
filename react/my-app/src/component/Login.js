import { useState } from "react";

export default function Login() {
  const [isLogin, setIsLogin] = useState(false);

  function OnClickHandler() {
    setIsLogin(!isLogin);
  }

  return (
    <button onClick={OnClickHandler}>{isLogin ? "Logout" : "Login"}</button>
  );
}
