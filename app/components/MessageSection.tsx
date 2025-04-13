"use client";
import React, { useState } from "react";

const MessageSection = () => {
  const [message, setMessage] = useState("");
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = () => {
    if (!agreed) {
      alert("Please agree to the data policy before submitting.");
      return;
    }

    // Handle form submission
    console.log("Submitted message:", message);
  };

  return (
    <div className="px-6 py-8 space-y-6">
      <div>
        <h2 className="text-xl font-semibold mb-1">Message to the Hiring Team</h2>
        <p className="text-sm text-gray-600 mb-2">
          Let the company know about your interest working there
        </p>
        <textarea
          rows={6}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full border border-gray-400 rounded-md p-3 text-sm focus:outline-none focus:ring-2 focus:ring-white-400"
        />
      </div>

      <div className="flex items-start gap-2 text-sm text-gray-700">
        <input
          type="checkbox"
          checked={agreed}
          onChange={() => setAgreed(!agreed)}
          className="mt-1"
        />
        <label>
          Please be informed that your application to this job offer will
          trigger some processing of your personal data by the recruiting
          company, the data controller. SmartRecruiters, the data processor, has
          no control over such personal data processing. For more information on
          these personal data processing, please refer to the recruiting
          company’s privacy policy.
        </label>
      </div>

      <button
        onClick={handleSubmit}
        className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition"
      >
        Submit
      </button>
    </div>
  );
};

export default MessageSection;
