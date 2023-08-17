import { Image } from "react-datocms";

export default function TextWithImage({ index, title, content, image }) {
  return (
    <div className="flex flex-wrap items-center md:my-12 even:flex-row-reverse">
      <div className="w-full p-8 md:p-8 lg:p-20 md:w-1/2 content">
        <h2>{title}</h2>
        <p>{content}</p>
      </div>

      <div className="w-full bg-gray-100 md:w-1/2">
        <Image
          data={{
            ...image.responsiveImage,
            alt: "The Brow &amp; Beauty Studio",
          }}
          className="w-full h-full"
          pictureClassName="object-cover object-center"
        />
      </div>
    </div>
  );
}
