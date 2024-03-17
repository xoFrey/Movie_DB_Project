const Buttons = ({ name, func }) => {
  return (
    <section>
      <button onClick={func}>{name}</button>
    </section>
  );
};

export default Buttons;
