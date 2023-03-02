import BoxSmall from "./BoxSmall";

function BoxMid(props) {
  return (
    <>
      <div className="box-area">
        <div className="title">Small box</div>
        <BoxSmall sq1={props.sq1}></BoxSmall>
      </div>
    </>
  );
}

export default BoxMid;
