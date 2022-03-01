import {mapStateToProps, mapDispatchToProps, store} from '../../common/store/index'

import { connect } from 'react-redux';

import WrapperComponent from '../../common/app';

function Index(props) {
    const {value, setValue} = props
    return (
        <div>
            {value + ''}
            redux
            <button onClick={() => setValue(1)}>点击</button>
        </div>
    ) 
}


export default WrapperComponent({
    Component: connect(mapStateToProps, mapDispatchToProps)(Index),
    store: store
})