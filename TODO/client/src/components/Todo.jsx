import React, { useEffect, useState } from "react";
import TodoCards from "./TodoCards";
import { useSelector, useDispatch } from "react-redux";
import { CreateTodo } from "../components/redux/slice/TodoSlice";
import { ToastContainer, toast } from "react-toastify";
import { ReadTodo } from "../components/redux/slice/TodoSlice";
import "react-toastify/dist/ReactToastify.css";
const Todo = () => {
  // -----------------------------------------------------

  const [todo, setTodo] = useState({
    title: "",
    body: "",
  });

  // -----------------------------------------------------

  const { Todo } = useSelector((state) => state.Todo);
  console.log(Todo);
  const dispatch = useDispatch();
  const id = localStorage.getItem("id");

  // -----------------------------------------------------

  const [array, setArray] = useState([]);
  const GetTodo = (e) => {
    const { name, value } = e.target;
    setTodo({ ...todo, [name]: value });
  };

  // -----------------------------------------------------

  const AddTodo = () => {
    const { title, body } = todo;
    if (title === "") {
      toast.error("title is Required");
    } else if (body === "") {
      toast.error("body is Required");
    } else {
      if (id) {
        dispatch(CreateTodo({ todo, id }));
        setTodo({
          title: "",
          body: "",
        });
        setArray([...array, Todo]);
        toast.success("Todo Create Successfully");
        toast.error("Your Todo not Save Because Your are not login");
      }
    }
  };

  // -----------------------------------------------

  useEffect(() => {
    dispatch(ReadTodo(id));
  }, [todo]);

  // -----------------------------------------------

  return (
    <>
      <div className="todo">
        <div className="todo-main container d-flex justify-content-center align-items-center flex-column">
          <div className="d-flex flex-column todo-inputs w-50 mt-3">
            <input
              type="text"
              name="title"
              value={todo.title}
              placeholder="Title"
              className="my-3"
              onChange={GetTodo}
            />
            <textarea
              type="text"
              name="body"
              value={todo.body}
              placeholder="Body"
              onChange={GetTodo}
            />
          </div>
          <button className="addBtn nav-btn my-4" onClick={AddTodo}>
            Add
          </button>
        </div>
        <div className="todo-body">
          <div className="container">
            <div className="d-flex flex-wrap gap-4 mx-5 my-5">
              {Todo.length === 0 ? "" : <TodoCards Todo={Todo} />}
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position="top-center" autoClose={3000} theme="colored" />
    </>
  );
};

export default Todo;
