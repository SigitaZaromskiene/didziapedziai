import rand from "../../functions/rand";
import ShowName from "./ShowName";

// function Animal(props) {
//   return (
//     <h1
//       style={{
//         color: props.color,
//         fontWeight: "500",
//         fontSize: rand(10, 24) + "px",
//       }}
//     >
//       {props.animalName} number:{rand(11, 15)}
//     </h1>
//   );
// }

function Animal({ color, animalName, h1Class }) {
  const fontFamily = "monospace";
  return (
    <h1
      className={h1Class}
      style={{
        color,
        fontWeight: "500",
        fontSize: rand(10, 24) + "px",
      }}
    >
      {animalName} number:{rand(11, 15)}
      <ShowName animalName={animalName} fontFamily={fontFamily}></ShowName>
    </h1>
  );
}

export default Animal;
