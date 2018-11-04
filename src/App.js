import React, { PureComponent, Fragment } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import store from './store';
import Home from './pages/home';
import ProjectList from './pages/projectList';
import ProjectDetail from './pages/projectDetail';
import Consult from './pages/consult';
import Apply from './pages/apply';
import ActivityList from './pages/activityList';
import ActivityItem from './pages/activityDetail';
import Personal from './pages/personal';

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
                        <Route path="/pro_list" exact component={ProjectList}></Route>
                        <Route path="/detail/:pid" exact component={ProjectDetail}></Route>
                        <Route path="/detail/:pid/consult" exact component={Consult}></Route>
                        <Route path="/detail/:pid/apply" exact component={Apply}></Route>
                        <Route path="/activity_list" exact component={ActivityList}></Route>
                        <Route path="/personal" exact component={Personal}></Route>
                        <Route path="/activity/:aid" exact component={ActivityItem}></Route>
                    </Fragment>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
