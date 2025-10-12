export default function FactCard({ fact}: {fact: string}) {
    return (
        <p className="p-4 border rounded shadow-sm bg-white text-black">
            {fact}
            </p>
    )
}