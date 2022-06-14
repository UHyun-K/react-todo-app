import React, { ReactNode } from "react";
import styled from "styled-components";

const ToDoTemplateBlock = styled.div`
    display: flex;
    flex-direction: column;

    width: 500px;
    height: 600px;
    max-height: 1400px;
    background: #fff;

    padding-top: 48px;
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 24px;
`;
interface GlobalLayoutProps {
    children: ReactNode;
}
function ToDoTemplate({ children }: GlobalLayoutProps) {
    return <ToDoTemplateBlock>{children}</ToDoTemplateBlock>;
}
export default ToDoTemplate;
