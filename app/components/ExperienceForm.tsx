"use client";
import React, { useState } from "react";

const ExperienceForm = () => {
  const [forms, setForms] = useState<number[]>([]);

  const handleAddForm = () => {
    setForms([...forms, forms.length]);
  };

  const handleCancel = (index: number) => {
    setForms(forms.filter((_, i) => i !== index));
  };

  return (
    <div className="p-6 border-b space-y-4">
      {/* Header with Add Button */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Experience</h2>
        <button
          className="text-green-600 border border-green-600 rounded px-3 py-1 hover:bg-green-50"
          onClick={handleAddForm}
        >
          + Add
        </button>
      </div>

      {forms.map((formIndex) => (
        <div
          key={formIndex}
          className="border p-6 rounded-md shadow-md bg-gray space-y-4"
        >
          <p className="text-sm text-gray-600">Fields marked with * are required.</p>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium mb-1">
                Title<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full border rounded px-3 py-2"
                placeholder="Job title"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Company</label>
              <input
                type="text"
                className="w-full border rounded px-3 py-2"
                placeholder="Company name"
              />
            </div>
          </div>

          <div>
            <label className="block font-medium mb-1">Office location</label>
            <input
              type="text"
              className="w-full border rounded px-3 py-2"
              placeholder="Location"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Description</label>
            <textarea
              className="w-full border rounded px-3 py-2"
              placeholder="Work description"
              rows={3}
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium mb-1">
                From<span className="text-red-500">*</span>
              </label>
              <input type="date" className="w-full border rounded px-3 py-2" />
            </div>

            <div>
              <label className="block font-medium mb-1">
                To<span className="text-red-500">*</span>
              </label>
              <input type="date" className="w-full border rounded px-3 py-2" />
            </div>
          </div>

          <div>
            <label className="inline-flex items-center space-x-2">
              <input type="checkbox" />
              <span>I currently work here</span>
            </label>
          </div>

          <div className="flex justify-end space-x-4">
            <button
              className="border border-green-600 text-green-600 px-4 py-1 rounded hover:bg-green-50"
              onClick={() => handleCancel(formIndex)}
            >
              Cancel
            </button>
            <button className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700">
              Save
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceForm;
