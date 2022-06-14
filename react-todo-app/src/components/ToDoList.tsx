import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { categoryState, toDoSelector, customState, Categories } from "../atoms";

import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";
import CreateCategory from "./CreateCategory";

function ToDoList() {
    const toDos = useRecoilValue(toDoSelector);
    const [category, setCategory] = useRecoilState(categoryState);
    const custom = useRecoilValue(customState);

    const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
        setCategory(event.currentTarget.value as any);
    };

    return (
        <div>
            <select value={category} onInput={onInput}>
                <option value={Categories.TO_DO}>To Do</option>
                <option value={Categories.DOING}>Doing</option>
                <option value={Categories.DONE}>Done</option>
                {custom?.map((prev) => (
                    <option {...prev}>{prev.category}</option>
                ))}
            </select>

            <CreateCategory />
            <CreateToDo />
            {toDos?.map((toDo) => (
                <ToDo key={toDo.id} {...toDo} />
            ))}
        </div>
    );
}

export default ToDoList;
