import Head from 'next/head'
import Todo from '../../common/mobx/mobx'
import {inject, observer} from 'mobx-react';
import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.Todo = new Todo()
    }
    render() {
        const {Todo} = this.Todo
        console.log(this.Todo)
        return (
            <div>
                mobx
                <button onClick={() => {
                    this.Todo.add([1,2,3,4])
                }}>点击</button>
            </div>
        )
    }
}

export default observer(Login)
