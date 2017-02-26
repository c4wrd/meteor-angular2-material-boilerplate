import { MongoObservable } from "meteor-rxjs";
import { Todo } from "@shared:models";

export let TodoCollection = new MongoObservable.Collection<Todo>("todos");