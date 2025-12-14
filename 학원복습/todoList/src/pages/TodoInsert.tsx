import type { TodoInsertProps } from "@/type/todo";
import "@styles/TodoInsert.css";
import { useState } from "react";
function TodoInsert({ addTodo }: TodoInsertProps) {
  const [inputValue, setInputValue] = useState("");
  const inputHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputResult = event.target.value;
    setInputValue(inputResult);
  };
  const keyDownHandle = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      if (inputValue.trim() === "") return;
      addTodo(inputValue);
      setInputValue("");
    }
  };

  const buttonHandle = () => {
    if (inputValue.trim() === "") {
      return;
    }
    addTodo(inputValue); // 부모 함수 호출
    setInputValue("");
  };

  return (
    <section className="todoInsert">
      <h2>할일 등록 </h2>
      <div>
        <input
          type="text"
          value={inputValue}
          onKeyDown={keyDownHandle}
          onChange={inputHandle}
        />
        <button onClick={buttonHandle}>등록</button>
      </div>
    </section>
  );
}
export default TodoInsert;

//TODO ---
//   투두 등록 구현 가이드

//   Step 1: TodoList.tsx 수정

//   - useState import 하기
//   - 하드코딩 배열 → useState로 변경
//   - addTodo 함수 만들기
//   - <TodoInsert /> 컴포넌트 추가하고 addTodo 전달

// TODO  Step 2: TodoInsert.tsx 만들기

//   - input과 button 만들기
//   - 입력값 관리할 useState 만들기
//   - 버튼 클릭 시 props로 받은 addTodo 호출
//   - 등록 후 input 초기화

//  TODO Step 3: 타입 정의 (선택)

//   - TodoInsert의 props 타입 정의

//   ---
// TODO  팁

//   - form + onSubmit 쓰면 Enter키로도 등록 가능
//   - e.preventDefault() 잊지 말기
//   - 빈 값 등록 방지 체크 추가하면 좋아
