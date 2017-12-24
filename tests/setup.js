import React from 'react';
import { shallow, render, mount } from 'enzyme';
import { create } from 'react-test-renderer';

let target = !window ? global : window;
const api = {
    React,
    shallow, 
    render, 
    mount,
    create
};

for(const key in api){
    target[key] = api[key];
}
