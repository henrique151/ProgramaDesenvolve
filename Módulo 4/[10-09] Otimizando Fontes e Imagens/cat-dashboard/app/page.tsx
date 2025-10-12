import Image from "next/image";
import { fetchCatFetch } from "./_lib/data";
import FactCard from "./_components/FactCard";
import CatListWithFilter from "./_components/CardListWithFilter";
import CatListClient from "./_components/CatListCliente";

export default async function Home() {
  const facts = await fetchCatFetch(5)
  return (
  <div>
    <CatListClient />
    <h1 className="text-2xl font-bold text-center">Cats Facts (Server)</h1>
    {facts.map((fact) => ( 
        <FactCard key={fact.length} fact={fact.fact} />
    ))}
    <br />
    <CatListWithFilter initialFacts={facts} />
  </div>
  );
}
