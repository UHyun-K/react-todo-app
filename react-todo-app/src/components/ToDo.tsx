import React from "react";
import { useSetRecoilState } from "recoil";
import { IToDo, toDoState, Categories } from "../atoms";

function ToDo({ text, category, id }: IToDo) {
    const setToDos = useSetRecoilState(toDoState);
    const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        const {
            currentTarget: { name },
        } = event;

        setToDos((oldToDos) => {
            const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
            const oldToDo = oldToDos[targetIndex];
            const newToDo = { text, id, category: name as any };

            return [
                ...oldToDos.slice(0, targetIndex),
                newToDo,
                ...oldToDos.slice(targetIndex + 1),
            ];
        });
    };

    const onDelete = (event: React.MouseEvent<HTMLButtonElement>) => {
        setToDos((oldToDos) => {
            const targetindex = oldToDos.findIndex((todo) => todo.id === id);
            return [
                ...oldToDos.slice(0, targetindex),
                ...oldToDos.slice(targetindex + 1),
            ];
        });
    };

    return (
        <li>
            <span>{text}</span>
            {category !== Categories.DOING && (
                <button name={Categories.DOING} onClick={onClick}>
                    DOING
                </button>
            )}
            {category !== Categories.TO_DO && (
                <button name={Categories.TO_DO} onClick={onClick}>
                    TO_DO
                </button>
            )}
            {category !== Categories.DONE && (
                <button name={Categories.DONE} onClick={onClick}>
                    DONE
                </button>
            )}
            <button onClick={onDelete} name={Categories.DELETE}>
                ❌
            </button>
        </li>
    );
}

export default ToDo;
