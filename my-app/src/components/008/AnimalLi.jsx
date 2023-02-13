function AnimalLi({ animal, index }) {
  return (
    <li
      style={{
        color: animal.color,
        fontWeight: animal.bold ? "bold" : null,
        backgroundColor: index % 2 === 0 ? "yellow" : "red",
      }}
      className="list-group-item"
    >
      #{animal.id}
      {animal.animal}
    </li>
  );
}

export default AnimalLi;
