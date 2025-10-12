export default function TaskInput(props) {
    const { taskText, onInputChange, onAddTask} = props;

    return (
        <form onSubmit={onAddTask}>
            <input type="text"
                placeholder="Adicionar nova tarefa"
                value={taskText}
                onChange={onInputChange}
            />
            <button type="submit">Adicionar</button>
        </form>
    )
}