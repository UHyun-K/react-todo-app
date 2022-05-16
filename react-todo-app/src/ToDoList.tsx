import React from "react";
import { useForm } from "react-hook-form";
interface IForm {
    toDo: string;
}
function ToDoList() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm<IForm>();
    const handleValid = (data: IForm) => {
        console.log("add to do ", data.toDo);
        setValue("toDo", "");
    };
    return (
        <div>
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
        </div>
    );
}

export default ToDoList;
