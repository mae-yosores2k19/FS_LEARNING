"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";
import '../styles/add-new-todo.css'
const base = 'http://localhost:5000/api/todo'
export default function AddNewTodo(props) {
  const { modalShow, handleClose} = props
  const router = useRouter();

  let initial = {
    title: "",
    content: "",
    isDone: false
  };
  const [data, setData] = useState(initial)
  const [todoList, setTodoList] = useState([])
  const { content, title } = data
  const handleInputTodo = (e) => {
    const { name, value } = e.target
    setData({ ...data, [name]: value, isDone: false })
  }
  const handleAddTodo = async () => {
    const { content, title } = data ?? {}
    if (data) {
      const res = await axios.post(`${base}/addTodo`, data);
      setTodoList([...todoList, res.data])
      setData({ ...data, content, title })
    } else {
      alert('No content')
    }
    handleClose()
    router.refresh()
  }
  // className={modalShow ? "modal display-block" : "modal display-none"}
  return (
    <>
    
      {modalShow ?
        (<div className="modal" >
          <p>Add Todo</p>
          <form>
            <div className="user-box">
              <input
                type="text"
                onChange={(e) => handleInputTodo(e)}
                name='title'
                value={title}
              />
              <label>Title</label>
            </div>
            <div className="user-box">
              <textarea
                placeholder="‎"
                id="comment"
                rows="5"
                required=""
                onChange={(e) => handleInputTodo(e)}
                name='content'
                value={content}
              ></textarea>
              <label className="textarea-label">Content</label>
            </div>
            <a href="#" onClick={handleAddTodo}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>

              Add Todo
            </a>

          </form>
        </div>) : <></>}
    </>

  );
}