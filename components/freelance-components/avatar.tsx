import Image from "next/image";

const Avatar = ({ url }: { url: string }) => {
  return (
    <div className="bg-slate-100 p-[1px] flex items-center justify-center rounded-full bg-muted relative">
      <Image
        className="rounded-full object-cover w-full md:w-[50px] h-auto md:h-[40px] max-w-[40px] md:max-w-[40px]"
        width={40}
        height={40}
        src={url}
        alt="avatar"
      />
    </div>
  );
};

export default Avatar;
