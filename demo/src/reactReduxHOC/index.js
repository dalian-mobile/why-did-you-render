import React from 'react';
import {createStore} from 'redux';
import * as Redux from 'react-redux';
import _ from 'lodash';

const connect = Redux.connect;
const Provider = Redux.Provider;

export default {
  description: 'React Redux HOC',
  fn({reactDomRoot, whyDidYouRender}) {
    whyDidYouRender(React);

    const initialState = {a: {b: 'c'}};

    const rootReducer = (state, action) => {
      if (action.type === 'randomObj') {
        return {a: {b: `${Math.random()}`}};
      }

      if (action.type === 'deepEqlObj') {
        return _.cloneDeep(state);
      }

      return state;
    };

    const store = createStore(rootReducer, initialState);

    const SimpleComponent = ({a, randomObj, deepEqlObj, sameObj}) => {
      return (
        <div>
          {`{a.b} is: ${a.b}`}
          <button onClick={sameObj}>Same State</button>
          <button onClick={deepEqlObj}>Deep Equal State</button>
          <button onClick={randomObj}>Random Object</button>
        </div>
      );
    };

    const ConnectedSimpleComponent = connect(
      state => ({a: state.a}),
      ({
        randomObj: () => ({type: 'randomObj'}),
        deepEqlObj: () => ({type: 'deepEqlObj'}),
        sameObj: () => ({type: 'sameObj'}),
      })
    )(SimpleComponent);

    SimpleComponent.whyDidYouRender = true;

    const Main = () => (
      <Provider store={store}>
        <ConnectedSimpleComponent/>
      </Provider>
    );

    reactDomRoot.render(<Main/>);
  },
};
