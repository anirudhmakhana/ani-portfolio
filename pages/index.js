import Head from "next/head";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { GitHub, Instagram, Linkedin, Moon, Sun, Youtube } from "react-feather";
import MainAni from "../components/MainAni";

const talkAbout = [
  'React',
  'JavaScript',
  'TypeScript',
  'GraphQL',
  'Redux',
  'Jamstack',
  'Next.js',
  'RESTful APIs',
  'HTML',
  'CSS',
  'Gatsby',
  'Svelte',
];

export default function Home() {
  const { theme, setTheme } = useTheme('');

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div>
      <Head>
        <title>Anirudh Makhana</title>
        <meta
          name='description'
          content='Anirudh Makhana is a Software Engineer.'
        />
        <link rel='shortcut icon' href='/favicon.ico' />
      </Head>

      <div
        className='w-full h-96'
        style={{
          backgroundImage: "url(img/banner_dear.jpg)",
          backgroundPosition: "center",
        }}
      />

      <div className='relative bg-white dark:bg-gray-900 dark:text-gray-50 p-8 xl:p-12 mx-auto xl:w-1/2 2xl:w-[750px] -mt-48 rounded-xl shadow-xl dark:shadow-none dark:border dark:border-gray-800 mb-12'>
        <button
          onClick={toggleTheme}
          className='right-12 absolute hover:bg-gray-100 dark:hover:bg-gray-800 active:bg-gray-200 p-2 rounded-2xl transition'
        >
          {theme === "dark" ? <Sun size={21} /> : <Moon size={21} />}
        </button>

        <div className='border-b dark:border-gray-700 pb-10'>
        {/* Main Section */}
          <MainAni />
        </div>
      </div>
    </div>
  )
}
