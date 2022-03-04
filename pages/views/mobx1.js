import {inject, observer} from 'mobx-react';
import React, { useState } from 'react';
import List from '../../common/mobx/mobx';

const Todo = new List()

export default function Index(props) {
    const [name, setName] = useState('')
    console.log(props)

    return (
        <div>
            mobx
            <div>
                <div>{name}</div>
                <button onClick={() => {
                    setName('hello world')
                }}>change</button>
            </div>
            <div>
                <button onClick={() => {
                    Todo.add([1,2,3,4,5])
                }}>update</button>
                <div>
                    {
                        Todo.todos.map(item => (
                            <div>{item}</div>
                        ))
                    }
                </div>
                {Todo.todos.length}
            </div>
        </div>
    )
} 

export function getStaticProps() {
    return {
        props: {
        }
    }
}