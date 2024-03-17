import { useParams } from "react-router-dom";
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
    <section>
      <h2>{detail.title}</h2>
      <p>{detail.year}</p>
      <p>{detail.director}</p>
      <p>{detail.duration}</p>
      <Stars rating={detail.rate} />
      <div>
        {detail.genre?.map((item) => (
          <p>{item}</p>
        ))}
      </div>
    </section>
  );
};
export default Details;
