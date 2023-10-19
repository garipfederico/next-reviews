import Link from "next/link";
import Heading from "@/components/Heading";

export default function ReviewsPage() {
  return (
    <>
      <Heading>Reviews</Heading>
      <ul className="flex flex-col gap-3">
        <li className="bg-white border rounded shadow w-80 hover:shadow-xl">
          <Link href="/reviews/hollow-knight">
            <img
              src="images/hollow-knight.jpg"
              alt=""
              width="320"
              height="180"
              className="mb-2 rounded"
            ></img>
            Hollow Knight
          </Link>
        </li>
        <li className="bg-white border rounded shadow w-80 hover:shadow-xl">
          <Link href="/reviews/stardew-valley">
          <img
              src="images/stardew-valley.jpg"
              alt=""
              width="320"
              height="180"
              className="mb-2 rounded"
            ></img>
            Stardew Valley
          </Link>
        </li>
      </ul>
    </>
  );
}
