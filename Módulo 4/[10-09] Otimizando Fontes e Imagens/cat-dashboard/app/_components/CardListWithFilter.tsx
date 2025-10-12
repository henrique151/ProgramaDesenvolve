'use client'
import { useState } from "react";
import FactCard from "./FactCard";

interface Props {
    initialFacts: {fact: string, length: number}[]
}

export default function CatListWithFilter({ initialFacts }: Props) {
    const [query, setQuery] = useState("");

    const filtered = initialFacts.filter((fact) => 
        fact.fact.toLowerCase().includes(query.toLowerCase())
    )

    return (
        <section>
            <input 
                type="text"
                placeholder="Procure aqui"
                className="border p-2 w-full mb-4"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />

            <div>
                {filtered.map((fact) => (
                    <FactCard key={fact.length} fact={fact.fact} />
                ))}
                {filtered.length === 0 && (
                    <p>Sem fatos encontrados</p>
                )}
            </div>
        </section>
    )
}