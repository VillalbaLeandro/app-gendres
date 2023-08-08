import { useEffect, useState } from "react";
export function useLocalStorage(key, initialState) {
    const [state, setState] = useState(initialState);
    // se usa useeffect para que localstorage se use solamente del lado del cliente para evitar errores.

    useEffect(() => {
        const item = localStorage.getItem(key);
        const tasks = JSON.parse(item);
        if (tasks) {
            setState(tasks);
        }
    }, []); 
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state));
    }, [state]);
    return [state, setState];
}