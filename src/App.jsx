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
      const newProject = {
          ...projectData,
          id: Math.random()
      };

      return{
        ...prevState,
        projects: [...prevState.projects, newProject]
      };
    });
  }

  console.log(projectState);

  let content;

  if(projectState.seletedProjectId === null){
    content = <NewProject onAdd={handleAddProject}/>
  }else if(projectState.seletedProjectId === undefined){
    content = <NoProjectSelected onStartAddProject={handleStratAddProject}/>
  }


  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar onStartAddProject={handleStratAddProject}/>
      {content}
    </main>
  );
}

export default App;
