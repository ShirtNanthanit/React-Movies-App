import MovieList from "../components/MovieList";
import MovieCard from "../components/MovieCard";
import { useEffect, useState } from "react";

const Home = () => {
  return (
    <div className="min-h-screen px-4 py-3 sm:px-6 flex flex-col gap-y-20">
      <MovieList type={"popular"} title={"Popular"} />

      <MovieList type={"top_rated"} title={"Top Rated"} />
      <MovieList type={"upcoming"} title={"Upcoming"} />
    </div>
  );
};

export default Home;
