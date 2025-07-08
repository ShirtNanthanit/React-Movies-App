import { useState, useEffect } from "react";
import _ from "lodash";

import MovieCard from "./MovieCard";
import Filters from "./Filters";

const MovieList = ({ type, title }) => {
  const [movies, setMovies] = useState([]);
  const [filteredMovie, setFilteredMovie] = useState([]);
  const [minRate, setMinRate] = useState(0);
  const [sort, setSort] = useState({
    by: "default",
    order: "asc",
  });

  useEffect(() => {
    getMovies();
  }, []);

  useEffect(() => {
    if (sort.by !== "default") {
      const sortedMovies = _.orderBy(filteredMovie, [sort.by], [sort.order]);
      console.log(sortedMovies);
      setFilteredMovie(sortedMovies);
    }
  }, [sort]);

  const getMovies = async () => {
    try {
      const url = `https://api.themoviedb.org/3/movie/${type}?api_key=${
        import.meta.env.VITE_TMDB_API
      }`;

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Response Status error: " + response.status);
      }

      const data = await response.json();

      setMovies(data.results);
      setFilteredMovie(data.results);
    } catch (error) {
      console.error("Error fetching: ", error);
    }
  };

  const handleFilter = (rate) => {
    if (rate === minRate) {
      setFilteredMovie(movies);
      return;
    }

    setMinRate(rate);

    const filtered = movies.filter((movie) => movie.vote_average >= rate);
    setFilteredMovie(filtered);
  };

  const handleSort = (e) => {
    const { name, value } = e.target;
    setSort((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id={type}>
      <header className="flex gap-y-4 lg:justify-between">
        <h2 className="font-bold text-2xl">{title}</h2>

        <div className="flex gap-x-4 items-center">
          <Filters onHandleFilter={handleFilter} ratingsList={[8, 7, 6]} />

          <select
            name="by"
            id=""
            className="cursor-pointer"
            onChange={handleSort}
            value={sort.by}
          >
            <option value="default" className="bg-black">
              Sortby
            </option>
            <option value="release_date" className="bg-black">
              Date
            </option>
            <option value="vote_average" className="bg-black">
              Rating
            </option>
          </select>

          <select
            name="order"
            id=""
            className="cursor-pointer"
            onChange={handleSort}
            value={sort.order}
          >
            <option value="asc" className="bg-black">
              Ascending
            </option>
            <option value="desc" className="bg-black">
              Descending
            </option>
          </select>
        </div>
      </header>

      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6 w-full max-w-7xl ">
          {filteredMovie.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MovieList;
