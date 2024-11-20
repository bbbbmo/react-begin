import { getMouseEventOptions } from "@testing-library/user-event/dist/utils";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Movie_Details from "../components/Movie_details";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json.data.movie);
    setMovie(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <Movie_Details
            key={movie.id}
            id={movie.id}
            title={movie.title_long}
            runtime={movie.runtime}
            bgImg={movie.large_cover_image}
            description={movie.description_full}
            genres={movie.genres}
            rating={movie.rating}
            like={movie.like_count}
          />
        </div>
      )}
    </div>
  );
}

export default Detail;
