//todolist할일 목록 조회
export interface todoList {
  keyword: string;
  page: number;
  limit: number;
}
export interface TodoItemProps {
  _id: number;
  title: string;
  done: boolean;
}
//todolist 할일 등록
export interface TodoInput {
  ok: number;
  item: TodoInputProps;
}
// props 타입 정의
export interface TodoInsertProps {
  addTodo: (title: string) => void;
}
//todolist 할일 등록 props
export interface TodoInputProps {
  _id: number;
  title: string;
  content: string;
  done: boolean;
  important: boolean;
  createdAt: string;
  updatedAt: string;
  finishAt: string;
}

//todolist/{_id} 할일 상세 조회
export interface todoListDetail {
  _id: string;
}

export interface detailResponse {
  ok: number;
  item: todoListUpdate;
}
//todolist/{_id} 할일 수정
export interface todoListUpdate {
  title: string;
  content: string;
  done: boolean;
}

//todolist/{_id} 할일 삭제
export interface todoListDelete {
  _id: number;
}

//todolist/{_id} 할일 삭제
export interface TodoDeleteParams {
  ok: number;
  message: string;
}
