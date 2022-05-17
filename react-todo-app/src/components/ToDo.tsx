import { toDoState } from "../atoms";
import { useRecoilValue } from "recoil";

function ToDo() {
    const toDos = useRecoilValue(toDoState);
    return (
        <ul>
            {toDos.map((toDo) => (
                <li key={toDo.id}>{toDo.text}</li>
            ))}
        </ul>
    );
}
export default ToDo;
