
export const AddTask = ({ taskList, setTaskList, task, setTask }) => {
    function handleSubmit(event) {
        event.preventDefault()

        if (task.id) {
            const date = new Date()
            const updatedTaskList = taskList.map((todo) => (
                todo.id === task.id ?
                    { id: task.id, name: task.name, time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}` } :
                    todo
            ))
            setTaskList(updatedTaskList)
            setTask({})
        } else {
            const date = new Date()
            const newTask = {
                id: date.getTime(),
                name: event.target.task.value,
                time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
            }
            setTaskList([...taskList, newTask])
            //the below line wont work since now the task.value is bound to name in the input field below
            //event.target.task.value = ""
            //IT STILL WONT WORK
            //basically the object is left undefined, give it an "" OR option in the value field
            setTask({})

        }



    }


    return (
        <section className="addTask">
            <form onSubmit={handleSubmit}>
                <input type="text"
                    name="task"
                    value={task.name || ""}
                    autoComplete="off"
                    placeholder="add task"
                    maxLength={25}
                    onChange={e => setTask(prevTask => ({ ...prevTask, name: e.target.value }))}
                />
                <button type="submit">{task.id ? "Update" : "Add"}</button>
            </form>

        </section>
    )
}
