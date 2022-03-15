import React from "react";
import positions from "../data/positions";
import Image from "next/image";

function Positions() {
  return (
    <div>
      <h3 className="font-bold text-2xl mb-3">💻 Work</h3>

      {positions.map((p, i) => (
        <div className="hover:bg-gray-50 dark:hover:bg-gray-800 flex items-start border-b dark:border-gray-700 py-5 px-2">
          <div className="inline-flex min-w-[40px]">
            <Image
              src={p.img}
              className="rounded-md"
              width="40px"
              height="40px"
              alt={p.title}
            />
          </div>

          <div className="ml-5">
            <h4 className="font-semibold">{p.title}</h4>
            <p className="text-gray-500 dark:text-gray-400 text-sm">{p.desc}</p>
            {p.doing && (
              <p className="text-gray-500 dark:text-gray-400 leading-normal text-sm mt-2">
                {p.doing}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Positions;
