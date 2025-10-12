import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header>
          <h1>Meu Aplicativo Incrível</h1>
          <nav>
            <a href="">Início</a> | 
            <a href="/dashboard"> Painel</a> |
            <Link href="blog"> Blog</Link> 
          </nav>
        </header>
        {children}
        <footer>
          <p>Minha empresa - {new Date().getFullYear()}</p>
        </footer>
      </body>
    </html>
  );
}
