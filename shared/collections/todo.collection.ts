import { MongoObservable } from "meteor-rxjs";
import { Todo } from "@models";

export let TodoCollection = new MongoObservable.Collection<Todo>("todos");