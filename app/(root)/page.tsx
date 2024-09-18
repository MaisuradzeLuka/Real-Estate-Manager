import AddAgent from "@/components/form/AddAgent";
import Button from "@/components/shared/Button";
import ListingCard from "@/components/shared/ListingCard";
import { IListing } from "@/types";
import { fetchListings } from "@/utils";
import Link from "next/link";

export default async function Home() {
  const listings: IListing[] = await fetchListings();

  return (
    <>
      <header className="flex items-start justify-between">
        <div>gkh</div>

        <div className="flex items-center justify-center gap-4">
          <Button type="button" variant="dark">
            <Link href="/addListing">+ ლისტინგის დამატება</Link>
          </Button>

          <AddAgent />
        </div>
      </header>

      <section className="grid grid-cols-4 justify-between gap-5">
        {listings.map((listing) => (
          <ListingCard key={listing.id} {...listing} />
        ))}
      </section>
    </>
  );
}
