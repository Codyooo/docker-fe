/**
* @file: description
* @author: hufan
* @Date: 2020-02-07 17:11:13
* @LastEditors: hufan
* @LastEditTime: 2020-02-07 18:14:54
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});


it('test true',()=>{
  expect(1+1).toEqual(2);
})