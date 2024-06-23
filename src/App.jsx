import ProjectSidebar from "./components/ProjectSidebar.jsx";
import NewProject from "./components/NewProject.jsx";

function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar/>
      <NewProject/>
    </main>
  );
}

export default App;
