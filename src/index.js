import React from 'react';
import ReactDOM from 'react-dom';
import EditTheme from './Theme/theme';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createStore } from 'redux';
import allReducer from './reducer';
import { Provider } from 'react-redux';
import { Login, DownloadUser, ProfileUser } from './LRPD';
import EditHomepage from './edit_homepage/App';
import Homepage from './Homepage';
import { Product } from './Product/Product';
import Test from './Animation/index.js'
import Generation from './Generate/Generate';

const store = createStore(
    allReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route path="/" exact component={Homepage} />
                <Route path="/edittheme" component={EditTheme} />
                <Route path="/product" component={Product} />
                <Route path="/profileUser" component={ProfileUser} />
                <Route path="/login" component={Login} />
                <Route path="/downloadUser" component={DownloadUser} />
                <Route path="/edithomepage" component={EditHomepage} />
            </Switch>
        </Router>
    </Provider>, document.getElementById('root'));