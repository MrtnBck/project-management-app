import Button from "./Button";

export default function ProjectsSidebar({ onStartAddProject, projects }) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your Projects</h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>
      <ul className="mt-8">
        {projects.map((project) => (
          <li key={project.id}>
            <button className="w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:text-stone-200 hover:bg-stone-800">
              {project.title}
            </button>
          </li>
        ))}
      </ul>

      {/*  <ul className="ml-2 text-left">
        {projects.map((project) => (
          <li
            key={project.title}
            className="mb-0 cursor-pointer hover:bg-slate-100"
            onClick={() => {
              handleSelectProject(project.id);
            }}
          >
            {project.title}
          </li>
        ))}
      </ul> */}
    </aside>
  );
}
