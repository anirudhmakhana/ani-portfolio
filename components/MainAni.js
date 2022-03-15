import React from 'react'
import Image from "next/image";

function MainAni() {
  return (
    <div>
        <Image
            width='128px'
            height='128px'
            src='/img/ingus_bw.jpg'
            alt='Anirudh Makhana'
            className='rounded-full'
          />

          <h1 className='text-3xl font-bold tracking-tight mt-3 mb-1'>
            Anirudh Makhana
          </h1>
          <h2 className='text-gray-500 dark:text-gray-400'>
            Software Engineer · 📌 Bangkok, Thailand
          </h2>
    </div>
  )
}

export default MainAni