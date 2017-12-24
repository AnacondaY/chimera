import React from 'react';
import PropTypes from '../../../base/prop-types';
import { contextTypes } from '../define';

export default function ColGroup({ fixed, isHeader }, { display, hub }){
    const { leftFixedFlatColumns, rightFixedFlatColumns, flatColumns, fitWidth } = display;
    const scrollerWidth = hub.state.scrollerWidth;
    let columns = flatColumns;
    // if(fixed === 'left' || fixed === true){
    //     columns = leftFixedFlatColumns;
    // }else if(fixed === 'right'){
    //     columns = rightFixedFlatColumns;
    // }else{
    //     columns = flatColumns;
    // }
    return (
        <colgroup>
            {columns.map((col, i) => {
                return <col key={`cmr-col-${i}`} style={{ width: col.width,  minWidth: col.width }} />;
            })}
        </colgroup>
    );
}

ColGroup.contextTypes = contextTypes;
