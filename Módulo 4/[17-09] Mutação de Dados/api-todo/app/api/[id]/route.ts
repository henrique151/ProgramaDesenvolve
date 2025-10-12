
import * as todosData from '@/app/data/todos'

interface RouteParams {
  params: {
    id: string
  }
}

export async function GET(request: Request, { params }: RouteParams) {
  const id = parseInt(params.id)

  if (isNaN(id)) {
    return Response.json({
      success: false,
      error: "Id inválido"
    },
      { status: 400 }
    )
  }

  const todo = todosData.getById(id);

  if (!todo) {
    return Response.json(
      {
        success: false,
        error: 'Tarefa não encontrada'
      },
      { status: 404 }
    )
  }

  return Response.json({
    success: true,
    data: todo
  })
}

export async function PUT(request: Request, { params }: RouteParams) {
  const id = parseInt(params.id);
  const body = await request.json();

  if (isNaN(id)) {
    return Response.json({
      success: false,
      error: "Id inválido"
    },
      { status: 400 }
    )
  }

  const updatedTodo = todosData.update(id, body)

  if (!updatedTodo) {
    return Response.json(
      {
        success: false,
        error: 'Tarefa não encontrada'
      },
      { status: 404 }
    )
  }

  return Response.json({
    success: true,
    data: updatedTodo,
    message: "Tarefa atualizada"
  })
}

export async function DELETE(request: Request, { params }: RouteParams) {
  const id = parseInt(params.id);

  if (isNaN(id)) {
    return Response.json({
      success: false,
      error: "Id inválido"
    },
      { status: 400 }
    )
  }

  const deletedTodo = todosData.delete(id);

  if (!deletedTodo) {
    return Response.json(
      {
        success: false,
        error: 'Tarefa não encontrada'
      },
      { status: 404 }
    )
  }

  return Response.json({
    success: true,
    message: "Tarefa deletada"
  })
}