
import { FaCheck } from "react-icons/fa6";
import { MdDeleteForever } from "react-icons/md";

export const TodoList = ({deleteElem, checked, checkedElem, data}) => {

    const isChecked = checked ? "checkList" : "notCheckList";

    return (
        <li className="todo-item">
            <span className={isChecked}>{data}</span>
            <button className="check-btn" onClick={() => checkedElem(data)}><FaCheck /></button>
            <button className="delete-btn" onClick={() => deleteElem(data)}><MdDeleteForever /></button>
        </li>
    )
}