import D from "./D";

function C({ name }) {
  return (
    <div
      style={{
        backgroundColor: "orange",
        width: "140px",
        height: "140px",
        padding: "20px",
      }}
    >
      <D name={name} />
    </div>
  );
}

export default C;