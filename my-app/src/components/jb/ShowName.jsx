function ShowName({ animalName, fontFamily }) {
  switch (animalName) {
    case "Racoon":
      return <i>R-A-C</i>;

    case "Turtle":
      return <u style={{ fontFamily }}>Turle</u>;
    default:
      return <b>NERA</b>;
  }
}

export default ShowName;
