import { ISingleListing } from "@/types";
import { convertDate, fetchListings } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import { BiSolidArea } from "react-icons/bi";
import { BsFillSignpostFill } from "react-icons/bs";
import { FaArrowLeft, FaLocationDot } from "react-icons/fa6";
import { IoBed } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";

const page = async ({ params }: { params: { id: string } }) => {
  const listing: ISingleListing = await fetchListings(`/${params.id}`);

  return (
    <>
      <header>
        <Link href="/" className="text-2xl">
          <FaArrowLeft />
        </Link>
      </header>

      <section className="flex items-center gap-16 mt-5 text-[#808A93]">
        <div>
          <Image
            src={listing?.image}
            width={840}
            height={670}
            alt="listing image"
            className=" rounded-t-xl "
          />

          <p className=" text-right mt-1">
            გამოქვეყნების თარიღი {convertDate(listing?.created_at)}
          </p>
        </div>

        <article className="flex flex-col gap-10 ">
          <h3 className=" text-5xl font-bold text-black">
            {listing?.price} &#8382;
          </h3>

          <div className="flex flex-col gap-4 text-2xl">
            <p className="flex gap-2 items-center">
              <FaLocationDot className="text-3xl" /> {listing?.city.name},
              {listing?.address}
            </p>

            <p className="flex items-center gap-2">
              <IoBed className="text-3xl" />
              საძინებელი {listing?.bedrooms}
            </p>

            <p className="flex items-center gap-2">
              <BiSolidArea className="text-3xl" />
              ფართი {listing?.area}მ<sup>2</sup>
            </p>

            <p className="flex items-center gap-2">
              <BsFillSignpostFill className="text-3xl" />
              საფოსტო ინდექსი {listing?.zip_code}
            </p>
          </div>

          <p>
            იყიდება ბინა ჭავჭავაძის ქუჩაზე, ვაკეში. ბინა არის ახალი რემონტით,
            ორი საძინებლითა და დიდი აივნებით. მოწყობილია ავეჯითა და ტექნიკით.{" "}
          </p>

          <div className="py-8 px-6 border-border-gray border rounded-xl">
            <div className="flex items-center gap-3">
              <Image
                src={listing?.agent.avatar}
                width={72}
                height={72}
                alt="agent avatar"
                className="rounded-full w-[72px] h-[72px] object-center"
              />

              <div>
                <h4 className="text-black">{listing?.agent.name}</h4>
                <span className="text-sm">აგენტი</span>
              </div>
            </div>

            <p className="flex items-center gap-3 mt-8 mb-2">
              <MdOutlineEmail className="text-2xl" /> {listing?.agent.email}
            </p>

            <address className="flex items-center gap-3 ">
              <FiPhoneCall className="text-2xl" /> {listing?.agent.phone}
            </address>
          </div>
        </article>
      </section>
    </>
  );
};

export default page;
