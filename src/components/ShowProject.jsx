export default function ShowProject({ project }) {
  console.log(project);

  return (
    <section className="align-left">
      <h3>{project.title}</h3>
      <p>{project.dueDate}</p>
      <p>{project.description}</p>
      <h4>Tasks</h4>

      <label htmlFor="addTask">Add Task</label>
      <input type="text" name="addTask" />

      <ul>
        {(project.tasks ?? []).map((task) => (
          <li key={task.id}>{task.name}</li>
        ))}
      </ul>
    </section>
  );
}
