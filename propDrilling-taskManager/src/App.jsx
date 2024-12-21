import { useState } from "react";
import NewProject from "./Componets/NewProject";
import NoProject from "./Componets/NoProject";
import Sidebar from "./Componets/SideBar";
import SelectedProject from "./Componets/SelectedProject";

function App() {

  const [projectState, setProjectState] = useState({
    selectedProject: undefined,
    projectsArray: [], 
    tasks: []
  });

  function handleAddTask(text) {
    setProjectState(prev => {
      const newTask = {
        text: text,
        id: Math.random(),
        projectId: prev.selectedProject
      }
      return {
        ...prev,
        tasks: [...prev.tasks, newTask] 
      }
    });
  }

  function handleDeleteTask(id) {
    console.log(id)
    setProjectState(prev => {
      return {
        ...prev,
        tasks: prev.tasks.filter((task) => task.id !== id)
      }
    });
  }

  function handleAddProject() {
    setProjectState(prev => {
      return {
        ...prev,
        selectedProject: null 
      }
    });
  }
  function handleSetProject(projectData) {
    setProjectState(prev => {
      const newProject = {
        ...projectData,
        id: Math.random()
      }
      return {
        ...prev,
        selectedProject: undefined,
        projectsArray: [...prev.projectsArray, newProject] 
      }
    });
  }

  function handleCancel() {
    setProjectState(prev => {
      return {
        ...prev,
        selectedProject: undefined 
      }
    });
  }

  function handleSelectProject(id) {
    setProjectState(prev => {
      return {
        ...prev,
        selectedProject: id
      }
    });
  }

  function handleDeleteProject() {
    setProjectState(prev => {
      return {
        ...prev,
        selectedProject: undefined, 
        projectsArray: prev.projectsArray.filter((project) => project.id !== prev.selectedProject)
      }
    });
  }
  const selectedProject = projectState.projectsArray.find(
    project => project.id === projectState.selectedProject
  );
  let content = <SelectedProject
    project={selectedProject}
    onDelete={handleDeleteProject}
    onAddTask={handleAddTask}
    onDeleteTask={handleDeleteTask}
    tasks={projectState.tasks}
  />;
  
  if (projectState.selectedProject === null)
    content = <NewProject onAddProject={handleSetProject} onCancel={handleCancel} />
  else if (projectState.selectedProject === undefined)
    content = <NoProject onAddProject={handleAddProject} />
  
  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar
        onAddProject={handleAddProject}
        projects={projectState.projectsArray}
        onSelect={handleSelectProject}
        selectedProject={selectedProject}
      />
      {content}
    </main>
  );
}

export default App;
