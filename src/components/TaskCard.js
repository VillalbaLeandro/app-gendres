import { useRouter } from "next/navigation";
import { useTasks } from "../context/TasksContext";
import { toast } from "react-hot-toast";

export const TaskCard = ({ task }) => {
    const router = useRouter()
    const { deleteTask } = useTasks()

    return (
        <div style={{ background: "#202020", color: "white" }}
            onClick={() =>
                router.push(`/edit/${task.id}`)}
        >
            <h1>{task.title}</h1>
            <button onClick={(e) => {
                //detiene la redireccion del elemento de atras
                e.stopPropagation()
                const accept = window.confirm("estas seguro de eliminar esta tarea?")
                if (accept) deleteTask(task.id)
                toast.success("eliminado correctamemte")

            }} >
                Delete</button>
            <p>{task.description}</p>
        </div>
    )
}