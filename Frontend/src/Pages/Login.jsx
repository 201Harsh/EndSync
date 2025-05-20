import {
  CloudArrowUpIcon,
  UserIcon,
  EnvelopeIcon,
  LockClosedIcon,
  ArrowRightCircleIcon,
  EyeSlashIcon,
  EyeIcon,
} from "@heroicons/react/20/solid";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AxiosInstance from "../Config/Axios";
import { Bounce, toast } from "react-toastify";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const Navigate = useNavigate();

  const HandleForm = async (e) => {
    e.preventDefault();
    try {
      const response = await AxiosInstance.post("/users/login", {
        email,
        password,
      });
      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        toast.success(response.data.msg, {
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
        setTimeout(() => {
          Navigate("/home");
        }, 1000);
        setemail("");
        setpassword("");
      }
    } catch (error) {
      console.log(error);
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
      const errors = error.response.data.errors;
      if (
        errors.forEach((e) => {
          toast.error(e.msg, {
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
        })
      );
    }
  };

  return (
    <div className="min-h-screen md:h-screen md:w-screen bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden">
      {/* Header */}
      <header className="px-6 py-4">
        <div className="flex items-center">
          <CloudArrowUpIcon className="h-8 w-8 text-indigo-400" />
          <span className="ml-2 text-2xl font-bold text-white">EndSync</span>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-center h-full md:h-screen p-2">
        {/* Left Side - Graphic */}
        <div className="md:w-1/2 flex flex-col items-center justify-center mb-10 md:mt-0 mt-10 md:mb-0">
          <div className="w-32 h-32 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 p-1">
            <div className="w-full h-full bg-gray-800 rounded-full flex items-center justify-center overflow-hidden">
              <img
                src="/harsh.jpg"
                alt="Welcome"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <p className="text-gray-300 mt-6 text-center max-w-md px-4">
            Secure cloud storage solution for professionals and businesses
          </p>
          <p className="text-sm text-gray-400 mt-4">
            Made with ❤️ by{" "}
            <a
              href="https://www.instagram.com/201harshs/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-500 hover:from-teal-300 hover:to-cyan-400 transition-colors"
            >
              Harsh
            </a>
          </p>
        </div>

        {/* Right Side - Form */}
        <div className="md:w-1/2 max-w-md w-full">
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 shadow-lg">
            <h1 className="text-2xl font-bold text-white mb-2">
              Login to your Account
            </h1>
            <p className="text-gray-400 mb-6">
              Welcome back! Please enter your details.
            </p>

            <form onSubmit={HandleForm} className="space-y-5">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Email
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <EnvelopeIcon className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                    required
                    className="w-full pl-10 pr-3 py-2.5 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <LockClosedIcon className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    required
                    value={password}
                    onChange={(e) => setpassword(e.target.value)}
                    className="w-full pl-10 pr-10 py-2.5 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-300 transition-colors"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                  >
                    {showPassword ? (
                      <EyeSlashIcon className="h-5 w-5" />
                    ) : (
                      <EyeIcon className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full cursor-pointer flex justify-center items-center py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                LogIn
                <ArrowRightCircleIcon className="ml-2 h-5 w-5" />
              </button>
            </form>

            <div className="mt-6 text-center text-sm text-gray-400">
              New Here? Create Account{" "}
              <Link
                to="/register"
                className="font-medium text-indigo-400 hover:text-indigo-300 hover:underline transition-colors"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
