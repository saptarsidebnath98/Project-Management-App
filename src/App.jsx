import { useState } from "react";
import ProjectSidebar from "./components/ProjectSidebar.jsx";
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import SelectedProject from "./components/SelectedProject.jsx";

function App() {
  const [projectState, setProjectState] = useState({
    seletedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  function handleAddTask(text){
    setProjectState((prevState) => {
      const taskId = Math.random();
      const newTask = {
          text: text,
          projectId: prevState.seletedProjectId,
          id: taskId
      };

      return{
        ...prevState,
        tasks: [newTask, ...prevState.tasks]
      };
    });
  }

  function handleDeleteTask(id){
    setProjectState((prevState)=>{
      return{
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id),
      };
    });
  }

  function handleSelectProject(id){
    setProjectState((prevState)=>{
      return{
        ...prevState,
        seletedProjectId : id,
      };
    });
  }

  function handleStratAddProject(){
    setProjectState((prevState)=>{
      return{
        ...prevState,
        seletedProjectId : null,
      };
    });
  }

  function handleCancelAddProject(){
    setProjectState((prevState)=>{
      return{
        ...prevState,
        seletedProjectId : undefined,
      };
    });
  }

  function handleAddProject(projectData){
    setProjectState(prevState => {
      const projectId = Math.random();
      const newProject = {
          ...projectData,
          id: projectId
      }

      return{
        ...prevState,
        seletedProjectId : undefined,
        projects: [...prevState.projects, newProject]
      };
    });
  }
  function handleDeleteProject(){
    setProjectState((prevState)=>{
      return{
        ...prevState,
        seletedProjectId : undefined,
        projects : prevState.projects.filter(
          (project) => project.id !== prevState.seletedProjectId
        )
      };
    });
  }

   // Find the selected project
  const selectedProject = projectState.projects.find(project=> project.id === projectState.seletedProjectId);

  // Filter tasks to include only those for the selected project
  const selectedProjectTasks = projectState.tasks.filter(task => task.projectId === projectState.seletedProjectId);

  let content = (
  <SelectedProject 
    project={selectedProject} 
    onDelete={handleDeleteProject}
    onAddTask={handleAddTask}
    onDeleteTask={handleDeleteTask}
    tasks={selectedProjectTasks}/>
  );

  if(projectState.seletedProjectId === null){
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject}/>
  }else if(projectState.seletedProjectId === undefined){
    content = <NoProjectSelected onStartAddProject={handleStratAddProject}/>
  }


  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar 
      onStartAddProject={handleStratAddProject}
      projects={projectState.projects}
      onSelectProject={handleSelectProject}/>
      {content}
    </main>
  );
}

export default App;
