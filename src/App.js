import React, { PureComponent, Fragment } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import store from './store';
import Home from './pages/home';

class App extends PureComponent {
  render() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Fragment>
                    <Route path="/" exact component={Home}></Route>
                </Fragment>
        </BrowserRouter>
        </Provider>
    );
  }
}

export default App;
