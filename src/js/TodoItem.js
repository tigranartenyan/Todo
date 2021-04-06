

function TodoItem({todo, onChange, onDelete}) {
    return (
        <div>
            <labeL>
                <input type = "checkbox" checked = {todo.isCompleted} onChange = {(e) => {
                    onChange({
                        ...todo,
                        isCompleted: e.target.checked
                    })
                }}
                />
                {todo.text}
                <button onClick={() => {onDelete(todo);}}>X</button>
            </labeL>
        </div>
    )
}
export default TodoItem;