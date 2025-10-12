'use client'; // Componentes de erro precisam ser Componentes de Cliente

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Loga o erro para um serviço de relatórios de erro
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Algo deu errado!</h2>
      <button
        onClick={
          // Tenta se recuperar renderizando o segmento novamente
          () => reset()
        }
      >
        Tentar novamente
      </button>
    </div>
  );
}