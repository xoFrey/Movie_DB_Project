import Stars from "./Stars";
import { Link } from "react-router-dom";
const MovieList = ({ data }) => {
  return (
    <section>
      <section className=" grid grid-cols-1 lg:grid-cols-3 gap-5 py-3 p-[5vw] ">
        {data?.map((item, index) => (
          <Link key={index} to={`/details/${item.title}`}>
            <div className="flex flex-col items-center text-white bg-gradient-to-b from-neutral-100/20 p-3 rounded-lg h-full mx-auto hover:bg-gradient-to-t hover:to-neutral-100/50 hover:from-neutral-800 hover:scale-105 transistion duration-300 ease-in-out">
              <h2 className="text-2xl text-center text-white ">{item.title}</h2>
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
