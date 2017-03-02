import { MongoObservable } from "meteor-rxjs";
import { Todo } from "@shared:models";

export let TodoCollection = new MongoObservable.Collection<Todo>("todos");

/*
function loggedIn() {
  return !!Meteor.user();
}

TodoCollection.allow(
    {
        insert: loggedIn,
        update: loggedIn,
        remove: loggedIn
    }
);
*/