export default async function Cats() {
    const res = await fetch('https://catfact.ninja/fact');
    const fact = await res.json() as {fact: string, length: number};
    console.log(fact)
    return (
    <div>
        <h1>Página de gatinho</h1>
        <p>Fato de hoje: {fact.fact}</p>
        <p>Este fato contém {fact.length} caracteres</p>
    </div>
    )
}