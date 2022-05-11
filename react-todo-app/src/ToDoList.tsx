import React from "react";
import { useForm } from "react-hook-form";

interface IForm {
    email: string;
    firstName: string;
    lastName: string;
    ID: string;
    password: string;
    password2: string;
    extraError?: string;
}
function ToDoList() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
    } = useForm<IForm>({
        defaultValues: {
            email: "@naver.com",
        },
    });
    const onValid = (data: IForm) => {
        if (data.password !== data.password2) {
            return setError(
                "password",
                { message: "Password are not same" },
                { shouldFocus: true }
            );
        }
        setError("extraError", { message: "Server offline" });
    };
    console.log(errors);
    return (
        <div>
            <form
                style={{ display: "flex", flexDirection: "column" }}
                onSubmit={handleSubmit(onValid)}
            >
                <input
                    {...register("email", {
                        required: "Email required",
                        pattern: {
                            value: /^[A-Za-z0-9._%+-]+@naver.com$/,
                            message: "Only naver.com email allowed",
                        },
                    })}
                    placeholder="Email "
                />
                <span>{errors?.email?.message}</span>
                <input
                    {...register("firstName", {
                        required: "write here",
                        validate: {
                            noNico: (value) =>
                                value.includes("nico")
                                    ? "no nicos allowed"
                                    : true,
                            noNick: (value) =>
                                value.includes("nick")
                                    ? "no nick allowed"
                                    : true,
                        },
                    })}
                    placeholder="firstName"
                />
                <span>{errors?.firstName?.message}</span>
                <input
                    {...register("lastName", { required: "write here" })}
                    placeholder="lastName "
                />
                <span>{errors?.lastName?.message}</span>
                <input
                    {...register("ID", {
                        required: "write here",
                        minLength: {
                            value: 5,
                            message: "minLength is 6",
                        },
                    })}
                    placeholder="ID "
                />
                <span>{errors?.ID?.message}</span>
                <input
                    {...register("password", {
                        required: "password is required",
                        minLength: {
                            value: 5,
                            message: "your password is too short",
                        },
                    })}
                    placeholder="Password "
                />
                <span>{errors?.password?.message}</span>
                <input
                    {...register("password2", {
                        required: "password is required",
                        minLength: {
                            value: 5,
                            message: "your password is too short",
                        },
                    })}
                    placeholder="Password2 "
                />
                <span>{errors?.password2?.message}</span>
                <button>Add</button>
                <span>{errors?.extraError?.message}</span>
            </form>
        </div>
    );
}

export default ToDoList;
