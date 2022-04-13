import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Moon, Sun } from "react-feather";
import { useTheme } from "next-themes";

export default function Projects() {
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const styles = (theme) => ({
    card: {
      backgroundColor: "white",
    },
  });

  return (
    <div classNameName="">
      <div classNameName="content-around">
        <button
          onClick={toggleTheme}
          classNameName="items-center justify-center rounded-lg dark:bg-gray-700 dark:hover:bg-gray-600 bg-gray-200 hover:bg-gray-300 py-2 px-4"
        >
          {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>
      <div className="body-font">
        <div className="container px-5 py-24 mx-auto">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-center  mb-20">
            🏗️
            <br className="hidden sm:block" />
            Projects
          </h1>

          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div className="p-4 md:w-1/3 flex">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <div className="flex-grow pl-6">
                <h2 className="text-lg title-font font-medium mb-2">
                  Project Yoru
                </h2>
                <p className="leading-relaxed text-base">
                  A RFID-based, blockchain-based supply chain sytem which tracks
                  transportation of goods. Techstack includes Chainlink Node,
                  External Adapter, Orcale Contract, Solidity, React, Arduino,
                  MRFC522 RFID Reader
                </p>
                <a className="mt-3 text-indigo-400 inline-flex items-center">
                  Work in progress...
                </a>
              </div>
            </div>

            <div className="p-4 md:w-1/3 flex">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <div className="flex-grow pl-6">
                <h2 className="text-lg title-font font-medium mb-2">Robinhood3.0</h2>
                <p className="leading-relaxed text-base">
                Robinhood Blockchain Web 3.0 App using Moralis, Solidity, Next JS, Sanity.io, Tailwind CSS, and Netlify 
                </p>
                <a className="mt-3 text-indigo-400 inline-flex items-center"
                href="https://github.com/anirudhmakhana/robinhood3.0">
                Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>

            <div className="p-4 md:w-1/3 flex">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <div className="flex-grow pl-6">
                <h2 className="text-lg title-font font-medium mb-2">
                  ETH-Tweets
                </h2>
                <p className="leading-relaxed text-base">
                  A decentralized platform for checking out tweets on the
                  Ethereum Rinkeby Network. Built using React, Solidity,
                  eth-brownie, ethers.io. ❗ Make sure you have a wallet
                  installed before using this website ❗
                </p>
                <a
                  className="mt-3 text-indigo-400 inline-flex items-center"
                  href="https://github.com/anirudhmakhana/eth-tweets"
                >
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>

                <a
                  className="mt-3 text-indigo-400 flex items-center"
                  href="https://github.com/anirudhmakhana/decentralize-twitter"
                >
                  Smart Contract
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <div className="flex-grow pl-6">
                <h2 className="text-lg title-font font-medium mb-2">
                  Dog NFTs
                </h2>
                <p className="leading-relaxed text-base">
                  This project was built to understand the core concepts of NFTs
                  and why they play such a big part in the blockchain world. ❗
                  Make sure you are on the opensea testnet network ❗
                </p>
                <a
                  className="mt-3 text-indigo-400 inline-flex items-center"
                  href="https://github.com/anirudhmakhana/nft-collection"
                >
                  Learn more
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>

                <a
                  className="mt-3 text-indigo-400 flex items-center"
                  href="https://testnets.opensea.io/account"
                >
                  View on opensea.io
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>

            <div className="p-4 md:w-1/3 flex">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <div className="flex-grow pl-6">
                <h2 className="text-lg title-font font-medium mb-2">
                  A-star Maze
                </h2>
                <p className="leading-relaxed text-base">
                  This project finds the shortest path within a Maze using the
                  A* algorithm. The frontend is implemented in Python 3.x and
                  the backend is being implemented in SWI-Prolog.
                </p>
                <a
                  className="mt-3 text-indigo-400 inline-flex items-center"
                  href="https://github.com/anirudhmakhana/MazeShortestPath"
                >
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
