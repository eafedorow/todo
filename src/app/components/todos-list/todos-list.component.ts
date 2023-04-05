import {Component, OnInit} from '@angular/core';
import {Todo} from "../../model/todo.model";
import {TodosService} from "../../services/todos.service";

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.scss']
})
export class TodosListComponent implements OnInit {
  todos: Todo[] = [];

  constructor(
    private todosService: TodosService
  ) {
  }

  ngOnInit() {
    this.todosService.getTodos().subscribe((data) => {
      this.todos = data as Todo[];
      console.log(this.todos)
    })
  }
}
