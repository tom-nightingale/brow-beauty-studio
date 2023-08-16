import { Image } from "react-datocms";

export default function Gallery() {
  return (
    <div className="flex flex-wrap mb-12">
      <div className="w-full p-2 md:w-1/3">
        <div className="bg-gray-100 min-h-[400px]"></div>
      </div>
      <div className="w-full p-2 md:w-1/3">
        <div className="bg-gray-100 min-h-[400px]"></div>
      </div>
      <div className="w-full p-2 md:w-1/3">
        <div className="bg-gray-100 min-h-[400px]"></div>
      </div>
    </div>
  );
}
