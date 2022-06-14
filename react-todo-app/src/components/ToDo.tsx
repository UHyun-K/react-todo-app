import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { IToDo, toDoState, Categories, categoryState } from "../atoms";
import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircleCheck,
    faCircle,
    faArrowAltCircleLeft,
    faTrashCan,
} from "@fortawesome/free-regular-svg-icons";

const List = styled.li`
    width: 100%;
    position: relative;
    padding: 10px 10px 10px 0;

    display: flex;
    align-items: center;
    justify-content: space-between;
    :hover {
        background: rgba(0, 0, 0, 0.1);
    }
    span {
        font-size: 15px;
        font-weight: bold;
    }
`;

const Btns = styled.button`
    margin: 0 5px;
    font-size: 20px;
`;
const lastIcon = {
    color: "red",
};

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
        <List>
            <span>{text}</span>
            <div>
                {category !== Categories.DOING && (
                    <Btns name={Categories.DOING} onClick={onClick}>
                        <FontAwesomeIcon icon={faArrowAltCircleLeft} />
                    </Btns>
                )}
                {category !== Categories.TO_DO && (
                    <Btns name={Categories.TO_DO} onClick={onClick}>
                        <FontAwesomeIcon icon={faCircle} />
                    </Btns>
                )}
                {category !== Categories.DONE && (
                    <Btns name={Categories.DONE} onClick={onClick}>
                        <FontAwesomeIcon icon={faCircleCheck} />
                    </Btns>
                )}
                <Btns onClick={onDelete} name={Categories.DELETE}>
                    <FontAwesomeIcon style={lastIcon} icon={faTrashCan} />
                </Btns>
            </div>
        </List>
    );
}

export default ToDo;
