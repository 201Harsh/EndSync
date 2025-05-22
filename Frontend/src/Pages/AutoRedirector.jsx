import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Start from "./Start";
const AutoRedirector = () => {
  const token = localStorage.getItem("token");
  const [Istoken, setIstoken] = useState(false);
  const Navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      setIstoken(true);
    } else {
      Navigate("/home");
    }
  }, [token, Navigate]);

  if (Istoken) {
    return <Start />;
  }
};

export default AutoRedirector;
