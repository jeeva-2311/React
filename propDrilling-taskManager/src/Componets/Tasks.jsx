import NewTask from "./NewTask";

export default function Tasks({tasks, onAddTask, onDeleteTask}) {
    return <section>
        <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
        <NewTask onAdd={onAddTask} />
        {tasks.length === 0 ? <p className="text-stone-800 my-4">example tasks</p> :
            <ul className="p-4 mt-8 rounded-md bg-stone-100">
                {tasks.map(task => {
                    return (
                        <li key={task.id} className="flex justify-between my-4">
                            <span>{task.text}</span>
                            <button
                                className="text-stone-700 hover:text-red-500"
                                onClick={() => {
                                    console.log(task.id);
                                    onDeleteTask(task.id)
                                }}
                            >clear
                            </button>
                        </li>)})}
            </ul>}
    </section>
}