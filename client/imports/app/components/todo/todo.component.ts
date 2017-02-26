import { Component, Input } from '@angular/core';
import template from "./todo.component.html";
import style from "./todo.component.scss";

@Component({
    selector: 'tr[todo]',
    template: template,
    styles: [style],
})
export class TodoComponent {

    @Input("task")
    taskText: string;

    @Input("completed")
    isCompleted: boolean;

}
