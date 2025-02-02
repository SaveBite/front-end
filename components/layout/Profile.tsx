import Image from "next/image";
import React from "react";

interface Props {
  img: string;
  name: string;
  email: string;
}
const Profile = ({ img, name, email }: Props) => {
  return (
    <div className="w-[400px] h-[80%] border-solid flex rtl:flex-row-reverse pr-[40px] items-center ">
      <div className="pr-[20px]">
        <Image
          src="/layout/bell.svg"
          alt="bell.svg"
          width={30}
          height={30}
          className="rounded-full"
        />
      </div>
      <div className="border-l-[1px] border-[4px]- border-[#e4e4e4] pl-[20px] flex items-center gap-4">
        {/* image */}
        <div className="w-[30px] h-[30px] rounded-full relative">
          <Image
            src="/layout/amrdiab.png"
            alt="profile"
            fill
            className="object-cover rounded-full"
          />
        </div>
        <div className="flex flex-col">
          <span className="title2medium">Amr Diab</span>
          <span className="body text-gray-500">amrdiab123@gmail.com</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
