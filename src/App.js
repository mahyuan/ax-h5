import React, { PureComponent, Fragment } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import store from './store';
import Home from './pages/home';
import ProjectList from './pages/projectList';
import ProjectDetail from './pages/projectDetail';
import Consult from './pages/consult';
import Apply from './pages/apply';

class App extends PureComponent {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Fragment>
                        <Route path="/" exact component={Home}></Route>
                        <Route path="/list" exact component={ProjectList}></Route>
                        <Route path="/detail/:pid" exact component={ProjectDetail}></Route>
                        <Route path="/detail/:pid/consult" exact component={Consult}></Route>
                        <Route path='/detail/:pid/apply' exact component={Apply}></Route>
                    </Fragment>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
