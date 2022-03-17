import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeft,
  Columns,
  Grid,
  Moon,
  Sun,
  ZoomIn,
  ZoomOut,
} from "react-feather";
import Head from "next/head";
import { useTheme } from "next-themes";

function Books() {
  const [images, setImages] = useState([]);
  const [zoom, setZoom] = useState(1);
  const { theme, setTheme } = useTheme();

  const getZoom = () => {
    switch (zoom) {
      case 1:
        return "grid-cols-2 lg:grid-cols-3";
      case 2:
        return "grid-cols-1 lg:grid-cols-2";
      default:
        return "grid-cols-2 lg:grid-cols-3";
    }
  };

  const importAll = (r) => {
    return r.keys().map(r);
  };

  useEffect(() => {
    setImages(
      importAll(
        require.context("../public/img/books", false, /\.(png|jp?g|svg)$/)
      )
    );
  }, []);
  return (
    <div>
      <h3 className="font-bold text-2xl mb-3">📚 Personal Bookshelf</h3>

      <div className={`grid ${getZoom()} gap-3 mt-12`}>
        {images.map((image, index) => (
          <Image
            className="rounded hover:scale-105 transition"
            key={index}
            height={image.default.height}
            width={image.default.width}
            src={image.default.src}
            blurDataURL={image.default.blurDataURL}
            placeholder="blur"
            alt="YouTube Thumbnail"
          />
        ))}
      </div>
    </div>
  );
}

export default Books;
