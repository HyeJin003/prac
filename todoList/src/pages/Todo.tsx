//TODO TodoInput 에서는

import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

//TODO 샘플 목록

//TODO 할일 추가

//TODO 완료 / 미완료 처리 <s> 말하는거

//TODO  할일 삭제

function Todo() {
  const sampleList = [
    { samId: 1, title: "자바스크립트 공부", done: true },
    { samId: 2, title: "리액트 공부", done: true },
    { samId: 3, title: "React 과제하기", done: false },
  ];

  //상태가 수정되면 자동으로 화면이 리렌딩 된다.
  const [itemList, setItemList] = useState(sampleList);

  //TODO 할일 추가
  const handleAdd = (title: string) => {
    if (title.trim() === "") return;
    const newItem = {
      samId: Date.now(), // 고유한 id 생성
      title: title,
      done: false,
    };
    setItemList([...itemList, newItem]);
  };

  //TODO TypeScript가 "TodoList는 itemList props를 받을 준비가   안됐어!" 라고 에러
  // 2.  Type '{ itemList: { samId: number; title: string; done: boolean; }[]; }' is not assignable to type 'IntrinsicAttributes'.
  // Property 'itemList' does not exist on type 'IntrinsicAttributes'.
  // 해당 에러
  return (
    <>
      <div id="main">
        <div id="container">
          <ul>
            <li>
              <h2>할일 목록 </h2>
              <TodoInput onAdd={handleAdd} />
              {/* itemList 이건 props 의 이름  (받는쪽에서 쓸 키 ) 
              {itemList}이건 실제 넘겨줄 값 이라고 생각 하면되  */}
              <TodoList itemList={itemList} />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
export default Todo;
