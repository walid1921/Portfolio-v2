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
    <div className=" md:px-7 md:py-7 px-4 py-4 border flex flex-col rounded-lg justify-between md:h-[320px] md:w-[320px] h-[300px] w-[300px] border-[#2b2d2d] bg-[#1b1d1d] ">
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
