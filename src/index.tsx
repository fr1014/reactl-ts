import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import MyFirstButton from './learn/basicknowledge/button/MyFirstButton';
import JudgeView from './learn/basicknowledge/JudgeView';
import ListView from './learn/basicknowledge/ListView';
import ShareDataView from './learn/basicknowledge/ShareDataView';
import SearchCategoryView from './learn/basicknowledge/SearchCategoryView';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <MyFirstButton/>
    <JudgeView/>
    <ListView/>
    <ShareDataView/>
    <SearchCategoryView/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
