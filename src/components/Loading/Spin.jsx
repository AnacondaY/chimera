import React from 'react';
import './style/spin.scss';

export default function Spin(props: Object) {

    return (
        <div className="cmr-loading-spin">
            <div className="cmr-loading-spin-dot"/>
            <div className="cmr-loading-spin-dot"/>
            <div className="cmr-loading-spin-dot"/>
        </div>
    );

}