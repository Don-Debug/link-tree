import Image from "next/image";
import profile from "@/public/myself.png";
import Link from "next/link";

import { GrInstagram } from "react-icons/gr";
import { AiFillGithub } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import { BsDiscord } from "react-icons/bs";
import { CgMail } from "react-icons/cg";

export default function Profile() {
  return (
    <>
      <div className="w-full h-auto flex justify-center items-center flex-col p-4 gap-4">
        <div className="flex sm:flex-row-reverse flex-col-reverse gap-4 justify-center items-center">
          <div className="sm:text-start text-center w-[80%]">
            <h1 className="text-[2rem] font-bold text-[#f1f1f1]">Debug</h1>
            <p className="font-semibold text-[#f1f1f1]">
              Do you wanna know the right way to learn frontend? Contact me.
            </p>
          </div>
          <div>
            <Image
              src={profile}
              alt="profile-pic"
              width={1000}
              height={1000}
              className="w-[6rem] h-[6rem] object-cover pointer-events-none rounded-full"
            />
          </div>
        </div>
        <div className="flex flex-row justify-center gap-4 items-center flex-wrap">
          <Link href={`/`} draggable="false">
            <GrInstagram size={30} color="white" />
          </Link>
          <Link href={`/`} draggable="false">
            <AiFillGithub size={30} color="white" />
          </Link>
          <Link href={`/`} draggable="false">
            <AiFillYoutube size={30} color="white" />
          </Link>
          <Link href={`/`} draggable="false">
            <FaTiktok size={30} color="white" />
          </Link>
          <Link href={`/`} draggable="false">
            <BsDiscord size={30} color="white" />
          </Link>
          <Link href={`/`} draggable="false">
            <CgMail size={30} color="white" />
          </Link>
        </div>
      </div>
    </>
  );
}
