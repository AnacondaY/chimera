import React, { cloneElement } from 'react';
import BaseComponent from '../../base/BaseComponent';
import PropTypes from '../../base/prop-types';
import Pager from './Pager';
import Icon from '../Icon';
import Regulator from './Regulator';
import Jumper from './Jumper';

const SPAN = 5;
const HALF_SAPN = Math.floor(SPAN / 2);
export default class Pagination extends BaseComponent {

    static propTypes = {
        totalRecords: PropTypes.number.isRequired,
        pageSize: PropTypes.number,
        currentPage: PropTypes.number,
        mini: PropTypes.bool,
        totalRender: PropTypes.func,
        layout: PropTypes.arrayOf(PropTypes.string),
        pageSpan: PropTypes.arrayOf(PropTypes.shape({
            label: PropTypes.string.isRequired,
            value: PropTypes.number.isRequired
        })),
        onChange: PropTypes.func,
        onPageSizeChange: PropTypes.func
    }

    static defaultProps = {
        layout: ['pages'],
        pageSize: 20,
        currentPage: 1,
        mini: false,
        totalRender: total => `共${total}页`,
        pageSpan: [{
            label: '10条/页',
            value: 10
        }, {
            label: '20条/页',
            value: 20
        }, {
            label: '50条/页',
            value:50
        }]
    }

    constructor(props: Object){
        super(props);
        const { currentPage, pageSize } = props;
        this.state = {
            currentPage,
            pageSize
        };
        this.goTo = this.goTo.bind(this);
        this.prevPage = this.prevPage.bind(this);
        this.nextPage = this.nextPage.bind(this);
        this.prevSpan = this.prevSpan.bind(this);
        this.nextSpan = this.nextSpan.bind(this);
        this.changeSize = this.changeSize.bind(this);
    }

    get pageCount(){
        return Math.ceil(this.props.totalRecords / this.state.pageSize);
    }

    getValidPage(page: Number){
        if(page < 1){
            page = 1;
        }else if(page > this.pageCount){
            page = this.pageCount;
        }
        return page;
    }

    goTo(page: Number){
        page = this.getValidPage(page);
        this.setState({
            currentPage: page
        }, () => {
            typeof this.props.onChange === 'function' && this.props.onChange(page);
        });
    }

    prevPage(){
        this.goTo(this.state.currentPage - 1);
    }

    nextPage(){
        this.goTo(this.state.currentPage + 1);
    }

    prevSpan(){
        this.goTo(this.state.currentPage - SPAN);
    }

    nextSpan(){
        this.goTo(this.state.currentPage + SPAN);
    }

    changeSize(size: Number){
        this.setState({
            pageSize: size 
        }, () => {
            typeof this.props.onPageSizeChange === 'function' && this.props.onPageSizeChange(size);
        });
    }

    componentWillReceiveProps(nextProps) {
        let { currentPage, totalRecords } = nextProps;
        currentPage = this.getValidPage(currentPage);
        this.setState({
            currentPage,
            totalRecords
        }); 
    }

    render(){
        const { currentPage, pageSize } = this.state;
        const { pageSpan, totalRender, layout, mini } = this.props;
        let pages = [];
        if(this.pageCount <= SPAN + 2 * HALF_SAPN){
            for(let i = 1; i <= this.pageCount; i++){
                pages.push(
                    <Pager 
                        page={i}
                        onItemClick={i => this.goTo(i)}
                        active={currentPage === i}
                    >{i}
                    </Pager>
                );
            }
        }else{
            let leftCursor = Math.max(1, currentPage - HALF_SAPN);
            let rightCursor = Math.min(this.pageCount, currentPage + HALF_SAPN);
            if(currentPage < HALF_SAPN){
                rightCursor = 2 * HALF_SAPN + 1;
            }
            if(currentPage > this.pageCount - HALF_SAPN){
                leftCursor = this.pageCount - HALF_SAPN * 2;
            }
            for(let i = leftCursor; i <= rightCursor; i++){
                pages.push(
                    <Pager
                        page={i}
                        active={currentPage === i}
                        onItemClick={i => this.goTo(i)}
                    >
                        {i}
                    </Pager>
                );
            }
            if(currentPage >= HALF_SAPN * 2 + 1 ){
                pages.unshift(
                    <Pager
                        onItemClick={this.prevSpan}
                    >
                        <Icon type="more"/>
                    </Pager>
                );
                pages.unshift(
                    <Pager
                        page={1}
                        active={currentPage === 1}
                        onItemClick={() => this.goTo(1)}
                    >1
                    </Pager>
                );
            }
            if(currentPage <= this.pageCount - HALF_SAPN * 2){
                pages.push(
                    <Pager
                        onItemClick={this.nextSpan}
                    >
                        <Icon type="more"/>
                    </Pager>
                );
                pages.push(
                    <Pager
                        page={this.pageCount}
                        active={currentPage === this.pageCount}
                        onItemClick={() => this.goTo(this.pageCount)}
                    >
                        {this.pageCount}
                    </Pager>
                );
            }
        }
        pages.unshift(
            <Pager
                onItemClick={this.prevPage}
                disabled={currentPage <= 1}                    
            >
                <Icon type="arrow-left" />
            </Pager>
        );
        pages.push(
            <Pager
                onItemClick={this.nextPage}
                disabled={currentPage >= this.pageCount}
            >
                <Icon type="arrow-right"/>
            </Pager>
        );
        pages = (
            <ol className="cmr-pagination-list cmr-pagination-item">
                {pages.map((page, i) => {
                    return cloneElement(page, {
                        key: `cmr-pagination-pager-${i}`
                    });
                })}
            </ol>
        );
        const layoutMap = {
            pages,
            regulator: <Regulator pageSpan={pageSpan} onChange={this.changeSize} />,
            jumper: <Jumper page={currentPage} onEnter={this.goTo} range={[1, this.pageCount]} />,
            total: <div className="cmr-pagination-total cmr-pagination-item">{totalRender(this.pageCount)}</div>
        };       
        return (
            <div className={this.classNames({
                'cmr-pagination': true,
                'cmr-pagination-mini': mini
            })}>
                {layout.map(componentName => {
                    const component = layoutMap[componentName];
                    if(component){
                        return cloneElement(component, {
                            ...component.props,
                            key: `cmr-pagination-${componentName}`
                        });
                    }
                })}
            </div>
        );
    }

}