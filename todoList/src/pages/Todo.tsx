//TODO TodoInput 에서는

import TodoInput from "./TodoInput";

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

  return (
    <>
      <div id="main">
        <div id="container">
          <ul>
            <li>
              <h2>할일 목록 </h2>
              <TodoInput />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
export default Todo;
