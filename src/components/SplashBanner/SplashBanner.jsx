import "./SplashBanner.css";

export default function SplashBanner({ title, byline }) {
  return (
    <div className="splash-banner">
      <h1 className="splash-banner-title">{title}</h1>
      <p className="splash-banner-byline">{byline}</p>
    </div>
  );
}
