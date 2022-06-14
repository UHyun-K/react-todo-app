import React from "react";
import styled from "styled-components";
import { Categories, toDoSelector } from "../atoms";
import { useRecoilValue } from "recoil";
const ToDoHeadBlock = styled.div`
    h1 {
        font-size: 30px;
        font-weight: bold;
    }
    h2 {
        font-size: 20px;
        font-weight: bold;
        color: #999;
    }
    h3 {
        color: green;
        font-size: 20px;
        font-weight: bold;
    }
    margin-bottom: 20px;
`;

function ToDoHead() {
    const today = new Date();
    let dateString = today.toLocaleString("ko-KR", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
    let dayName = today.toLocaleString("ko-KR", { weekday: "long" });

    const toDos = useRecoilValue(toDoSelector);
    let unDone = toDos.filter((todo) => todo.category !== Categories.DONE);
    return (
        <ToDoHeadBlock>
            <h1>{dateString}</h1>
            <h2>{dayName}</h2>
            <hr />
            <h3>할 일 {unDone.length}개 남음</h3>
        </ToDoHeadBlock>
    );
}
export default ToDoHead;
