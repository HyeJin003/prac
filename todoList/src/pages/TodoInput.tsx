//TODO TodoInput 에서는

function TodoInput() {
  //TODO 추가 버튼 클릭 이벤트 핸들러

  const buttonAdd = () => {
    console.log("나 클릭했어 ");
  };

  //TODO 엔터 이벤트 핸들러
  const enterInput = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      console.log("엔터 눌림!", event.key);
    }
  };

  return (
    <>
      <input
        type="text"
        onChange={(event) => {
          console.log(event.target.value);
        }}
        onKeyDown={enterInput}
      />
      <button onClick={buttonAdd}>추가</button>
    </>
  );
}
export default TodoInput;
