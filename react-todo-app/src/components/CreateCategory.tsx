import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { customState } from "../atoms";
import styled from "styled-components";

const Form = styled.form`
    display: flex;

    align-items: center;
    button {
        margin-left: 3px;
        border: 1px solid black;
    }
    span {
        font-weight: bold;
    }
`;

function CreateCategory() {
    const setCustom = useSetRecoilState(customState);
    interface IForm {
        newCategory: string;
    }
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm<IForm>();

    const onCustomSubmit = ({ newCategory }: IForm) => {
        setCustom((current) => [
            { category: newCategory, key: Date.now() },
            ...current,
        ]);
        setValue("newCategory", "");
    };
    return (
        <Form onSubmit={handleSubmit(onCustomSubmit)}>
            <input
                {...register("newCategory", {
                    required: "목록 이름을 작성해주세요",
                })}
                placeholder=" 생성할 목록을 입력해주세요"
            />
            <button>추가</button>
            <span>{errors?.newCategory?.message}</span>
        </Form>
    );
}

export default CreateCategory;
