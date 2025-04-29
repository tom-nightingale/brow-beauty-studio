export default function Button({
  external,
  destination,
  modifier,
  label,
  secondary,
}) {
  return (
    <>
      {external && (
        <a
          rel="noreferrer"
          target="_blank"
          href={destination}
          className={`btn ${secondary ? "btn--secondary" : ""} ${modifier} `}
        >
          {label}
        </a>
      )}
      {!external && (
        <a
          data-scroll-to
          data-offset="-100"
          href={destination}
          className={`btn ${secondary ? "btn--secondary" : ""} ${modifier}`}
        >
          {label}
        </a>
      )}
    </>
  );
}
