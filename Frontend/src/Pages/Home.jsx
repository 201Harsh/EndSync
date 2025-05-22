import { useState } from "react";
import {
  CloudArrowUpIcon,
  FolderIcon,
  UserIcon,
  CogIcon,
  ArrowLeftOnRectangleIcon,
  DocumentTextIcon,
  XMarkIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";
import AxiosInstance from "../Config/Axios";
import {  useNavigate } from "react-router-dom";
import { Bounce, toast } from "react-toastify";

export default function Home() {
  const [files, setFiles] = useState([]);
  const [isUploading, setIsUploading] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const Navigate = useNavigate();

  const handleFileChange = (e) => {
    const uploadedFiles = Array.from(e.target.files);
    setFiles([...files, ...uploadedFiles]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (files.length === 0) return;

    setIsUploading(true);

    try {
      const formData = new FormData();
      files.forEach((file) => {
        formData.append("files", file);
      });

      // Simulate API call (replace with actual fetch)
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Files uploaded:", files);

      // Clear files after successful upload
      setFiles([]);
    } catch (error) {
      console.error("Upload error:", error);
    } finally {
      setIsUploading(false);
    }
  };

  const removeFile = (index) => {
    const updatedFiles = [...files];
    updatedFiles.splice(index, 1);
    setFiles(updatedFiles);
  };

  const handleLogout = async ()=>{
    const res = await AxiosInstance.get("/users/logout");
    if(res.status === 200){
      localStorage.clear();
      toast.success(res.data.msg, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      })
      setTimeout(() => {
        Navigate("/login");
      }, 3000);
    }
  }

  return (
    <div className="flex h-screen bg-gray-900 text-gray-100">
      {/* Mobile Sidebar Overlay */}
      {mobileSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setMobileSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar - Mobile */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-gray-800 transform ${
          mobileSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out lg:hidden`}
      >
        <div className="p-4 flex items-center justify-between border-b border-gray-700">
          <div className="flex items-center">
            <CloudArrowUpIcon className="h-8 w-8 text-indigo-400" />
            <span className="ml-2 text-xl font-bold">EndSync</span>
          </div>
          <button
            onClick={() => setMobileSidebarOpen(false)}
            className="text-gray-400 hover:text-white"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>

        <nav className="mt-4">
          <SidebarItem
            icon={<FolderIcon className="h-6 w-6" />}
            text="My Files"
            active={true}
            sidebarOpen={true}
          />
          <SidebarItem
            icon={<UserIcon className="h-6 w-6" />}
            text="Account"
            sidebarOpen={true}
          />
          <SidebarItem
            icon={<CogIcon className="h-6 w-6" />}
            text="Settings"
            sidebarOpen={true}
          />
        </nav>
        <button onClick={handleLogout} className="flex absolute bottom-5 left-2 bg-red-600 font-semibold items-center p-4 mx-2 rounded-lg cursor-pointer transition-colors text-white hover:bg-red-700">
          <ArrowLeftOnRectangleIcon className="h-6 w-6" />
          <span className="ml-2">Logout</span>
        </button>
      </div>

      {/* Sidebar - Desktop */}
      <div
        className={`hidden lg:block ${
          sidebarOpen ? "w-64" : "w-20"
        } bg-gray-800 text-white transition-all duration-300 ease-in-out`}
      >
        <div className="p-4 flex items-center justify-between border-b border-gray-700">
          {sidebarOpen ? (
            <div
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="cursor-pointer flex items-center"
            >
              <CloudArrowUpIcon className="h-8 w-8 text-indigo-400" />
              <span className="ml-2 text-xl font-bold">EndSync</span>
            </div>
          ) : (
            <CloudArrowUpIcon
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="cursor-pointer h-8 w-8 text-indigo-400 mx-auto"
            />
          )}
        </div>

        <nav className="mt-4">
          <SidebarItem
            icon={<FolderIcon className="h-6 w-6" />}
            text="My Files"
            active={true}
            sidebarOpen={sidebarOpen}
          />
          <SidebarItem
            icon={<UserIcon className="h-6 w-6" />}
            text="Account"
            sidebarOpen={sidebarOpen}
          />
          <SidebarItem
            icon={<CogIcon className="h-6 w-6" />}
            text="Settings"
            sidebarOpen={sidebarOpen}
          />
        </nav>
        <button onClick={handleLogout} className="flex absolute bottom-5 left-2 bg-red-600 font-semibold items-center p-4 mx-2 rounded-lg cursor-pointer transition-colors text-white hover:bg-red-700">
          <ArrowLeftOnRectangleIcon className="h-6 w-6" />
          <span className="ml-2">Logout</span>
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto bg-gray-900">
        {/* Mobile Header */}
        <div className="lg:hidden p-4 border-b border-gray-800 flex items-center justify-between">
          <button
            onClick={() => setMobileSidebarOpen(true)}
            className="text-gray-400 hover:text-white"
          >
            <Bars3Icon className="h-6 w-6" />
          </button>
          <div className="flex items-center">
            <CloudArrowUpIcon className="h-8 w-8 text-indigo-400" />
            <span className="ml-2 text-xl font-bold">EndSync</span>
          </div>
          <div className="w-6"></div> {/* Spacer for alignment */}
        </div>

        <div className="p-4 lg:p-8">
          <h1 className="text-2xl lg:text-3xl font-bold text-white mb-6">
            My Files
          </h1>

          {/* File Upload Form */}
          <form encType="multipart/form-data" onSubmit={handleSubmit}>
            {/* File Upload Area */}
            <div className="mb-6 lg:mb-8">
              <label className="flex flex-col items-center justify-center w-full h-48 lg:h-64 border-2 border-dashed border-gray-700 rounded-lg cursor-pointer bg-gray-800 hover:bg-gray-700 transition-colors">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <CloudArrowUpIcon className="w-10 h-10 lg:w-12 lg:h-12 text-indigo-500 mb-3" />
                  <p className="mb-2 text-sm text-gray-400">
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                  <p className="text-xs text-gray-500">
                    Any file type up to 5GB
                  </p>
                </div>
                <input
                  id="file-upload"
                  type="file"
                  className="hidden"
                  multiple
                  onChange={handleFileChange}
                />
              </label>
            </div>

            {/* Upload Button */}
            {files.length > 0 && (
              <div className="mb-6 flex justify-end">
                <button
                  type="submit"
                  disabled={isUploading}
                  className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-md disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center"
                >
                  {isUploading ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Uploading...
                    </>
                  ) : (
                    `Upload ${files.length} file${
                      files.length !== 1 ? "s" : ""
                    }`
                  )}
                </button>
              </div>
            )}
          </form>

          {/* Uploading Indicator */}
          {isUploading && (
            <div className="mb-6 p-4 bg-indigo-900 bg-opacity-30 rounded-lg flex items-center">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-indigo-500 mr-3"></div>
              <span className="text-indigo-400">
                Uploading files to server...
              </span>
            </div>
          )}

          {/* Files List */}
          {files.length > 0 ? (
            <div className="bg-gray-800 rounded-lg shadow overflow-hidden">
              {/* Desktop Table Headers */}
              <div className="hidden lg:grid grid-cols-12 gap-4 p-4 bg-gray-700 border-b border-gray-600 font-medium text-gray-300">
                <div className="col-span-6">File Name</div>
                <div className="col-span-3">Size</div>
                <div className="col-span-2">Type</div>
                <div className="col-span-1">Actions</div>
              </div>

              {files.map((file, index) => (
                <div
                  key={index}
                  className="lg:grid lg:grid-cols-12 gap-4 p-4 border-b border-gray-700 hover:bg-gray-700 transition-colors"
                >
                  {/* Mobile View */}
                  <div className="lg:hidden flex justify-between items-center">
                    <div className="flex items-center">
                      <DocumentTextIcon className="h-5 w-5 text-indigo-500 mr-3" />
                      <div>
                        <div className="text-white truncate max-w-[180px]">
                          {file.name}
                        </div>
                        <div className="text-xs text-gray-400">
                          {(file.size / 1024 / 1024).toFixed(2)} MB •{" "}
                          {file.type || "Unknown"}
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFile(index)}
                      className="text-red-400 hover:text-red-300"
                    >
                      <XMarkIcon className="h-5 w-5" />
                    </button>
                  </div>

                  {/* Desktop View */}
                  <div className="hidden lg:flex col-span-6 items-center">
                    <DocumentTextIcon className="h-5 w-5 text-indigo-500 mr-3" />
                    <span className="truncate">{file.name}</span>
                  </div>
                  <div className="hidden lg:block col-span-3 text-gray-400">
                    {(file.size / 1024 / 1024).toFixed(2)} MB
                  </div>
                  <div className="hidden lg:block col-span-2 text-gray-400">
                    {file.type || "Unknown"}
                  </div>
                  <div className="hidden lg:flex col-span-1 justify-end">
                    <button
                      onClick={() => removeFile(index)}
                      className="text-red-400 hover:text-red-300"
                    >
                      <XMarkIcon className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-gray-800 rounded-lg shadow">
              <DocumentTextIcon className="mx-auto h-12 w-12 text-gray-600" />
              <h3 className="mt-2 text-lg font-medium text-white">
                No files uploaded yet
              </h3>
              <p className="mt-1 text-sm text-gray-400">
                Get started by uploading your first file
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Sidebar Item Component
function SidebarItem({ icon, text, active = false, sidebarOpen }) {
  return (
    <div
      className={`flex items-center p-4 mx-2 rounded-lg cursor-pointer transition-colors ${
        active
          ? "bg-indigo-700 text-white"
          : "text-gray-400 hover:bg-gray-700 hover:text-white"
      }`}
    >
      <div>{icon}</div>
      {sidebarOpen && <span className="ml-3">{text}</span>}
    </div>
  );
}
