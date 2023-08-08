"use client"
import { useLocalStorage } from "@/app/hooks/useLocalStorage";
import { createContext, useContext } from "react";
//generador de id´s
import { v4 as uuid } from "uuid";

//crear contexto
export const TaskContext = createContext();

export const useTasks = () => {
    const context = useContext(TaskContext)
    if (!context) throw new Error("useTasks must used within a provider")
    return context
}

//exportamos el proveedor de contexto para que sea accesible de manera global
export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useLocalStorage('tasks', [])
    //crear la tarea
    const createTask = (title, description) => {
        setTasks([...tasks, {
            title,
            description,
            id: uuid()
        }])
    }
    //eliminar tareas
    const deleteTask = (id) => {
        setTasks([...tasks.filter(task => task.id !== id)])
    }
    //editar tarea
    const updateTask = (id, newData) => {
        //{...task, ...updateTask} tomar la tarea que esta recorriendo(...task)y la combinarlo con el nuevo objeto(...updatedTask)
        setTasks([...tasks.map(task =>
            task.id === id ? { ...task, ...newData } : task)]);
    }
    //exportamos las funciones
    return <TaskContext.Provider value={{
        tasks,
        createTask,
        deleteTask,
        updateTask
    }}>
        {children}
    </TaskContext.Provider>
}