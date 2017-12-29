import React, { Children } from 'react';
import PropTypes from '../../base/prop-types';
import BaseComponent from '../../base/BaseComponent';

const getClassList = (selfClass, className) => {
    const classList = [selfClass];
    if(className){
        classList.push(className);
    }
    return classList;
};

const Layout = ({children, className, style}) => {
    let hasSider = false;
    const classList = getClassList('cmr-layout', className);
    Children.forEach(children, child => {
        if(child.type.__LAYOUT_SIDER__){
            hasSider = true;
        }
    });
    if(hasSider){
        classList.push('cmr-layout-has-sider');
    }
    return (
        <div className={classList.join(' ')} style={style}>
            {children}
        </div>
    );
};

export const Header = ({children, className, style}) => {
    const classList = getClassList('cmr-layout-header', className);
    return <div className={classList.join(' ')} style={style}>{children}</div>;
};

export const Footer = ({children, className, style}) => {
    const classList = getClassList('cmr-layout-footer', className);
    return <div className={classList.join(' ')} style={style}>{children}</div>;
};

export const Content = ({children, className, style}) => {
    const classList = getClassList('cmr-layout-content', className);
    return <div className={classList.join(' ')} style={style}>{children}</div>;
};

export default Layout;

