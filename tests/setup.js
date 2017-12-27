import React from 'react';
import { findDOMNode } from 'react-dom';
import { shallow, render, mount } from 'enzyme';

let target = !window ? global : window;
const api = {
    React,
    shallow, 
    render, 
    mount,
    findDOMNode
};

for(const key in api){
    target[key] = api[key];
}
