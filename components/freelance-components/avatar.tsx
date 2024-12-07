import Image from "next/image";

const Avatar = ({
  url,
  height,
  width,
}: {
  url: string;
  height: number;
  width: number;
}) => {
  return (
    <div className="bg-slate-100 p-[1px] flex items-center justify-center rounded-full bg-muted relative">
      <Image
        className={`rounded-full object-cover w-full md:w-[${width}px] h-auto md:h-[${height}px] max-w-[${height}px] md:max-w-[${width}px]`}
        width={height}
        height={width}
        src={url}
        alt="avatar"
      />
    </div>
  );
};

export default Avatar;
