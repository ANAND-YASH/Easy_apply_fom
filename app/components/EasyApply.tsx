"use client";
import React, { useState, useEffect } from "react";

const EasyApply = () => {
  const [showToast, setShowToast] = useState(false);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setShowToast(true);
    }
  };

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 3000); // Hide after 3 seconds

      return () => clearTimeout(timer);
    }
  }, [showToast]);

  return (
    <div className="max-w-4xl mx-auto px-6 py-8 space-y-6 border-b">
      <div>
        <h2 className="text-xl font-semibold">Easy Apply</h2>
        <p className="text-sm text-gray-600">
          Choose an option to autocomplete your application. You can still fill your profile manually.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-4">
       
        <label
          htmlFor="resume-upload"
          className="flex-1 w-full md:w-auto border-2 border-dashed border-gray-300 rounded-lg p-6 text-center text-blue-600 cursor-pointer hover:border-blue-400 transition"
        >
          Choose a file or drop it here
          <br />
          <span className="text-xs text-gray-500">(10MB size limit)</span>
          <input
            type="file"
            id="resume-upload"
            className="hidden"
            onChange={handleFileUpload}
          />
        </label>

       
        <button className="w-full md:w-auto bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">
          Apply With Indeed
        </button>
      </div>

      
      {showToast && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-md transition-all">
          Your application has been prefilled using data from resume.
        </div>
      )}
    </div>
  );
};

export default EasyApply;
