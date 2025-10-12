export default function Home() {
  const posts = [
    {slug: 'hello-world', title: 'Hello World'},
    {slug: 'nextjs-15', title: 'O que há de novo no Next.js'},
    {slug: 'react-19', title: 'React 19 e Server Components'},
  ]
  return (
    <div>
      <h1>Últimos postos</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
          <a href={`/blog/${post.slug}`}>{post.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
