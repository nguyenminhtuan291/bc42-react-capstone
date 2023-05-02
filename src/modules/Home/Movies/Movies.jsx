import React, { useState, useEffect } from "react";
import styles from './Movies.module.scss'
import { apiGetMovies } from "../../../apis/movieAPI";
import ReactPlayer from "react-player";
import { useNavigate } from "react-router-dom";


function Movies() {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  const getMovies = async () => {
    try {
      const data = await apiGetMovies();
      setMovies(data.content);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      {movies.map((item) => {
        return (
          <div>
            <span>{item.tenPhim}</span>
            <button onClick={() => navigate(`/movies/${item.maPhim}`)}>Mua vé</button>
            {/* <Modal show={..} onHide={...}>
              <ReactPlayer url={item.trailer} playing />
            </Modal> */}
          </div>
        );
      })}
    </div>
  );
}

export default Movies