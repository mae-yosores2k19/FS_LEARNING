"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { FaTrashAlt } from "react-icons/fa";
import "../styles/todo.css";
const base = "http://localhost:5000/api/todo";
async function updateTodo(_id, isDone, refresh) {
  await axios.put(`${base}/updateTodo`, { _id, isDone });
  refresh();
}

async function deleteTodo(id, refresh) {
  await axios.post(`${base}/deleteTodo`, { id });
  refresh();
}

export default function Todo({ todo }) {
  const router = useRouter();
  return (
    <>
      {/* <input
        type="checkbox"
        onChange={(e) => updateTodo(todo._id, e.target.checked,router.refresh)}
        checked={todo.isDone}
      /> */}
      <div class="checkbox-wrapper-31">
        <input
          checked={todo.isDone}
          type="checkbox"
          onChange={(e) =>
            updateTodo(todo._id, e.target.checked, router.refresh)
          }
        />
        <svg viewBox="0 0 35.6 35.6">
          <circle class="background" cx="17.8" cy="17.8" r="17.8"></circle>
          <circle class="stroke" cx="17.8" cy="17.8" r="14.37"></circle>
          <polyline
            class="check"
            points="11.78 18.12 15.55 22.23 25.17 12.87"
          ></polyline>
        </svg>
      </div>
      <span>{todo.content}</span>
      {/* <div className="delete"> */}
        <span className="delete-span">
          <FaTrashAlt className="delete-icon" onClick={() => deleteTodo(todo._id, router.refresh)} />
        </span>
      {/* </div> */}
    </>
  );
}
