import React from "react";
import { MdDeleteOutline } from "react-icons/md";
import { GrDocumentUpdate } from "react-icons/gr";
import Updatetodo from "../components/Updatetodo";
import { DeleteTodo } from "../components/redux/slice/TodoSlice";
import { useDispatch } from "react-redux";
const TodoCards = ({ Todo }) => {
  // const id = localStorage.getItem("id");
  const dispatch = useDispatch();
  return (
    <>
      {Todo.map((todo, id) => (
        <div
          className="card"
          style={{ width: "18rem", border: "1px solid" }}
          key={id}
        >
          <div className="card-body p-3">
            <h5 className="card-title">{todo.title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{todo.body}</h6>

            <button
              className="card-link"
              style={{
                textDecoration: "none",
                color: "#000",
                border: "none",
                background: "transparent",
              }}
            >
              <GrDocumentUpdate />
              <Updatetodo />
            </button>
            <button
              onClick={() => dispatch(DeleteTodo(todo._id))}
              className="card-link mx-3"
              style={{ border: "none", background: "transparent" }}
            >
              <MdDeleteOutline />
              Delete
            </button>
          </div>
          8
        </div>
      ))}
    </>
  );
};

export default TodoCards;
