import Image from "next/image";
import Link from "next/link";

import TreeLinks from "@/constants/Important";

export default function Links() {
  return (
    <>
      <div className="p-4 mt-12  m-auto sm:w-[40rem] w-full">
        {TreeLinks.map((linktree, index) => (
          <Link href={`${linktree.link}`} key={index} target="_blank">
            <div className=" flex justify-start items-center gap-8 border border-white p-2 rounded-3xl">
              <Image
                src={linktree.image}
                alt="link-img"
                width={1000}
                height={1000}
                className="w-12 h-12 object-cover rounded-full"
              />
              <h1 className="text-white text-[1.2rem] font-extrabold">
                {linktree.name}
              </h1>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
