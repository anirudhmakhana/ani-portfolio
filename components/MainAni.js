import React from 'react'
import Image from "next/image";
import tags from "../data/tags.json";

function MainAni() {
  return (
    <div>
        <Image
            width='128px'
            height='128px'
            src='/img/drippyBaljeetFace_square.png'
            alt='Anirudh Makhana'
            className='rounded-full'
          />

          <h1 className='text-3xl font-bold tracking-tight mt-3 mb-1'>
            Anirudh Makhana
          </h1>
          <h2 className='text-gray-500 dark:text-gray-400'>
            Software Engineer · 📌 Bangkok, Thailand
          </h2>

          <div className='flex space-x-3 mt-3 mb-12'>
            {tags.map((t, i) => (
              <div
                key={i}
                className='py-1 px-3 text-sm bg-yellow-100 dark:bg-transparent dark:border dark:border-yellow-100 text-yellow-700 dark:text-yellow-100 rounded-2xl '
              >
                {t}
              </div>
            ))}
          </div>
    </div>
  )
}

export default MainAni