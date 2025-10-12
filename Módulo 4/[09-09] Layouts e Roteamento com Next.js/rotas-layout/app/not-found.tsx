import Link from 'next/link';

export default function NotFound() {
  return (
    <div>
      <h2>Página Não Encontrada</h2>
      <p>Desculpe, não foi possível encontrar o recurso solicitado.</p>
      <Link href="/">Retornar para a Home</Link>
    </div>
  );
}
