import {
  LockClosedIcon,
  ArrowRightCircleIcon,
} from "@heroicons/react/20/solid";
import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import AxiosInstance from "../Config/Axios";
import { Bounce, toast } from "react-toastify";

const OTPVerification = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputRefs = useRef([]);

  const Navigate = useNavigate();

  const email = localStorage.getItem("email");

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    // Focus next input if value entered
    if (element.value && index < 3 && element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    // Handle backspace/delete
    if (e.key === "Backspace" || e.key === "Delete") {
      e.preventDefault();
      const newOtp = [...otp];

      // If current field is empty, move to previous field and clear it
      if (!e.target.value && index > 0) {
        newOtp[index - 1] = "";
        setOtp(newOtp);
        inputRefs.current[index - 1].focus();
      } else {
        // Clear current field
        newOtp[index] = "";
        setOtp(newOtp);
      }
    }

    // Handle left arrow key
    if (e.key === "ArrowLeft" && index > 0) {
      inputRefs.current[index - 1].focus();
    }

    // Handle right arrow key
    if (e.key === "ArrowRight" && index < 3) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const enteredOtp = otp.join("");

    // Add your OTP verification logic here

    try {
      const response = await AxiosInstance.post("/users/verify", {
        email,
        otp: enteredOtp,
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
          localStorage.removeItem("email");
        }, 1000);
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

  // Auto-focus first input on mount
  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden">
      {/* Header */}
      <header className="px-6 py-4">
        <div className="flex items-center">
          <LockClosedIcon className="h-8 w-8 text-indigo-400" />
          <span className="ml-2 text-2xl font-bold text-white">EndSync</span>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center h-[calc(100vh-80px)] px-4 py-8">
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 shadow-lg max-w-md w-full">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-white mb-2">
              Verify Your Account
            </h1>
            <p className="text-gray-400">
              We've sent a 4-digit code to your email
            </p>
            <p className="text-indigo-400 font-medium mt-1">{email}</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex justify-center space-x-4">
              {otp.map((data, index) => (
                <input
                  key={index}
                  ref={(el) => (inputRefs.current[index] = el)}
                  type="text"
                  maxLength="1"
                  value={data}
                  onChange={(e) => handleChange(e.target, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  onFocus={(e) => e.target.select()}
                  className="w-16 h-16 text-center text-2xl font-bold bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                />
              ))}
            </div>

            <div className="text-center text-sm text-gray-400">
              Didn't receive code?{" "}
              <button
                type="button"
                className="font-medium text-indigo-400 hover:text-indigo-300 hover:underline transition-colors"
              >
                Resend
              </button>
            </div>

            <button
              type="submit"
              className="w-full flex justify-center items-center py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-800 disabled:opacity-50"
              disabled={otp.some((digit) => digit === "")}
            >
              Verify OTP
              <ArrowRightCircleIcon className="ml-2 h-5 w-5" />
            </button>
          </form>
          <div className="mt-6 text-center text-sm text-gray-400">
            Wrong email?{" "}
            <Link
              to="/register"
              className="font-medium text-indigo-400 hover:text-indigo-300 hover:underline transition-colors"
            >
              Change email address
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OTPVerification;
