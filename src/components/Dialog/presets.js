import React, { createElement } from 'react';
import { render, unmountComponentAtNode, findDOMNode } from 'react-dom';
import Dialog from './Dialog';
import Button from '../Button';
import Icon from '../Icon';

export default function createModal({
    type,
    title,
    content,
    cancelText,
    confirmText,
    onConfirm,
    onCancel,
    ...rest
}){
    const container = document.createElement('div');
    document.body.appendChild(container);
    const closePortal = () => {
        if(container){
            //unmountComponentAtNode(container);
            document.body.removeChild(container);
        }
    };
    const map = {
        'error': 'error',
        'info': 'warning',
        'warning': 'warning',
        'success': 'success'
    };
    const contentNode = (
        <div className="cmr-dialog-confirm">
            <div className="cmr-dialog-description">
                <span className={`cmr-dialog-icon cmr-dialog-icon-${type}`}>
                    <Icon type={map[type]}/>
                </span>
                <span className="cmr-dialog-description-title">{title}</span>
                <p className="cmr-dialog-description-content">{content}</p>
            </div>
            <div className="cmr-dialog-buttons">
                <Button size="small" onClick={closePortal}>取消</Button>
                <Button size="small" type={type} onClick={() => onConfirm(closePortal)}>确定</Button>
            </div>
        </div>
    );

    const modal = createElement(Dialog, {
        visible: true,
        ...rest
    }, contentNode);
}
