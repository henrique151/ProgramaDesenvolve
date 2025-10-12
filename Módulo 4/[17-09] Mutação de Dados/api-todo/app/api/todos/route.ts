import { todosData } from "@/app/lib/todos";
import { NextRequest } from "next/server";


export async function GET() {
  try {
    const todos = todosData.getAll()

    return Response.json({
      success: true,
      data: todos,
      count: todos.length
    })
  } catch (error) {
    return Response.json(
      {
        success: false,
        error: "falhou"
      },
      { status: 500}
    )
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!body.title || typeof body.title !== "string") {
      return Response.json({
        success: false,
        error: "Title precisa ser uma string e é obrigatório"
      })
    }

    const newTodo = todosData.create(body.title);

    return Response.json({
      success: true,
      data: newTodo,
      message: "Criada com sucesso"
    },
    { status: 201 }
  )
  } catch (error) {
    return Response.json(
      {
        success: false,
        error: "falhou"
      },
      { status: 500}
    )
  }
}

