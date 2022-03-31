import Head from "next/head";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "react-feather";
import MainAni from "../components/MainAni";
import Positions from "../components/Positions";
import Books from "../components/Books";
import TechStack from "../components/TechStack";
import Technologies from "../components/Technologies";

export default function Home() {
  const { theme, setTheme } = useTheme("");

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div>
      <Head>
        <title>Anirudh Makhana</title>
        <meta name="title" content="GIF Portal" />
        <meta
          name="description"
          content="Check out Anirudh's Portfolio. A Software Engineer with keen interest in Blockchain, IoT and AI."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.anirudhmakhana.xyz/" />
        <meta property="og:title" content="Anriudh Makhana" />
        <meta
          property="og:description"
          content="Check out Anirudh's Portfolio. A Software Engineer with keen interest in Blockchain, IoT and AI."
        />
        <meta property="og:image" content="https://i.imgur.com/ut0rh8T.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://www.anirudhmakhana.xyz/"
        />
        <meta property="twitter:title" content="Anirudh Makhana" />
        <meta
          property="twitter:description"
          content="Check out Anirudh's Portfolio. A Software Engineer with keen interest in Blockchain, IoT and AI."
        />
        <meta
          property="twitter:image"
          content="https://i.imgur.com/ut0rh8T.png"
        />
      </Head>

      <div
        className="w-full h-96"
        style={{
          backgroundImage: "url(img/banner_dear.jpg)",
          backgroundPosition: "center",
        }}
      />

      <div className="relative bg-white dark:bg-gray-900 dark:text-gray-50 p-8 xl:p-12 mx-auto xl:w-1/2 2xl:w-[750px] -mt-48 rounded-xl shadow-xl dark:shadow-none dark:border dark:border-gray-800 mb-12">
        <button
          onClick={toggleTheme}
          className="right-12 absolute hover:bg-gray-100 dark:hover:bg-gray-800 active:bg-gray-200 p-2 rounded-2xl transition"
        >
          {theme === "dark" ? <Sun size={21} /> : <Moon size={21} />}
        </button>

        <div className="border-b dark:border-gray-700 pb-10">
          {/* Main Section */}
          <MainAni />
        </div>

        <div className="mt-12">
          <TechStack />
        </div>

        <div className="mt-12">
          <Technologies />
        </div>

        <div className="mt-12">
          <Positions />
        </div>

        <div className="mt-12">
          <Books />
        </div>
      </div>
    </div>
  );
}
