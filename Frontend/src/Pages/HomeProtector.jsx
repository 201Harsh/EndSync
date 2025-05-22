import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AxiosInstance from "../Config/Axios";
import { Bounce, toast } from "react-toastify";
import Loader from "../Animations/Loader";

const HomeProtector = ({ children }) => {
  const Navigate = useNavigate();
  const [IsLoading, setIsLoading] = useState(true);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const checkUser = async () => {
      if (!token) {
        Navigate("/");
        return;
      }

      try {
        const res = await AxiosInstance.get("/users/getProfile");

        localStorage.setItem("name", res.data.name);

        if (res.status === 200) {
          setTimeout(() => {
            setIsLoading(false);
          }, 5000);
        } else {
          localStorage.removeItem("token");
          Navigate("/register");
        }
      } catch (error) {
        toast.error(error.response.data.error, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        });
      }
    };

    checkUser();
  }, [token, Navigate]);

  if (IsLoading) {
    return (
      <>
        <Loader />
      </>
    );
  }

  return <>{children}</>;
};

export default HomeProtector;
