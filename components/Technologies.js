import React from "react";
import technologies from "../data/technologies.json";

function Technologies() {
  return (
    <div>
      <h3 className="font-bold text-2xl mb-3">Technologies</h3>
      <div className="flex-end text-center mt-3 mb-12">
        {technologies.map((t, i) => (
          <div
            key={i}
            className="py-1 px-3 text-sm bg-yellow-100 dark:bg-transparent dark:border dark:border-yellow-100 text-yellow-700 dark:text-yellow-100 rounded-2xl "
          >
            {t}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Technologies;
