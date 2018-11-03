import React, { PureComponent, Fragment } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import store from './store';
import Home from './pages/home';
import ProjectList from './pages/projectList';
import ProjectDetail from './pages/projectDetail';

class App extends PureComponent {
  render() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Fragment>
                    <Route path="/" exact component={Home}></Route>
                    <Route path="/list" exact component={ProjectList}></Route>
                    <Route path="/detail" exact component={ProjectDetail}></Route>
                </Fragment>
            </BrowserRouter>
        </Provider>
    );
  }
}

export default App;
