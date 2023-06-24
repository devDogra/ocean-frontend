import "./SplashBanner.css";

export default function SplashBanner({ title, byline }) {
  return (
    <div class="splash-banner">
      <h1 class="splash-banner-title">{title}</h1>
      <p class="splash-banner-byline">{byline}</p>
    </div>
  );
}
