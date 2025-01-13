import { useState } from "react";

import Input from "./Input";

export default function NewProject({ onSave, onCancel }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");

  const newProject = {
    title: title,
    description: description,
    dueDate: dueDate,
    tasks: [],
  };

  function titleHandler(event) {
    setTitle(event.target.value);
  }

  function descriptionHandler(event) {
    setDescription(event.target.value);
  }

  function dueDateHandler(event) {
    setDueDate(event.target.value);
  }

  function handleSave() {
    onSave(newProject);
  }

  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-stone-800 hover:text-stone-950">
            Cancel
          </button>
        </li>
        <li>
          <button className="bg-stone-800 text-stone-50 hover:bg-stone-950 px-6 py-2 rounded-md">
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input label="Title" />
        <Input label="Description" textarea />
        <Input label="Due Date" />
      </div>
    </div>
  );
}

/* 
<div className="flex justify-end w-full pr-4">
        <button
          className="mr-2 bg-slate-100 rounded px-3 my-2"
          onClick={() => onCancel(false)}
        >
          Cancel
        </button>
        <button
          className="bg-slate-800 text-white rounded px-3 my-2"
          onClick={handleSave}
        >
          Save
        </button>
      </div>
      <label className="block" htmlFor="title ">
        Title
      </label>
      <input type="text" name="title" onChange={titleHandler} />

      <label className="block" htmlFor="description">
        Description
      </label>
      <input type="textarea" name="description" onChange={descriptionHandler} />

      <label className="block" htmlFor="dueDate">
        Due Date
      </label>
      <input type="date" name="description" onChange={dueDateHandler} />

*/
