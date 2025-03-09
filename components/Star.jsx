export default function Star({ colored }) {
  if (colored) {
    return (
      <img src="/svgs/coloredStar.svg" width={25} alt="Logo" className="star" />
    );
  } else {
    return (
      <img src="/svgs/darkStar.svg" alt="Logo" width={25} className="star" />
    );
  }
}
