import { useForm } from "react-hook-form";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { toDoState, categoryState } from "../atoms";
import styled from "styled-components";

const Form = styled.form`
    input {
        padding: 5px;
        margin-right: 10px;
    }
    button {
    }
    span {
        font-weight: bold;
    }
`;
interface IForm {
    toDo: string;
}
function CreateToDo() {
    const setToDos = useSetRecoilState(toDoState);
    const category = useRecoilValue(categoryState);
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm<IForm>();
    const handleValid = ({ toDo }: IForm) => {
        setToDos((oldToDos) => [
            { text: toDo, id: Date.now(), category: category },
            ...oldToDos,
        ]);
        setValue("toDo", "");
    };
    return (
        <Form onSubmit={handleSubmit(handleValid)}>
            <input
                {...register("toDo", {
                    required: "빈 칸에 내용을 입력해주세요",
                })}
                placeholder="내용을 입력해주세요"
            />
            <span>{errors?.toDo?.message}</span>
        </Form>
    );
}
export default CreateToDo;
