import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import store from './store/store'
import './index.css';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Suspense fallback={<div >Загрузка...</div>}>
        <BrowserRouter>
          <Route path="/" exact component={React.lazy(() => import('./components/Home'))} />
          <Route path="/:id" exact component={React.lazy(() => import('./components/News'))} />
        </BrowserRouter>
      </Suspense>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
