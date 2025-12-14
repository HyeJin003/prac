import TodoInsert from "@/pages/TodoInsert";
import TodoItem from "@/pages/TodoItem";
import "@styles/TodoList.css";
import { useState } from "react";

function TodoList() {
  const todoList = [
    { _id: 1, title: "학원공부하기", done: true },
    { _id: 2, title: "타입스크립트", done: true },
    { _id: 3, title: "투두리스트만들기", done: false },
    { _id: 4, title: "목록", done: false },
    { _id: 5, title: "리액트", done: false },
    // { _id: 6, title: "리액트", done: false },
    // { _id: 7, title: "리액트", done: false },
    // { _id: 8, title: "리액트", done: false },
    // { _id: 9, title: "리액트", done: false },
    // { _id: 10, title: "리액트", done: false },
  ];
  const [data, setData] = useState(todoList);
  const addTodo = (title: string) => {
    if (title.trim() === "") {
      return;
    }
    const newTodo = {
      _id: data.length + 1, // 고유 key
      title: title,
      done: false,
    };

    setData((prev) => [...prev, newTodo]);
  };
  // 1. 내가 하고 싶은데로 쓰면 간단하게 할 수 있음
  // 2. 다만 보통 재사용성 /가독성 때문에 컴포넌트 분리해서 씀 그렇기 때문에 .map 을 여기가 아니라 렌더링쪽으로 보내준다
  // const todo = todoList.map((item) => {
  //   return (
  //     <div key={item._id}>
  //       {item._id}
  //       {item.title}
  //       {item.done}
  //     </div>
  //   );
  // });
  return (
    <>
      <div>
        <TodoInsert addTodo={addTodo} />
      </div>
      <div className="todoList">
        <h2>할 일 목록</h2>
        <input type="text" placeholder="검색어를 입력하세요" />
        {data.map((item) => (
          <TodoItem key={item._id} {...item} />
        ))}
      </div>
    </>
  );
}

export default TodoList;
