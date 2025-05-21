import { useState, useEffect } from "react";
import { CloudArrowUpIcon } from "@heroicons/react/20/solid";

const Loader = () => {
  const [progress, setProgress] = useState(0);
  const [dots, setDots] = useState("");

  useEffect(() => {
    // Progress animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    // Dots animation
    const dotsInterval = setInterval(() => {
      setDots((prev) => {
        if (prev.length >= 3) return "";
        return prev + ".";
      });
    }, 300);

    return () => {
      clearInterval(progressInterval);
      clearInterval(dotsInterval);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="text-center">
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 opacity-20 blur-md"></div>
            <CloudArrowUpIcon className="relative h-16 w-16 text-indigo-400 animate-pulse" />
          </div>
        </div>

        <h1 className="text-3xl font-bold text-white mb-2">EndSync{dots}</h1>
        <p className="text-gray-400 mb-6">Securing your files</p>

        <div className="w-64 h-2 bg-gray-700 rounded-full overflow-hidden mx-auto">
          <div
            className="h-full bg-gradient-to-r from-indigo-500 to-purple-600 transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="text-xs text-gray-400 mt-2">{progress}%</p>

        <div className="mt-8 flex justify-center space-x-2">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="h-2 w-2 rounded-full bg-indigo-400 opacity-0"
              style={{
                animation: `pulse 1.5s infinite ${i * 0.2}s`,
                animationFillMode: "forwards",
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loader;
