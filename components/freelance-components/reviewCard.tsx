import { FaStar } from "react-icons/fa";
import Founder from "./founder";

type ReviewCardProps = {
  review: string;
  img: string;
  owner: string;
  position: string;
};

const ReviewCard = ({ review, img, owner, position }: ReviewCardProps) => {
  return (
    <div className=" px-7 py-7 border flex flex-col rounded-lg justify-between h-[320px] w-[320px] border-[#2b2d2d] bg-[#1b1d1d] ">
      <div className="flex flex-col gap-6">
        <div className="flex items-center text-gray-400 gap-[2px]">
          {[...Array(5)].map((_, index) => (
            <FaStar key={index} size={22} />
          ))}
        </div>

        <p>{review}</p>
      </div>

      <Founder url={img} name={owner} subtitle={position} />
    </div>
  );
};

export default ReviewCard;
