import B from "./B";

function A({ name }) {
  return (
    <div
      style={{
        backgroundColor: "blue",
        width: "300px",
        height: "300px",
        padding: "20px",
      }}
    >
      <B name={name} />
    </div>
  );
}

export default A;