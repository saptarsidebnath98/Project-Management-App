import { useState } from "react";
import ProjectSidebar from "./components/ProjectSidebar.jsx";
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";

function App() {
  const [projectState, setProjectState] = useState({
    seletedProjectId: undefined,
    projects: []
  });

  function handleStratAddProject(){
    setProjectState(prevState=>{
      return{
        ...prevState,
        seletedProjectId : null,
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

  let content;

  if(projectState.seletedProjectId === null){
    content = <NewProject onAdd={handleAddProject}/>
  }else if(projectState.seletedProjectId === undefined){
    content = <NoProjectSelected onStartAddProject={handleStratAddProject}/>
  }


  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar 
      onStartAddProject={handleStratAddProject}
      projects={projectState.projects}/>
      {content}
    </main>
  );
}

export default App;
