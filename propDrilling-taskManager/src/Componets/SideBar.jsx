import Button from "./Button";
export default function Sidebar({onAddProject, projects, onSelect, selectedProject}) {
	return (
		<aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
			<h2 className="mb-8 font-bold uppercase md:text-xl teext-stone-200">Your Projects</h2>
			<div>
                <Button onClick={onAddProject}>
                    + Add Projects
                </Button>
			</div>
            <ul className="mt-8">
                {projects.map(project => {
                    let style = "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800"
                    if (project.id === selectedProject)
                        style += " bg-stone-800 text-stone-200"
                    else 
                        style += " text-stone-400"
                    return (
                        <li key={project.id}>
                        <button
                            className={style}
                            onClick={()=>onSelect(project.id)}>
                            {project.title}
                        </button>
                    </li>)})}
            </ul>
		</aside>
	);
}
