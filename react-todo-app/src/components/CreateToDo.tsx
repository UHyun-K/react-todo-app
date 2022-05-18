import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { toDoState } from "../atoms";
interface IForm {
    toDo: string;
}
function CreateToDo() {
    const setToDos = useSetRecoilState(toDoState);
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm<IForm>();
    const handleValid = ({ toDo }: IForm) => {
        setToDos((oldToDos) => [
            { text: toDo, id: Date.now(), category: "TO_DO" },
            ...oldToDos,
        ]);
        setValue("toDo", "");
    };
    return (
        <form onSubmit={handleSubmit(handleValid)}>
            <input
                {...register("toDo", {
                    required: "please write to Do",
                })}
                placeholder="write a to do"
            />
            <button>Add</button>
            <span>{errors?.toDo?.message}</span>
        </form>
    );
}
export default CreateToDo;
