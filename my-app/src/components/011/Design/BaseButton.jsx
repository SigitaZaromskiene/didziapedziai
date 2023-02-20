function BaseButton(props) {
  return <button onClick={props.clickHandler}>{props.title}</button>;
}

export default BaseButton;
