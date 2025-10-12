export default function TaskItem(props) {
    const {task, onToggleComplete, onDeleteTask} = props;
    return (
        <li style={{ textDecoration: task.completed? 'line-through' : 'none'}}>
            {task.text}
        <button onClick={() => onToggleComplete(task.id)}>
            {task.completed ? 'Desmarcar' : 'Marcar concluída'}
        </button>
        <button onClick={() => onDeleteTask(task.id)}>Excluir</button>
        </li>
    )
}