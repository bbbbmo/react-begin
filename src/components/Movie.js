import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../css/movie.css";
import { useState } from "react";
import { Textfit } from "react-textfit";

function Movie({ id, coverImg, title, summary, genres }) {
  const gens = genres.slice(0, 3);
  return (
    <div className="movie">
      <div className="movie__header">
        <Link to={`/movie/${id}`} className="movie__link">
          <img className="movie__coverImg" src={coverImg} alt={title} />
        </Link>
        <div className="movie__info">
          <div className="movie__info__title">
            <Textfit mode="multi" min={20}>
              {title}
            </Textfit>
          </div>
          <div className="movie__info__genres">장르</div>
          <ul className="movie__info__list">
            {gens.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="movie__footer">
        <p className="movie__summary">
          {summary.length > 245
            ? `${summary.slice(0, 245)}...`
            : summary === ""
            ? "줄거리가 제공되지 않는 영화입니다."
            : summary}
        </p>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
