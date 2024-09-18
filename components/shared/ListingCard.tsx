import { IListing } from "@/types";
import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";
import { IoBed } from "react-icons/io5";
import { BiSolidArea } from "react-icons/bi";
import { BsFillSignpostFill } from "react-icons/bs";
import Link from "next/link";

const ListingCard = ({
  is_rental,
  image,
  price,
  city,
  area,
  bedrooms,
  zip_code,
  address,
  id,
}: IListing) => {
  return (
    <Link href={`${id}`}>
      <div className="relative w-full rounded-xl shadow-black shadow-md">
        <Image
          width={384}
          height={307}
          src={image}
          alt="listing for sale"
          className=" rounded-t-xl"
        />
        <span className="absolute top-5 left-4 py-2 px-3  text-white bg-[#02152640] rounded-3xl transp">
          {is_rental ? "ქირავდება" : "იყიდება"}
        </span>

        <div className=" px-6 py-5 text-[#021526B2]">
          <h3 className=" text-3xl font-bold text-black">{price} &#8382;</h3>

          <p className="flex gap-1 items-center my-5">
            <FaLocationDot className="text-2xl" /> {city.name}, {address}
          </p>

          <div className="flex gap-8 text-lg">
            <p className="flex items-center gap-1">
              <IoBed className="text-2xl" /> {bedrooms}
            </p>
            <p className="flex items-center gap-1">
              <BiSolidArea className="text-2xl" /> {area}
              <span>
                მ<sup>2</sup>
              </span>
            </p>
            <p className="flex items-center gap-1">
              <BsFillSignpostFill className="text-2xl" /> {zip_code}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ListingCard;
