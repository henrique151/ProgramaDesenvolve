import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-300 to-pink-300">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Welcome to My Portfolio</h1>
          <p>Meu primeiro deploy com Next.Js e Vercel</p>
        </div>
        <div className="bg-white/20 backdrop-blur rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-4">Sobre mim</h2>
          <p className="text-lg">
            Dev BackEnd e aprenendo a colocor aplicações no ar!
          </p>
        </div>
      </div>
    </main>
  );
}
