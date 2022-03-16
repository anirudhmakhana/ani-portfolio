import React from "react";
import languages from "../data/languages.json";
import technologies from "../data/technologies.json";
export default function TechStack() {
  return (
    <div>
      <h3 className="font-bold text-2xl mb-3">📚 Languages</h3>
      <div className="flex space-x-3 mt-3 mb-12">
        {languages.map((t, i) => (
          <div
            key={i}
            className="py-1 px-3 text-sm bg-yellow-100 dark:bg-transparent dark:border dark:border-yellow-100 text-yellow-700 dark:text-yellow-100 rounded-2xl "
          >
            {t}
          </div>
        ))}
      </div>

      <h3 className="font-bold text-2xl mb-3">📚 Tech Stack</h3>
      {technologies.map((t, i) => (
        <div
          key={i}
          className="py-1 px-3 text-sm bg-yellow-100 dark:bg-transparent text-center"
        >
          {t}
        </div>
      ))}
    </div>
  );
}
