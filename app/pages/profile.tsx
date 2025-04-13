import React, { useState } from "react";
import ExperienceForm from "../components/ExperienceForm"; // ✅ adjust if path differs

const ProfilePage = () => {
  const [showExperienceForm, setShowExperienceForm] = useState(false);

  return (
    <div className="p-6 max-w-3xl mx-auto">
      {/* Other form fields... */}

      {/* 🔽 Experience Section */}
      <div className="flex justify-between items-center mt-8 mb-2">
        <h2 className="text-xl font-semibold">Experience</h2>
        <button
          onClick={() => setShowExperienceForm(!showExperienceForm)}
          className="border border-green-600 text-green-600 px-3 py-1 rounded hover:bg-green-600 hover:text-white"
        >
          + Add
        </button>
      </div>

      {showExperienceForm && <ExperienceForm />}
    </div>
  );
};

export default ProfilePage;
