import NewTask from "./NewTask.jsx";
export default function Tasks({onAdd, onDelete}) {
  return (
    <section>
        <h2 className="text-xl font-bold text-stone-700 mb-4">Tasks</h2>
        <NewTask onAdd={onAdd}/>
        <p className="text-stone-800 my-4">
            This project has not any tasks yet.
        </p>
        <ul></ul>
    </section>
  )
}
