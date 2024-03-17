import EmptyStar from "../assets/svg/EmptyStar";
import FullStar from "../assets/svg/FullStar";
import Halfstar from "../assets/svg/Halfstar";

const Stars = (props) => {
  const starsRating = [];
  let fullStar = Math.floor(props.rating);
  let halfStar = props.rating - fullStar >= 0.5;
  let emptyStar = 10 - fullStar - (halfStar ? 1 : 0);

  for (let i = 0; i < fullStar; i++) {
    starsRating.push(<FullStar />);
  }
  if (halfStar) {
    starsRating.push(<Halfstar />);
  }
  for (let i = 0; i < emptyStar; i++) {
    starsRating.push(<EmptyStar />);
  }

  return (
    <>
      <div className="flex items-center justify-center bg-slate-700">
        {starsRating.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    </>
  );
};

export default Stars;
