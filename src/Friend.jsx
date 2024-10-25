export default function Friend({ friend }) {
  const { name, email } = friend;
  return (
    <div
      style={{
        border: "1px solid white",
        marginBottom: "5px",
        borderRadius: "6px",
        backgroundColor: "black",
        color: "lightsteelblue",
        fontWeight: "700",
      }}
    >
      <p>Name: {name}</p>
      <p>Email: {email}</p>
    </div>
  );
}
