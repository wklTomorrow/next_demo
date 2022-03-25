import Store from '../../common/mobx/store'

import {inject, observer} from 'mobx-react';
import React from 'react';
import { injectStore } from '../../common/inject';

@observer
class ShowNume extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                {Store.num}
                <button onClick={() => {Store.add(10)}}>++</button>
            </div>
        )
    }
}

export default ShowNume