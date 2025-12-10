//TODO TodoInput 에서는

import { useState } from "react";

interface TodoInputProps {
  onAdd: (title: string) => void;
}

function TodoInput({ onAdd }: TodoInputProps) {
  const [title, setTitle] = useState("");

  //TODO 추가 버튼 클릭 이벤트 핸들러
  const buttonAdd = () => {
    onAdd(title);
    setTitle(""); // 입력창 비우기
  };

  //TODO 엔터 이벤트 핸들러
  //event가 어떤 형태로 생긴 객체인지 정확히 알려주는 타입이라 쓰는거!!
  const enterInput = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      buttonAdd();
    }
  };

  return (
    <>
      <input
        type="text"
        value={title}
        onChange={(event) => {
          setTitle(event.target.value);
        }}
        onKeyDown={enterInput}
      />
      <button onClick={buttonAdd}>추가</button>
    </>
  );
}
export default TodoInput;
