"use client";

import { useFormStatus } from "react-dom";
import { createPost } from "../actions/post";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending}>
      {pending ? "Criando..." : "Criar Post"}
    </button>
  );
}

export default function PostForm() {
  return (
    <form action={createPost}>
      <div>
        <label htmlFor="title">Título</label>
        <input
          type="text"
          id="title"
          name="title"
          required
          placeholder="Digite o título do post"
        />
      </div>
      <div>
        <label htmlFor="content">Conteúdo</label>
        <input
          type="text"
          id="content"
          name="content"
          required
          placeholder="Digite o conteúdo do post"
        />
      </div>
      <div>
        <label htmlFor="author">Autor</label>
        <input
          type="text"
          id="author"
          name="author"
          required
          placeholder="Seu nome"
        />
      </div>
      <SubmitButton />
    </form>
  );
}
