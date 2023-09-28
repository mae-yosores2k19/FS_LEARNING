import Todo from "./todo";
import axios from "axios";
import '../styles/todo-list.css'

const getTodos = async () => {
  try {
    const response = await axios.get('http://localhost:5000/api/todo/getAllTodo');
    const todo = response.data;
    return todo
  } catch (error) {
    console.log(error);
  }
};

export default async function TodoList() {
  // const{handleShow} = props
  const { data: todo } = await getTodos();
  return (
    <div className='card'>
      
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {todo.map((t) => {
          return (
            <li key={t.id} style={{ padding: "11px 0" }}>
              <Todo todo={t} />
            </li>
          );
        })}
      </ul>

    </div>
  );
}