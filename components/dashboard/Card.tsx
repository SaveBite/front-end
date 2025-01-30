import Image from "next/image";

interface Props {
  title: string;
  data: string;
  icon: string;
}

function Card({ title, data, icon }: Props) {
  return (
    <div className="w-[20%] h-[120px] relative p-[10px] bg-white shadow-sm rounded-md">
      <div className="flex flex-col gap-2">
        <span className="title1">{title}</span>
        <span className="title1bold">{data}</span>
      </div>
      <Image
        src={icon}
        alt="icon"
        width={50}
        height={50}
        className="absolute bottom-[10px] right-[20px]"
      />
    </div>
  );
}

export default Card;
