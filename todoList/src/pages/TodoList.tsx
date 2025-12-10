import TodoItem from "./TodoItem";

interface TodoListProps {
  itemList: TodoItem[];
}
function TodoList({ itemList }: TodoListProps) {
  console.log(itemList);

  const list = itemList.map((list) => {
    console.log(list.samId, list.title, list.done);

    return (
      <TodoItem key={list.samId}>
        {list.title}
        {list.done}
      </TodoItem>
    );
  });
  return <ul className="todoList">{list}</ul>;
}
export default TodoList;
