"use client";
import React from "react";

const YourProfiles = () => {
  return (
    <div className="px-6 py-8 space-y-6">
      <h2 className="text-xl font-semibold">Your Profiles</h2>
      <p className="text-sm text-gray-600">Fields marked with * are required.</p>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block font-medium mb-1">LinkedIn  <span className="text-red-500">*</span></label>
          <input
            type="url"
            className="w-full border rounded px-3 py-2"
            placeholder="https://linkedin.com/in/yourname"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">GitHub  <span className="text-red-500">*</span></label>
          <input
            type="url"
            className="w-full border rounded px-3 py-2"
            placeholder="https://github.com/yourname"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">X (fka Twitter)  </label>
          <input
            type="url"
            className="w-full border rounded px-3 py-2"
            placeholder="https://x.com/yourhandle"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Website  <span className="text-red-500">*</span></label>
          <input
            type="url"
            className="w-full border rounded px-3 py-2"
            placeholder="https://yourwebsite.com"
          />
        </div>
      </div>
    </div>
  );
};

export default YourProfiles;
