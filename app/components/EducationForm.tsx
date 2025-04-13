"use client";
import React, { useState } from "react";

interface EducationFormEntry {
  id: number;
}

const EducationForm = () => {
  const [forms, setForms] = useState<EducationFormEntry[]>([]);
  const [counter, setCounter] = useState(0); // for unique IDs

  const handleAddForm = () => {
    setForms((prev) => [...prev, { id: counter }]);
    setCounter((prev) => prev + 1);
  };

  const handleCancel = (id: number) => {
    setForms((prev) => prev.filter((form) => form.id !== id));
  };

  return (
    <div className="p-6 border-b space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Education</h2>
        <button
          className="text-green-600 border border-green-600 rounded px-3 py-1 hover:bg-green-50"
          onClick={handleAddForm}
        >
          + Add
        </button>
      </div>

      {forms.map((form) => (
        <div
          key={form.id}
          className="border p-6 rounded-md shadow-md bg-white-50 space-y-4"
        >
          <p className="text-sm text-gray-600">Fields marked with * are required.</p>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium mb-1">
                Degree<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full border rounded px-3 py-2"
                placeholder="Degree (e.g., B.Tech)"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Institution</label>
              <input
                type="text"
                className="w-full border rounded px-3 py-2"
                placeholder="Institution name"
              />
            </div>
          </div>

          <div>
            <label className="block font-medium mb-1">Location</label>
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
              placeholder="Description (optional)"
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
              <span>I am currently enrolled</span>
            </label>
          </div>

          <div className="flex justify-end space-x-4">
            <button
              className="border border-green-600 text-green-600 px-4 py-1 rounded hover:bg-green-50"
              onClick={() => handleCancel(form.id)}
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

export default EducationForm;
