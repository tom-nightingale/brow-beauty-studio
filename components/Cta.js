import Link from "next/link";
export default function Cta({ content }) {
  return (
    <div className="w-full p-12 mt-12 text-center text-white bg-black">
      <div className="mx-auto md:max-w-md content">
        <h4>{content}</h4>

        <Link
          href="/book"
          aria-label="Book your party now"
          className="mt-12 btn btn--secondary">
          
            Book now
          
        </Link>
      </div>
    </div>
  );
}
