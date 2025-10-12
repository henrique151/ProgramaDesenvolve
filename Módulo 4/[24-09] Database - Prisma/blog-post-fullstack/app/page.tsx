import PostForm from "./components/PostForm";
import { getPosts } from "./actions/post";

export default async function Home() {
  const posts = await getPosts();

  return (
    <div>
      <div>
        <div>
          <h1>Meu blog com Prisma</h1>
        </div>

        <div>
          <h2>Criar novo post</h2>
          <PostForm />
        </div>

        <div>
          <h2>Post Recentes</h2>

          {posts.length === 0 ? (
            <p>Nenhum post encontrado, crie o primeiro acima!</p>
          ) : (
            posts.map((post) => (
              <div key={post.id} className="bg-amber-50 text-black mb-2">
                <div>
                  <h3>{post.title}</h3>
                  <p>{post.content}</p>
                  <span>Por: {post.author}</span>
                  <hr />
                 <span>{new Date(post.createdAt).toLocaleDateString()}</span>
                  <p>Total </p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
