import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
        <aside>
            <h3>Navegação do painel</h3>
            <ul>
                <li>
                    <Link href="/dashboard">Visão Geral</Link>
                </li>
                <li>
                    <Link href="/dashboard/settings">Configurações</Link>
                </li>
            </ul>
        </aside>
        <main>{children}</main>
    </section>
  );
}
