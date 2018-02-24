// let's go!
import React from 'react';
import css from './styles/style.styl';
import { render } from 'react-dom';
import  Main from './components/Main';
import PhotoGrid from './components/PhotoGrid';
import Photo from './components/Photo';
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './store';

let store = configureStore();
const router = (
    <Provider store={store}>
    <Router>
        <Route path="/" component={Main}>
        <IndexRoute component={PhotoGrid}/>
        <Route path='/view/:postId' component={Photo}/>
        </Route>
    </Router>
    </Provider>
)

render(router, document.getElementById('root'));