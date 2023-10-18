import Link from "next/link"

export default function ReviewsPage(){
    return (
        <>
       <h1>Reviews</h1> 
       <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/reviews/hollow-knight" >hollow-knight</Link>
              </li>
              <li>
                <Link href="/reviews/stardew-valley" >stardew-valley</Link>
              </li>
            </ul>
        </>
    )
}