import { useState } from "react";
import ProjectSidebar from "./components/ProjectSidebar.jsx";
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";

function App() {
  const [projectState, setProjectSelected] = useState({
    seletedProjectId: undefined,
    projects: []
  });

  function handleStratAddProject(){
    setProjectSelected(prevState=>{
      return{
        ...prevState,
        seletedProjectId : null,
      };
    });
  }

  let content;

  if(projectState.seletedProjectId === null){
    content = <NewProject/>
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
