import Link from "next/link";
export default function Packages({ packages }) {
  return (
    <div className="w-full mt-12 text-center md:py-8 xl:py-20">
      <h3 className="mb-0 xl:mb-8">View Our Amazing Packages</h3>
      <div className="flex-wrap xl:flex">
        {packages.map((item, index) => {
          return (
            <div
              className={`relative w-full p-12 xl:w-1/3 xl:p-8 ${
                index === 1 && "text-white bg-black"
              }`}
              key={index}
            >
              <img
                src="/logo-circle-dark.png"
                alt=""
                className="block w-20 mx-auto mb-4"
              />
              <h3 className="inline-block mx-auto mb-0">{item.title}</h3>
              <p className="tracking-widest uppercase">{item.subtitle}</p>
              <div
                className="mx-auto mt-8 text-sm content"
                dangerouslySetInnerHTML={{
                  __html: item.content,
                }}
              />
              {index === 1 ? (
                <Link
                  href="/book"
                  aria-label="Book your party now"
                  className="mt-12 btn btn--secondary">
                  
                    Book now
                  
                </Link>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}
