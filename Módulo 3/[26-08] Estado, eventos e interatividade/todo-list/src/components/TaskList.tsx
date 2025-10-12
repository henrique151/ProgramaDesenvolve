import TaskItem from "./TaskItem";

export default function TaskList(props) {
    const {tasks, onToggleComplete, onDeleteTask} = props;

    return (
        <ul>
            {tasks.map(task => (
                <TaskItem 
                    key = {task.id}
                    task = {task}
                    onToggleComplete={onToggleComplete}
                    onDeleteTask={onDeleteTask}
                />
            ))}
        </ul>
    )

}