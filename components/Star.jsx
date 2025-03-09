export default function Star({ colored }) {
  if (colored) {
    return <img src="/svgs/coloredStar.svg" alt="Logo" className="backIcon" />;
  } else {
    return <img src="/svgs/darkStar.svg" alt="Logo" className="backIcon" />;
  }
}
