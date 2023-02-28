function Menu(props) {
  return (
    <div className="menu-links">
      <button onClick={() => props.setPage("home")}>Home</button>
      <button onClick={() => props.setPage("racoon")}>Racon</button>
      <button onClick={() => props.setPage("fox")}>Fox</button>
    </div>
  );
}

export default Menu;
