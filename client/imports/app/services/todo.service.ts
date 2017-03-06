import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ObservableCursor } from "meteor-rxjs";

import { Todo } from "@shared:models";
import { TodoCollection } from "@shared:collections";

@Injectable()
export class TodoService {

    private todoList: ObservableCursor<Todo>;

    constructor() {
        this.todoList = TodoCollection.find({});
    }

    getTodos(): Observable<Todo[]> {
        return this.todoList.zone();
    }

    createTodo(task: string): Observable<String> {
        return TodoCollection.insert({
            task,
            completed: false
        });
    }

    toggleTodo(todo: Todo): Observable<number> {
        return TodoCollection.update(todo._id, {
            $set: {
                completed: !todo.completed
            }
        })
    }

}
