import React, { isValidElement, createElement } from 'react';
import { unmountComponentAtNode, render } from 'react-dom';
import isObject from 'lodash/isObject';
import Notice from './Notification';

const DEFAULT = {
    offset: 0,
    gap: 16
};

let defaultProps = {
    ...DEFAULT
};

export default function notification(opts: Object = {}){

    if(!isObject(arguments[0]) || isValidElement(arguments[0])){
        opts = {
            title: arguments[0],
            content: arguments[1],
            duration: arguments[2]
        };
    }
    opts = {
        ...defaultProps,
        ...opts
    };

    const container = document.createElement('div');
    container.className = 'cmr-notification';
    document.body.appendChild(container);
    const notices = document.querySelectorAll('.cmr-notice');
    //初始化计算top
    opts.top = notices.length ? notices.length * (notices[0].offsetHeight + opts.gap) + opts.offset : opts.offset; 

    const unmount = () => {
        unmountComponentAtNode(container);
        document.body.removeChild(container);
        const notices = document.querySelectorAll('.cmr-notice');
        //节点删除后重新计算位置
        Array.prototype.forEach.call(notices, (n, i) => {
            n.style.top = `${(n.offsetHeight + opts.gap) * i + opts.offset}px`;
        });
        if(typeof opts.onClose === 'function'){
            opts.onClose();
        }
    };

    const notice = createElement(Notice, Object.assign({}, {
        onUnmount: unmount,
        ...opts
    }));

    render(notice, container);
    return unmount;
}

['success', 'error', 'info', 'warning'].forEach(type => {
    notification[type] = function(opts: Object | String = {}){
        if(!isObject(arguments[0]) || isValidElement(arguments[0])){
            opts = {
                title: arguments[0],
                content: arguments[1],
                duration: arguments[2]            
            };
        }
        opts.type = type;
        return notification(opts);
    };
});

notification.config = (opts: Object = {}) => {
    defaultProps = {
        ...defaultProps,
        ...opts
    };
};

notification.reset = () => {
    defaultProps = {
        ...DEFAULT
    };
};