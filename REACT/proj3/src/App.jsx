import A from "./Component/A.jsx";

function App() {
  const username = "sam";

  return (
    <div
      style={{
        backgroundColor: "white",
        width: "100%",
        height: "100vh",
        padding: "20px",
      }}
    >
      <A name={username} />
    </div>
  );
}

export default App;