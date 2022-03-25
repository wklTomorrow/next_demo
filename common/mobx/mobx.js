import { action, makeObservable, observable } from "mobx";

class Todo {
    @observable todos = [];
    @observable num = 0

    constructor() {
        makeObservable(this)
    }

    @action
    add(list) {
        this.todos = list
    }

    @action numAdd() {
        this.num ++
    }
}

export default Todo