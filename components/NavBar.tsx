import Link from "next/link";
import Image from "next/image";
export default function NavBar() {
  return (
    <div className="flex shadow-md justify-between px-[120px]">
      <div className="logo p-[14px]">
        <Image src="/SaveBite.svg" alt="alt" width={149} height={50} />
      </div>
      <div className="my-[20px] flex justify-center">
        <Link href="/login" className="p-[10px] mr-[20px]">
          Login
        </Link>
        <Link href={'/signup'} className="bg-primary-500 rounded text-white p-[10px]">
          Sign up
        </Link>
      </div>
    </div>
  );
}
