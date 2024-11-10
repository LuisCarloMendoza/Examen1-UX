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


export default function Home() {
  return (
    <>
    <Head>
      <title>Homepage - Netflix</title>
      <link rel="icon" href="/Images/PageIcon.png"/>
    </Head>
      <div>
        <Navbar/>
        <Banner/>
        <Carousel movies={movieList} />
        <Carousel movies={movieList} />
        <Carousel movies={movieList} />
        <Carousel movies={movieList} />
        <Footer/>
      </div>
    </>
  );
}


