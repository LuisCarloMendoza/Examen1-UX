import localFont from "next/font/local";
import React from "react";
import Head from "next/head";
import 'bootstrap/dist/css/bootstrap.min.css' 
import { useEffect } from "react";
import { useState } from "react";
import Navbar from "./HomePage/Navbar";
import Banner from "./HomePage/Banner";
import Carousel from "./HomePage/Carousel";
import Footer from "./HomePage/Footer";
import {movieList} from "./Components/MovieList";
import {Movie} from "./Components/MovieList";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const idRanges = [
  { start: 1, end: 5 },
  { start: 5, end: 9 },
  { start: 8, end: 12 },
  { start: 13, end: 17 },
];

const titles = [
  "Trending",
  "Anime",
  "Sci-Fi",
  "Action",
];

export default function Home() {
  const [filteredMovies, setFilteredMovies] = useState<Movie[][]>([]);
  useEffect(() => {
    const filtered = idRanges.map((range) =>
      movieList.filter((movie) => movie.id >= range.start && movie.id <= range.end)
    );
    console.log("Filtered Movies:", filtered);
    setFilteredMovies(filtered);
  }, []);
  return (
    <>
    <Head>
      <title>Homepage - Netflix</title>
      <link rel="icon" href="/Images/PageIcon.png"/>
    </Head>
      <div>
        <Navbar/>
        <Banner/>
        {filteredMovies.map((movies, index) => (
          <div className = "title-background" key={index}>
            <h3 className = "carousel-title">{titles[index]}</h3>
            <Carousel movies={movies} />
          </div>
        ))}
        <Footer/>
      </div>
    </>
  );
}


