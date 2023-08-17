export default function Cta({ content }) {
  return (
    <div className="w-full p-12 mt-12 text-center text-white bg-black">
      <div className="mx-auto md:max-w-md content">
        <h4>{content}</h4>

        <a
          data-scroll-to
          data-offset="-100"
          className="mt-12 btn btn--secondary"
          href="#Contact"
        >
          Book now
        </a>
      </div>
    </div>
  );
}
