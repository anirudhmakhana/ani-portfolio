import React from "react";
import {
  GitHub,
  Instagram,
  Linkedin,
  Youtube,
  Twitch,
  Mail,
  Twitter,
  Discord,
} from "react-feather";

export default function contactme() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold tracking-tight mt-3 mb-1">
        Lets get in touch!
      </h1>
      <div className="flex space-x-5 mt-5">
        <a
          rel="noopener"
          className="hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-2xl transition"
          href="mailto:makhana.anirudh@gmail.com"
          target="_blank"
        >
          <Mail size={26} />
        </a>

        <a
          rel="noopener"
          className="hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-2xl transition"
          href="https://instagram.com/anirudhmakhana"
          target="_blank"
        >
          <Instagram size={26} />
        </a>
        <a
          rel="noopener"
          className="hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-2xl transition"
          href="https://www.linkedin.com/in/anirudh-m-678284170/"
          target="_blank"
        >
          <Linkedin size={26} />
        </a>
        <a
          rel="noopener"
          className="hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-2xl transition"
          href="https://github.com/anirudhmakhana"
          target="_blank"
        >
          <GitHub size={26} />
        </a>

        <a
          rel="noopener"
          className="hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-2xl transition"
          href="https://twitch.tv/makhanaanirudh"
          target="_blank"
        >
          <Twitch size={26} />
        </a>

        <a
          rel="noopener"
          className="hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-2xl transition"
          href="https://www.youtube.com/c/AnirudhMakhana"
          target="_blank"
        >
          <Youtube size={26} />
        </a>

        <a
          rel="noopener"
          className="hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-2xl transition"
          href="https://twitter.com/MakhanaAnirudh"
          target="_blank"
        >
          <Twitter size={26} />
        </a>
      </div>
    </div>
  );
}