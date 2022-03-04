import Content from './context'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { enableBatching } from 'redux-batched-actions';
// const isMobile = () => (window?.navigator?.userAgent?.match(/(iPhone|iPod|Android|ios|iOS|iPad|Backerry|WebOS|Symbian|Windows Phone|Phone)/i))

export default function WrapperComponent(
    {
        Component: Component,
        store,
        ...params
    }
) {
    return function Wrap(props = {}) {
        let stores = createStore(combineReducers({store}));
        const {isMobile} = props
        const item = (
        <Provider store={stores}>
            <Content.Provider value={{
                str: 'hello world',
                isMobile: isMobile
            }}>
                <Component {...props} {...params}/>
            </Content.Provider>
        </Provider>)
        if (isMobile) {
            return item
        }
        return (
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                height: '100vh',
                width: '100vw'
            }}>
                <div style={{
                    flex: 1
                }}>left</div>
                <div style={{
                    flex: 1,
                    border: '1px solid red',
                    boxSizing: 'border-box'
                }}>
                    {item}
                </div>
                <div style={{
                    flex: 1
                }}>
                    right
                </div>
            </div>
        )
    }
}