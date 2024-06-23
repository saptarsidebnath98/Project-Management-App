import { useState } from "react";
import ProjectSidebar from "./components/ProjectSidebar.jsx";
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import SelectedProject from "./components/SelectedProject.jsx";

function App() {
  const [projectState, setProjectState] = useState({
    seletedProjectId: undefined,
    projects: []
  });

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
      };

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

  const selectedProject = projectState.projects.find(project=> project.id === projectState.seletedProjectId)

  let content = <SelectedProject project={selectedProject} onDelete={handleDeleteProject}/>;

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
