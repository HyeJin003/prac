import type { Children } from "react";

// interface TodoItemProps {
//   samId: number;
//   title: string;
//   done: boolean;
// }
function TodoItem({ children }: { children: React.ReactNode }) {
  //  <TodoItem key={list.samId}>
  //       {list.title}
  //       {list.done}
  return <li>{children}</li>;
}
export default TodoItem;
