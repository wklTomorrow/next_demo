import Head from 'next/head'
import Todo from '../../common/mobx/mobx'
import {inject, observer} from 'mobx-react';
import React from 'react';
import {} from 'mobx-react'
import { injectStore } from '../../common/inject';
@inject('Todo')
@observer
class Login extends React.Component {
    constructor(props) {
        super(props)
        this.store = this.props.Todo
        this.state = {
            name: '11'
        }
    }
    componentDidMount() {
        // console.log(this.props.Todo)
    }
    onChangeThis() {
        this.setState({
            name: 'hello world'
        })
    }
    render() {
        const {todos} = this.store
        const {name} = this.state
        console.log(this.props.Todo)
        return (
            <div>
                {this.props.Todo.num}
                <button onClick={() => {
                    this.props.Todo.numAdd()
                }}>add</button>
                <div>-----------,-----------</div>
                mobx
                {this.props.Todo.todos.length}
                <button onClick={() => {
                    this.props.Todo.add([1,2,3,4])
                    // this.onChangeThis()
                }}>点击</button>
                <button onClick={() => {
                    console.log(this.store.todos)
                }}>
                    get
                </button>
                <div>
                    {!!this.store.todos.length && (<div>
                        展示
                    </div>)}
                </div>
                <div>{name}</div>
                <div>{todos.map(item => (<div>{item}</div>))}</div>
            </div>
        )
    }
}

export default injectStore(Login, {
    Todo: Todo
})
