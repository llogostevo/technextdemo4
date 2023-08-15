import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Lloyds Pet Emporium - Pets',
  description: 'look at all the pets',
}

// type for the query strings
type PetSearchQuery = {
  sortBy: string;
};

type Pet = {
  name: string;
  slug: string;
}
// array to create pages

const pets: Pet[] = [
  {name: "Impala", slug: "impala"},
  {name:  "Elephant", slug: "elephant"},
  {name: "Pangolin", slug:"pangolin"},
];

function comparePets(a: Pet, b: Pet){
  if ( a.name < b.name ){
    return -1;
  }
  if ( a.name > b.name ){
    return 1;
  }
  return 0;
}


export default function PetsPage({ searchParams }: { searchParams: PetSearchQuery }) {
  if (searchParams.sortBy === "asc") {
    pets.sort(comparePets);
  } else if (searchParams.sortBy === "desc") {
    pets.sort(comparePets).reverse();
  }

  return (
    <div>
      <h2>Pets</h2>
      <Link href={`/pets`}>Original Order</Link>
      <Link href={`/pets?sortBy=asc`}>Ascending</Link>
      <Link href={`/pets?sortBy=desc`}>Descending</Link>
        <ul>
          {pets.map((pet) => {
            return (
            <li key={pet.slug}>
              <Link href={`/pets/${pet.slug}`}>{pet.name}</Link>
            </li>
            );
          })}
      </ul>
    </div>
  )
}
