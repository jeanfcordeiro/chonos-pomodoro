import { useState } from "react";
import { TaskContext } from "./TaskContext";
import { initialTaskState } from "./initialTaskState";

type TaskContexProvidertProps = {
    children: React.ReactNode;
};

export function TaskContextProvider({children}:TaskContexProvidertProps) {
    const [state, setState] = useState(initialTaskState);

    return (
        <TaskContext.Provider value={{state, setState}}>
            {children}
        </TaskContext.Provider>
    );
}