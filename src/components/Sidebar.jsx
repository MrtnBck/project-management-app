export default function Sidebar({ projects, onSelect, onAdd }) {
  console.log(projects);

  function handleSelectProject(id) {
    //console.log(id);
    onSelect(id);
  }

  return (
    <aside className="w-[30%] bg-sky-300">
      <h1 className="text-xl mb-4">Your Projects</h1>
      <button
        className="px-4 py-1 mb-6 bg-green-300 rounded "
        onClick={() => {
          onAdd(true);
        }}
      >
        Add Project
      </button>
      <ul className="ml-2 text-left">
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
      </ul>
    </aside>
  );
}
