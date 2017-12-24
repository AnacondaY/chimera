import React, { Children } from 'react';
import PropTypes from '../../base/prop-types';
import BaseComponent from '../../base/BaseComponent';

function Fundation({baseClassName, className, style = {}, children}){
    return (
        <div 
            className={[baseClassName, className].join(' ')}
            style={style}
        >
            {children}
        </div>
    );
}

const Layout = ({children, className}) => {
    let hasSider = false;
    const classList = ['cmr-layout', className];
    Children.forEach(children, child => {
        if(child.type.__LAYOUT_SIDER__){
            hasSider = true;
        }
    });
    if(hasSider){
        classList.push('cmr-layout-has-sider');
    }
    return (
        <div className={classList.join(' ')}>
            {children}
        </div>
    );
};

export const Header = ({children}) => {
    return <div className="cmr-layout-header">{children}</div>;
};

export const Footer = ({children}) => {
    return <div className="cmr-layout-footer">{children}</div>;
};

export const Content = ({children}) => {
    return <div className="cmr-layout-content">{children}</div>;
};

export default Layout;

