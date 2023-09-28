"use client";
import { useState } from "react";
import AddNewTodo from "./add-new-todo";
import "../styles/dashboard.css";
export default function Dashoard() {
  const [modalShow, setModalShow] = useState(false);
  const [btnChange, setBtnChange] = useState(false);
  const handleShow = () => {
    setModalShow(true);
    setBtnChange(true);
  };
  const handleClose = () => setModalShow(false);
  return (
    <>
      <div className="container">
        <h1>TODO LIST</h1>
        <button className="icon-btn add-btn">
          <div className="add-icon"></div>
          <div className="btn-txt" onClick={handleShow}>
            Add Todo
          </div>
        </button>
        <AddNewTodo
          handleClose={handleClose}
          btnChange={btnChange}
          modalShow={modalShow}
          handleShow={handleShow}
        />
      </div>
    </>
  );
}
