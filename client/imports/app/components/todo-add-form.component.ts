import { Component, Output, Input, EventEmitter } from '@angular/core';


@Component({
  selector: 'todo-add-form',
  template: `
    <md-card>
      <md-card-title>Todos</md-card-title>
      <md-card-content fxLayout="row" fxLayout="column" fxLayoutAlign="center center">
        <md-input-container>
          <input mdInput placeholder="Add todo" [(ngModel)]="text">
        </md-input-container>
        <button md-raised-button (click)="addTodoClicked()">Add Todo</button>
      </md-card-content>
    </md-card>
  `,
  styles: [`
    input {
      width: 300px;
    }
  `]
})
export class TodoAddFormComponent {
  
  text: string = '';

  @Output() addTodo = new EventEmitter<string>();

  addTodoClicked() {
    if ( this.text.length > 0 ) {
        this.addTodo.emit(this.text);
        this.text = '';
    }
  }
}