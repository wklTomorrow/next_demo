import Content from './context'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { enableBatching } from 'redux-batched-actions';

export default function WrapperComponent(
    {
        Component: Component,
        store,
        ...params
    }
) {
    return function Wrap(props) {
        let stores = createStore(combineReducers({store}));
        return (
            <Provider store={stores}>
                <Content.Provider value={{
                    str: 'hello world'
                }}>
                    <Component {...props} {...params}/>
                </Content.Provider>
            </Provider>
        )
    }
}