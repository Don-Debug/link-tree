import Image from "next/image";
import profile from "@/public/1myself.png";
import Link from "next/link";

import { GrInstagram } from "react-icons/gr";

export default function Profile() {
  return (
    <>
      <div className="w-full h-auto bg-stone-200 flex justify-center items-center flex-col">
        <div>
          <Image
            src={profile}
            alt="profile-pic"
            width={1000}
            height={1000}
            className="w-[6rem] h-[6rem] object-cover pointer-events-none rounded-full"
          />
        </div>
        <div>
          <div className="p-2 bg-neutral-900 rounded-lg">
            <Link href={`/`} draggable="false">
              <GrInstagram size={30} color="white" />
            </Link>
          </div>
          <Link href={`/`}></Link>
          <Link href={`/`}></Link>
          <Link href={`/`}></Link>
          <Link href={`/`}></Link>
        </div>
      </div>
    </>
  );
}
