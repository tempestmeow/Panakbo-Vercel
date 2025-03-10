export default function BackIcon({ onClick }) {
  return (
    <img
      src="/svgs/backbutton.svg"
      alt="Logo"
      width={60}
      className="backIcon"
      onClick={onClick}
    />
  );
}
