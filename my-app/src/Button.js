import "./Style.css";

export default function Button({ incr, count }) {
  // create state
  // crete fun to inc this state
  return (
    <div className="button">
      <button
        onClick={() => {
          incr(count);
        }}
      >
        click Me
      </button>
    </div>
  );
}
