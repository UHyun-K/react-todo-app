import React, { ReactNode } from "react";
import styled from "styled-components";

const ToDoTemplateBlock = styled.div`
    display: flex;
    flex-direction: column;

    width: 500px;
    height: 600px;
    max-height: 1400px;
    background: #fff;
`;
interface GlobalLayoutProps {
    children: ReactNode;
}
function ToDoTemplate({ children }: GlobalLayoutProps) {
    return <ToDoTemplateBlock>{children}</ToDoTemplateBlock>;
}
export default ToDoTemplate;
