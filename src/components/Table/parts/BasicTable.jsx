import React from 'react';
import { findDOMNode } from 'react-dom';
import BaseComponent from '../../../base/BaseComponent';
import { contextTypes } from '../define';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

export default class BasicTable extends BaseComponent {

    static contextTypes = contextTypes

    componentDidMount() {
        this.headerNode = findDOMNode(this.refs.header);
        this.bodyNode = findDOMNode(this.refs.body);
        if(this.props.fixedColumns){
            const width = this.props.fixedColumns.reduce((preWidth, cur) => preWidth + cur.width, 0);
            this.width = width;
            this.forceUpdate();
        }
    }

    componentDidUpdate(prevProps, prevState) {
        const bodyWidth = this.context.display.bodyWidth;
        if(this.bodyNode && this.headerNode){
            this.headerNode.style.width = bodyWidth;
            this.bodyNode.style.width = bodyWidth;
            const { offsetWidth, scrollWidth } = this.bodyNode;
            if(offsetWidth > scrollWidth && !prevProps.fixed){
                this.headerNode.style.overflowY = 'scroll';
            }
            const maxHeight = parseInt(this.props.maxHeight, 10);
            const headerHeight = this.headerNode.offsetHeight;
            if(maxHeight > headerHeight){
                this.bodyNode.style.maxHeight = maxHeight - headerHeight;
            }
        }
    }

    render(){     
        let { fixed, onMainScroll, ...rest } = this.props;
        if(fixed === true){
            fixed = 'left';
        }
        return (
            <div className={this.classNames({
                'cmr-table-basic': true,
                'cmr-table-fixed': fixed,
                'cmr-table-fixed-left': fixed === 'left',
                'cmr-table-fixed-right': fixed === 'right'
            })} style={{
                width: this.width
            }}>
                <TableHeader ref="header" fixed={fixed} {...rest} />
                <TableBody ref="body" fixed={fixed} onMainScroll={onMainScroll} {...rest}/>
            </div>
        );
    }
}