import {Todo} from "./models/todo";

export class App {
  private appName = "Todo List";
  private todoTitle = "";
  private todos: Todo[] = [
    new Todo("Task one", false),
    new Todo("Task two", false),
    new Todo("Task three", false)
  ];
  
  addTodo() {
    this.todos.push(new Todo(this.todoTitle, false));
    this.todoTitle = "";
  }
}
