import { useState } from "react";

import "./App.css";

import ProjectsSidebar from "./components/ProjectsSidebar";

import NewProject from "./components/NewProject";
import ShowProject from "./components/ShowProject";
import NoProjectSelected from "./components/NoProjectSelected";

const initProjects = [
  {
    id: 1,
    title: "Go to legit",
    description: "This is a project to reach the ultimate strength and be enlightened.",
    dueDate: "31.12.2025",
    tasks: [
      { id: 1, name: "learn everyday something new" },
      { id: 2, name: "be open for changes" },
    ],
  },
  {
    id: 2,
    title: "Go to legit2",
    description: "This is a project to reach the ultimate strength and be enlightened.",
    dueDate: "31.12.2025",
    tasks: [
      { id: 1, name: "learn everyday something new" },
      { id: 2, name: "be open for changes" },
    ],
  },
];

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function handleStartAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handleAddProject(projectData) {
    setProjectsState((prevState) => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId,
      };

      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  function handleCancelProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }

  console.log(projectsState);

  let content;

  if (projectsState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelProject} />;
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar onStartAddProject={handleStartAddProject} projects={projectsState.projects} />
      {content}
    </main>
  );
}

export default App;

/* 

 <div className="bg-indigo-200 w-full">
        {view === "addNew" && (
          <NewProject onSave={addNewProject} onCancel={handleCancel} />
        )}
        {view === "showProject" && <ShowProject project={activeProject} />}
        {view === "default" && (
          <p>Select a project or get started with a new one</p>
        )}
      </div>
*/
