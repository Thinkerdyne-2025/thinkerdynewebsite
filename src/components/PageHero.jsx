import "./PageHero.css";

export default function PageHero({
  title,
  subtitle,
  serviceName,
  backgroundImage,
}) {
  return (
    <section
      className="page-hero"
      style={{
        backgroundImage: backgroundImage
          ? `url(${backgroundImage})`
          : undefined,
      }}
    >
      <div className="page-hero__overlay" />
      <div className="container page-hero__content">
        <h1 className="page-hero__title">
          {title}
          {serviceName && (
            <>
              <span className="page-hero__service-name">{serviceName}</span>
            </>
          )}
        </h1>
        {subtitle && <p className="page-hero__subtitle">{subtitle}</p>}
      </div>
    </section>
  );
}
