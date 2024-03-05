export interface Todo {
  id?: string,
  title: string;
  content: string;
  isDone: boolean;
}

export interface TodoAction {
  type: 'create' | 'update' | 'deleted';
}
