import { Image } from "react-datocms";

export default function Gallery({ images }) {
  return (
    <div className="flex flex-wrap mb-12">
      {images.map((image, i) => {
        return (
          <div className="w-full p-2 sm:w-1/3" key={i}>
            <Image
              data={{
                ...image.responsiveImage,
                alt: "The Brow &amp; Beauty Studio",
              }}
              className="min-h-[400px] w-full h-full"
              pictureClassName="object-cover object-center"
            />
          </div>
        );
      })}
    </div>
  );
}
