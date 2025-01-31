import Image from "next/image";
import { GoBell } from "react-icons/go";
import profileImage from "./941b87f4a18e07b6762ba5b258c6363d.png";
export default function Navbar() {
  return (
    <div className="flex border-b justify-between items-center h-[80px] px-4 md:px-12 lg:px-16 w-full ">
      <input
        type="search"
        name=""
        id=""
        placeholder="Seach anything"
        className="w-full max-w-[438px] h-[40px] md:h-[52px] rounded-3xl pl-4 md:pl-[35px] bg-[#F6F6F6] text-sm md:text-base hidden md:inline-block"
      />
      <div className="flex gap-[24px] items-center justify-center">
        <div className="bg-[#EDFBEA]/50 w-[40px] h-[40px] rounded-full relative ">
          <GoBell className="text-gray-400 w-[30px] h-[40px]  m-auto" />
          <div className="w-[7px] h-[8px] bg-red-600 absolute right-[10px] top-2 rounded-full"></div>
        </div>
        <div className="flex gap-[16px] border-l pl-[24px]">
          <Image
            src={profileImage}
            alt="Profile"
            className="rounded-full w-[50px] h-[50px]"
          />
          <div>
            <p>amrdiab</p>
            <span className="text-gray-400">amrdiab875@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}
