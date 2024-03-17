import Stars from "./Stars";
import { Link } from "react-router-dom";
const MovieList = ({ data }) => {
  return (
    <section>
      <h2>MovieList</h2>
      <section className="grid-cols-3 grid gap-5 gap-x-10 p-3 px-40">
        {data?.map((item, index) => (
          <Link key={index} to={`/details/${item.title}`}>
            <div className="flex flex-col items-center bg-slate-300 p-3 rounded-lg ">
              <h2 className="text-2xl text-center ">{item.title}</h2>
              <p>{item.year}</p>
              <p>{item.director}</p>
              <p>{item.duration}</p>
              <Stars rating={item.rate} />
              <div className="flex flex-col items-center">
                {item.genre.map((genre, index) => (
                  <p key={index}>{genre}</p>
                ))}
              </div>
            </div>{" "}
          </Link>
        ))}
      </section>
    </section>
  );
};

export default MovieList;
