export async function fetchCatFetch(limit = 10) {
    const res = await fetch(`https://catfact.ninja/facts?limit=${limit}`,
        {next: { revalidate: 120}}
    )
    if (!res.ok) {
        throw new Error("Failed to fetch")
    }

    const data = await res.json()
    console.log(data)
    return data.data as {fact: string, length:number}[];
}

export function fetcher(url: string) {
    fetch(url).then((reponse) => reponse.json())
}

