import PropTypes from "prop-types";
import "../css/movie_details.css";

function Movie_Details({
  title,
  runtime,
  bgImg,
  genres,
  rating,
  like,
  description,
}) {
  return (
    <div className="wrapper">
      <div className="detail">
        <img className="image" src={bgImg} alt={title} />
        <h2 className="title">{title}</h2>
        <div className="runtime">런타임: {runtime}분</div>
        <ul>
          {genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
        <div className="like">
          좋아요: {like} 평점: {rating}
        </div>

        <p className="description">
          {description === ""
            ? "줄거리가 제공되지 않는 영화입니다."
            : description}
        </p>
      </div>
    </div>
  );
}

Movie_Details.propTypes = {
  id: PropTypes.number.isRequired,
  bgImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  runtime: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  rating: PropTypes.number.isRequired,
  like: PropTypes.number.isRequired,
};
export default Movie_Details;
