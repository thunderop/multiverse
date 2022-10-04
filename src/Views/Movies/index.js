import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMovies } from "../../redux/actions/actions";

const Movies = () => {
  const dispatch = useDispatch();

  const api_key = "4653663a7a7bb872d31bcdd99a129bc7";
  const movieData = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`
    );
    dispatch(setMovies(data.results));
    console.log(data.results);
  };

  const movies = useSelector((state) => state.moviesData[0]);
  console.log(movies, "respp");

  useEffect(() => {
    movieData();
  }, []);

  return <div>Movies</div>;
};

export default Movies;
