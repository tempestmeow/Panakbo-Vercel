export default function ScrollIcon({ delay }) {
  return (
    <>
      <svg
        width="40"
        height="24"
        viewBox="0 0 52 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="downIcon"
        style={{ animationDelay: `${delay}s` }}
      >
        <path
          d="M6.11 0L26 15.4521L45.89 0L52 4.75708L26 25L0 4.75708L6.11 0Z"
          fill="currentColor"
        />
      </svg>
    </>
  );
}
