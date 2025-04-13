"use client";
import React, { useState } from "react";

const ResumeUpload = () => {
  const [fileName, setFileName] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleDelete = () => {
    setFileName(null);
  };

  return (
    <div className="px-6 py-8 space-y-4">
      <h2 className="text-xl font-semibold">Resume</h2>

      <div className="border-2 border-dashed border-white-400 rounded-md p-6 text-center bg-white-50">
        <label className="cursor-pointer text-blue-600 hover:underline">
          <input type="file" className="hidden" onChange={handleFileChange} />
          Choose a file
        </label>
        <p className="text-sm text-gray-500 mt-1">or drop it here</p>
        <p className="text-xs text-gray-400 mt-1">10MB size limit</p>
      </div>

      {fileName && (
        <div className="flex items-center justify-between bg-white-100 px-4 py-2 rounded-md">
          <div className="flex items-center gap-2 text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 4H7a2 2 0 01-2-2V6a2 2 0 012-2h5l5 5v11a2 2 0 01-2 2z"
              />
            </svg>
            <span>{fileName}</span>
          </div>
          <button
            onClick={handleDelete}
            className="text-red-500 hover:text-red-600 text-sm"
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default ResumeUpload;
