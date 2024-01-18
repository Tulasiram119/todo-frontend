import React, { useEffect } from "react";
import { useAppContext } from "../utils/Context";

const Logout = () => {
  const { setAuthenticated } = useAppContext();
  useEffect(() => {
    setAuthenticated(false);
    localStorage.clear();
  });
  return (
    <div className="w-full h-full bg-black">
      <h1>Big nothing</h1>
    </div>
  );
};

export default Logout;
