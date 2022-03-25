import { action, observable } from "mobx";

class Store {
    @observable num = 0;

    constructor() {
        makeObservable(this)
    }

    @action
    add = (value) => {
        this.num = this.num +  value
    }
}

export default new Store()