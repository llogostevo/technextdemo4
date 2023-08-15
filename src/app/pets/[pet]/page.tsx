import type { Metadata } from "next";

export function generateMetadata({params}: {params: PetPageParam}) {
  return{
    title: `${params.pet.charAt(0).toUpperCase()+params.pet.slice(1)}`,
    description: 'look at all the pets',
  }
}

type PetPageParam = {
    pet: string;
}

export default function PetPage({params}: {params: PetPageParam}) {
  return (
    <div>
        <h2>This is the Individual Pet Page:</h2>
        <h3>{params.pet.toUpperCase()}</h3>
    </div>
  )
}
