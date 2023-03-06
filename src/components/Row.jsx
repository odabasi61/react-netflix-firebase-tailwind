import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

const Row = ({ title, fetchURL }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((res) => {
      setMovies(res.data.results);
    });
  }, [fetchURL]);

  // console.log(movies);

  return (
    <div>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex text-center items-center">
        <div id={"slider"}>
          {movies.map((item, id) => (
            <div
              key={id}
              className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2"
            >
              <img
                src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
                alt={item?.title}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Row;
