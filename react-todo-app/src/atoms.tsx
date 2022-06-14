import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";

export enum Categories {
    "TO_DO" = "TO_DO",
    "DOING" = "DOING",
    "DONE" = "DONE",
    "DELETE" = "DELETE",
    "CUSTOM" = "CUSTOM",
}

export const categoryState = atom<Categories>({
    key: "category",
    default: Categories.TO_DO,
});

export interface ICustom {
    category: string;
    key: number;
}
export const customState = atom<ICustom[]>({
    key: "newCategory",
    default: [],
});
const { persistAtom } = recoilPersist({
    key: "todoLocal",
    storage: localStorage,
});

export interface IToDo {
    text: string;
    id: number;
    category: Categories;
}
export const toDoState = atom<IToDo[]>({
    key: "toDo",
    default: [],
    effects_UNSTABLE: [persistAtom],
});

export const toDoSelector = selector({
    key: "toDoSelector",
    get: ({ get }) => {
        const toDos = get(toDoState);
        const category = get(categoryState);
        return toDos.filter((toDo) => toDo.category === category);
    },
});
