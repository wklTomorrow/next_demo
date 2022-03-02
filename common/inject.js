import { Provider } from 'mobx-react';
import React from 'react'

export const injectStore = function(Component, stores) {
    const new_store = {};
    class Wrapper extends React.Component {
      constructor(props) {
        super(props);
        this.doInject();
      }
  
      doInject = () => {
        Object.keys(stores).forEach(item => {
          new_store[item] = new stores[item]();
        });
      };
  
      render() {
        return (
          <Provider {...new_store}>
            <Component />
          </Provider>
        );
      }
    }
    return Wrapper;
};