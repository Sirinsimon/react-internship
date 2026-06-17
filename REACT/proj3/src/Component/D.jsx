function D({ name }) {
  return (
    <div
      style={{
        backgroundColor: "purple",
        width: "60px",
        height: "60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        fontSize: "12px",
      }}
    >
      {name}
    </div>
  );
}

export default D;