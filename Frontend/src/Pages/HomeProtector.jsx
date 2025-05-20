import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AxiosInstance from "../Config/Axios";
import { Bounce, toast } from "react-toastify";

const HomeProtector = ({ children }) => {
  const Navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    const checkUser = async () => {
      if (!token) {
        Navigate("/home");
        return;
      }

      try {
        const res = await AxiosInstance.get("/users/getProfile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (res.status === 200) {
          Navigate("/home");
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

  return <>{children}</>;
};

export default HomeProtector;
