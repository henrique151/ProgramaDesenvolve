import Image from "next/image";

interface PokemonType {
    name: string,
    sprites: {
        front_default: string
    }
}

export default async function Pokemon() {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    const pokemon = await res.json() as PokemonType;
    console.log(pokemon)
    return (
        <div>
            <h1>{pokemon.name}</h1>
            <Image 
                src={pokemon.sprites.front_default} 
                alt={pokemon.name} 
                width={100}
                height={100}
            />
        </div>
    )
}