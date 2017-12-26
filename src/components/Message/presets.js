import React, { createElement, isValidElement } from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import isObject from 'lodash/isObject';
import Message from './Message';

const DEFAULT = {
    offset: 24,
    gap: 16
};

let defaultProps = {
    ...DEFAULT
};

export default function message(opts: Object| String){
    if(!isObject(arguments[0]) || isValidElement(arguments[0])){
        opts = {
            message: arguments[0],
            duration: arguments[1]
        };
    }
    opts = {
        ...defaultProps,
        ...opts
    };
    const container = document.createElement('div');
    document.body.appendChild(container);

    const calcTopOffset = (): Number => {
        const msgs = document.querySelectorAll('.cmr-message');
        return msgs.length ? msgs.length * (msgs[0].offsetHeight + opts.gap) + opts.offset : opts.offset;
    };

    const showdown = () => {
        unmountComponentAtNode(container);
        document.body.removeChild(container);
        const msgs = document.querySelectorAll('.cmr-message');
        Array.prototype.forEach.call(msgs, (msg, i) => {
            msg.style.top = (msg.offsetHeight + opts.gap) * i + opts.offset;
        });
        typeof opts.onClose === 'function' && opts.onClose();
    };

    const msg = createElement(Message, {
        ...opts,
        top: calcTopOffset(),
        close: showdown        
    });

    render(msg, container);
}

['success', 'info', 'error', 'warning'].forEach(type => {
    message[type] = function(opts: Object| String){
        if(!isObject(arguments[0]) || isValidElement(arguments[0])){
            opts = {
                message: arguments[0],
                duration: arguments[1]
            };
        }        
        opts['type'] = type;
        message(opts);
    };
});

message.config = (opts: Object = {}) => {
    defaultProps = {
        ...defaultProps,
        ...opts
    };
};

message.reset = () => {
    defaultProps = {
        ...DEFAULT
    };
};