import React from "react";
import Image from "next/image";
import tags from "../data/tags.json";
import {
  GitHub,
  Instagram,
  Linkedin,
  Youtube,
  Twitch,
  Mail,
} from "react-feather";
import Link from "next/link";

function MainAni() {
  return (
    <div>
      <Image
        width="128px"
        height="128px"
        src="/img/drippyBaljeetFace_square.png"
        alt="Anirudh Makhana"
        className="rounded-full"
      />

      <h1 className="text-3xl font-bold tracking-tight mt-3 mb-1">
        Anirudh Makhana
      </h1>
      <h2 className="text-gray-500 dark:text-gray-400">
        Software Engineer · 📌 Bangkok, Thailand
      </h2>

      <div className="flex space-x-3 mt-3 mb-12">
        {tags.map((t, i) => (
          <div
            key={i}
            className="py-1 px-3 text-sm bg-yellow-100 dark:bg-transparent dark:border dark:border-yellow-100 text-yellow-700 dark:text-yellow-100 rounded-2xl "
          >
            {t}
          </div>
        ))}
      </div>

      <h3 className="font-bold text-2xl">Hey there!</h3>
      <p className="mt-5 prose dark:prose-dark">
        I am Anirudh Makhana, an undergraudate software engineering student at
        King Mongkut&apos;s Institute Of Technology Ladkarabang, Thailand. I am
        currently learning to build Blockchain use-cases with IoT and AI
        applications. My interest include smart homes, electric cars, and many
        more!
      </p>

      <p>
        I also enjoy working out and playing Valorant in my free time. (Yes,
        I&apos;m a Cypher main)
      </p>

      <div className="mt-10 inline-flex items-center space-x-2">
        <p className="text-sm">Got any questions?</p>
        <Link href="/contactme">
          <a className="text-sm font-bold no-underline hover:underline">
            Feel free to contact Me!{" "}
            <span className="text-gray-500 dark:text-gray-400">&rarr;</span>
          </a>
        </Link>
      </div>

      <div className="mt-10 flex items-center space-x-2">
        <p className="text-sm"></p>
        <Link href="https://github.com/anirudhmakhana/resume/blob/master/Software_Engineer_Resume.pdf">
          <a className="text-sm font-bold no-underline hover:underline">
            Get my Resume!{" "}
            <span className="text-gray-500 dark:text-gray-400">&rarr;</span>
          </a>
        </Link>
      </div>
    </div>
  );
}

export default MainAni;
