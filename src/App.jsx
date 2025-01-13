import { useState } from "react";

import "./App.css";

import Sidebar from "./components/Sidebar";

import NewProject from "./components/NewProject";
import ShowProject from "./components/ShowProject";

const initProjects = [
  {
    id: 1,
    title: "Go to legit",
    description:
      "This is a project to reach the ultimate strength and be enlightened.",
    dueDate: "31.12.2025",
    tasks: [
      { id: 1, name: "learn everyday something new" },
      { id: 2, name: "be open for changes" },
    ],
  },
  {
    id: 2,
    title: "Go to legit2",
    description:
      "This is a project to reach the ultimate strength and be enlightened.",
    dueDate: "31.12.2025",
    tasks: [
      { id: 1, name: "learn everyday something new" },
      { id: 2, name: "be open for changes" },
    ],
  },
];

function App() {
  const [projects, setProjects] = useState(initProjects);
  const [activeProject, setActiveProject] = useState(null);
  const [view, setView] = useState("default"); // 'default', 'addNew', 'showProject'

  function addNewProject(newProject) {
    newProject.id = projects.length + 1;
    setProjects((prevProjects) => [newProject, ...prevProjects]);
    setView("default");
  }

  function selectProject(id) {
    setActiveProject(projects.find((project) => project.id === id));
    setView("showProject");
  }

  function handleAddNew() {
    setView("addNew");
  }

  function handleCancel() {
    setView("default");
  }

  return (
    <div className="w-full flex">
      <Sidebar
        projects={projects}
        onSelect={selectProject}
        onAdd={handleAddNew}
      />
      <div className="bg-indigo-200 w-full">
        {view === "addNew" && (
          <NewProject onSave={addNewProject} onCancel={handleCancel} />
        )}
        {view === "showProject" && <ShowProject project={activeProject} />}
        {view === "default" && (
          <p>Select a project or get started with a new one</p>
        )}
      </div>
    </div>
  );
}

export default App;
