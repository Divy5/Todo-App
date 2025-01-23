import { TodoForm } from "./TodoForm";
import { TodoList } from "../TodoList";
import { TodoDateTime } from "./TodoDateTime";
import { useState } from "react";
import { getLocalStorageTodoData, setLocalStorageTodoData } from "./TodoLocalStoage";


export const TodoProject = () =>{
    
    const [task, setTask] = useState(() => getLocalStorageTodoData())

    
    const handleFormSubmit = (inputValue) => {
    const {id, content, checked} = inputValue
     if(!content) return;

    //  if(task.includes(inputValue)) return;

    const ifTodoContentMatched = task.find((currTask) => currTask.content === content);
    if(ifTodoContentMatched) return;

     setTask((task) => [...task, {id, content, checked}]);
    };

    // add data to localStorage
    setLocalStorageTodoData(task);
    
    // Check Task function
    const checkedElem = (content) =>{
        const updatedTask = task.map((currTask) =>{
            if(currTask.content === content){
                return {...currTask, checked: !currTask.checked}
            }else{
                return currTask;
            }
        })
        setTask(updatedTask);
    }

    // Delete Task function
    const deleteElem = (CurrtaskData) =>{
        // console.log(taskData);
        const deletetask = task.filter((currTask) => currTask.content !== CurrtaskData)
        setTask(deletetask)
    };
    
    // Clear All Task function
    const clearAllTask = () =>{
        setTask([])
    }

    return (
        <section className="todo-container">
            <header>
                <h1>Todo List</h1>
                <TodoDateTime/>
            </header>

          <TodoForm onAddTodo={handleFormSubmit}/>  

            <section className="myUnOrdList">
                <ul>
                    {
                        task.map((currTask) =>{
                            return ( 
                            <TodoList key={currTask.id}  
                            data={currTask.content} 
                            checked={currTask.checked}
                            deleteElem={deleteElem}
                            checkedElem={checkedElem}/>
                            )
                        })
                    }
                </ul>
            </section>
            <button 
            className="clear-btn"
            onClick={clearAllTask}>Clear All</button>

        </section>
    )
}