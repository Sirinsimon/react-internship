import C from "./C";

function B({ name }) {
  return (
    <div
      style={{
        backgroundColor: "green",
        width: "220px",
        height: "220px",
        padding: "20px",
      }}
    >
      <C name={name} />
    </div>
  );
}

export default B;