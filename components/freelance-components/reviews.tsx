import { FaStar } from "react-icons/fa";
import Avatar from "./avatar";

const Reviews = () => {
  return (
    <div className="flex items-start md:items-center space-x-4 ">
      <div className="flex -space-x-4">
        <Avatar
          url={"https://i.pravatar.cc/150?u=a042581f4e29026024d"}
          height={40}
          width={40}
        />
        <Avatar
          url={"https://i.pravatar.cc/150?u=a04258a2462d826712d"}
          height={40}
          width={40}
        />
        <Avatar
          url={"https://i.pravatar.cc/150?u=a042581f4e29026704d"}
          height={40}
          width={40}
        />
        <Avatar
          url={"https://i.pravatar.cc/150?u=a04258114e29026302d"}
          height={40}
          width={40}
        />
      </div>

      <div className="flex flex-col ">
        <span className=" font-medium text-sm ">
          Loved by <strong>10+</strong> Clients
        </span>
        <div className="flex items-center text-yellow-500">
          {[...Array(5)].map((_, index) => (
            <FaStar key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
