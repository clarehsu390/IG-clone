// let's go!
import React from 'react';
import css from './styles/style.styl';
import { render } from 'react-dom';
import  Main from './components/Main';
import PhotoGrid from './components/PhotoGrid';
import Photo from './components/Photo';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

const router = (
    <Router history={browserHistory}>
        <Route path="/" component={Main}>
        <IndexRoute component={PhotoGrid}/>
        <Route path='/view/:postId' component={Photo}/>
        </Route>
    </Router>
)
render(router, document.getElementById('root'));