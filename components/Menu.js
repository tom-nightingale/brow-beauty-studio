import Link from "next/link";
import { navItems } from "@/lib/navItems";

export default function Menu() {
  return (
    <ul className="relative z-10 items-center justify-around hidden max-w-lg p-4 mx-auto mt-8 font-medium text-white uppercase bg-black md:flex">
      {navItems.map(({ title, url, type }, i) => {
        return type == "route" ? (
          <li key={i}>
            <Link
              href={`/${url}`}
              className="text-center text-xs lg:text-sm xl:text-base relative block p-2 tracking-widest after:absolute after:bottom-0 after:left-1/2 after:right-1/2 after:w-[0px] after:h-[1px] after:transform after:-translate-x-1/2 after:transition-all after:duration-300 after:bg-white/25 hover:after:w-full"
            >
              {title}
            </Link>
          </li>
        ) : url == "Home" ? (
          <li key={i}>
            <Link
              href={`/${url}`}
              className="text-center text-xs lg:text-sm xl:text-base relative hidden p-2 tracking-widest after:absolute after:bottom-0 after:left-1/2 after:right-1/2 after:w-[0px] after:h-[1px] after:transform after:-translate-x-1/2 after:transition-all after:duration-300 after:bg-white/25 hover:after:w-full"
            >
              {title}
            </Link>
          </li>
        ) : (
          <li key={i}>
            <a
              smooth="true"
              data-scroll-to
              data-offset="-100"
              className="text-center text-xs lg:text-sm xl:text-base relative block p-2 tracking-widest after:absolute after:bottom-0 after:left-1/2 after:right-1/2 after:w-[0px] after:h-[1px] after:transform after:-translate-x-1/2 after:transition-all after:duration-300 after:bg-white/25 hover:after:w-full"
              href={`#${url}`}
            >
              {title}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
