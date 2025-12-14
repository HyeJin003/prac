import type { TodoItemProps } from "@/type/todo";
import "@styles/TodoItem.css";
function todoItem({ _id, title, done }: TodoItemProps) {
  console.log("==1", _id);
  console.log("==12==", { title });
  console.log("==12==", { done });

  return (
    <div className="todoItem">
      <span>{_id}. </span>
      <span>{title}</span>
      <span className={done ? "done" : "todo"}>{done ? "완료" : "진행중"}</span>
      <button>삭제</button>
    </div>
  );
}
export default todoItem;
