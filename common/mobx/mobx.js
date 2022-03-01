import { action, observable } from "mobx";

class Todo {
    @observable todos = [];

    @action
    add = (list) => {
        this.todos = list
    }
}

export default Todo