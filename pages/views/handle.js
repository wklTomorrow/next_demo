import {mapStateToProps, mapDispatchToProps, jobData} from '../../common/store/handle'

import { connect } from 'react-redux';

import WrapperComponent from '../../common/app';

function Index(props) {
    console.log(props)
    return (
        <div>
            redux
            <button onClick={() => {
                props.setJobListData([{
                    name: '1'
                }])
            }}>点击</button>
        </div>
    ) 
}


export default WrapperComponent({
    Component: connect(mapStateToProps, mapDispatchToProps)(Index),
    store: jobData
})