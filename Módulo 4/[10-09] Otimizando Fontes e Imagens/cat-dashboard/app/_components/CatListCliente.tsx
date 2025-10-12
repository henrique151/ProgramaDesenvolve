'use client'
import useSWR from "swr";
import FactCard from "./FactCard";

const  fetcher = (url: string) => fetch(url).then((reponse) => reponse.json());

export default function  CatListClient() {
    const {data, isLoading} = useSWR(
        "https://catfact.ninja/facts?limit=5",
        fetcher
    )

    console.log(data)
  

    if(isLoading) {
        return (
            <div>
                Carregando...
            </div>
        )
    }
    return (
        <div>
            {data?.data?.map((fact) => (
                <FactCard key={fact.length} fact={fact.fact} />
            ))}
        </div>
    )
}