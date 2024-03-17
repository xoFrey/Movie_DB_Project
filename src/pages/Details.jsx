import { useParams, Link } from "react-router-dom";
import movies from "../assets/data/data";
import { useEffect, useState } from "react";
import Stars from "../components/Stars";

const Details = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState([]);

  useEffect(() => {
    const find = movies.find((item) => item.title === id);
    setDetail(find);
  }, [movies]);

  return (
    <section className="text-white font-bold font-description h-min-screen bg-black flex justify-center flex-col items-center px-2">
      <img
        className="pt-10 w-5/6 lg:w-3/6 mb-5"
        src="/public/img/jason-dent-SnXIF8_2oPw-unsplash.jpg"
        alt=""
      />
      <h2 className="text-4xl text-center text-white font-extrabold mb-2 underline decoration-neutral-100/50">
        {detail.title}
      </h2>
      <p>{detail.year}</p>
      <p>{detail.director}</p>
      <p className="mb-2">{detail.duration}</p>
      <Stars rating={detail.rate} />
      <div className="flex flex-wrap items-center gap-x-10 gap-y-3 justify-center leading-3">
        {detail.genre?.map((item) => (
          <p>{item}</p>
        ))}
        <p className="px-10 py-5 leading-6 text-center font-normal mb-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          nesciunt fuga, ratione soluta at tempora possimus dolor expedita
          voluptatibus vel quo velit praesentium voluptatem provident nam!
        </p>
      </div>
      <Link
        className=" border text-white font-description font-bold p-1 px-4 mb-10 rounded-md hover:text-black hover:bg-white transition duration-300 ease-in-out"
        to="/"
      >
        Back to MovieList
      </Link>
    </section>
  );
};
export default Details;
