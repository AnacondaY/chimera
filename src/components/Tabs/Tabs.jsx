import React, { Children, cloneElement } from 'react';
import PropTypes from '../../base/prop-types';
import BaseComponent from '../../base/BaseComponent';
import Icon from '../Icon';
import support from '../../base/utils/supports';

const { transform } = support();

const CONTROL_SPAN = 24;
const noop = () => {};
export default class Tabs extends BaseComponent {

    static propTypes = {
        defaultActiveIndex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        mode: PropTypes.oneOf(['horizontal', 'vertical']),
        animated: PropTypes.bool,
        closable: PropTypes.bool,
        type: PropTypes.oneOf(['card', 'line']),
        onChange: PropTypes.func,
        onRemove: PropTypes.func,
        onTabClick: PropTypes.func,
        onNext: PropTypes.func,
        onPrev: PropTypes.func
    }

    static defaultProps = {
        defaultActiveIndex: 0,
        mode: 'horizontal',
        animated: true,
        closable: false,
        type: 'line',
        onChange: noop,
        onRemove: noop,
        onTabClick: noop,
        onNext: noop,
        onPrev: noop
    }

    constructor(props: Object){
        super(props);
        this.state = {
            activeIndex: props.defaultActiveIndex,
            canScroll: false,
            nextDisabled: false,
            prevDisabled: false,
            navOffset: 0,
            scrollerStyle: {},
            children: Children.toArray(props.children)
        };
        this.next = this.next.bind(this);
        this.prev = this.prev.bind(this);
    }

    get isCard(){
        return this.props.type === 'card';
    }

    get isVertical(){
        return this.props.mode === 'vertical';
    }

    handleTabClick(index: Number){
        let prevIndex;
        if(this.state.children[index].props.disabled) return;
        this.setState(prevState => {
            prevIndex = prevState.activeIndex;
            return {
                activeIndex: index,
                scrollerStyle: this.calcScrollerStyle(index)
            };
        }, () => {
            this.scrollToActiveTab();
            this.props.onTabClick(index);
            if(prevIndex !== index){
                this.props.onChange(index, prevIndex);
            }
        });
    }

    handleTabClose(evt: React.SyntheticEvent,index: Number){
        evt.stopPropagation();
        let removedTab;
        this.setState(({children}) => {
            const nextTab = this.tabs[index + 1];
            removedTab = children.splice(index, 1)[0];
            return {
                children,
                activeIndex: nextTab ? index : index - 1
            };
        }, () => {
            //防止index不变不触发更新的情况
            this.forceUpdate(() => {
                this.update();
                this.setState({
                    scrollerStyle: this.calcScrollerStyle(this.state.activeIndex)
                });
                this.props.onRemove(this.state.activeIndex, index);
            });
        });
    }   

    calcScrollerStyle(index: Number): Object{
        let offset = 0;
        if(!this.isVertical){
            if(index > 0){
                for(let i = 0; i < index; i++){
                    offset += this.tabs[i].offsetWidth;
                }
            }
            const scrollerWidth = this.tabs[index].offsetWidth;        
            return {
                width: scrollerWidth,
                [transform]: `translate(${offset}px, 0)`
            };
        }else{
            let height = 0;
            if(index > 0){
                for(let i = 0; i < index; i++){
                    offset += this.tabs[i].offsetHeight;
                }
            }
            const scrollerHeight = this.tabs[index].offsetHeight;        
            return {
                height: scrollerHeight,
                [transform]: `translate(0, ${offset}px)`
            };
        }
    }

    prev(){
        if(this.state.prevDisabled) return;
        const { offsetHeight, offsetWidth } = this.refs.trace;
        this.setState(({navOffset: curOffset}) => {
            if(!this.isVertical){
                return {
                    navOffset: Math.min(offsetWidth + curOffset, 0)
                };
            }else{
                return {
                    navOffset: Math.min(offsetHeight + curOffset, 0)
                };
            }
        }, () => {
            this.update();
            this.props.onPrev();
        });
    }

    next(){
        if(this.state.nextDisabled) return;
        const { offsetHeight, offsetWidth } = this.refs.trace;
        this.setState(({navOffset: curOffset}) => {
            if(!this.isVertical){
                return {
                    navOffset: curOffset - offsetWidth
                };
            }else{
                return {
                    navOffset: curOffset - offsetHeight
                };
            }
        }, () => {
            this.update();
            this.props.onNext();
        });
    }

    scrollToActiveTab(){
        const { activeIndex, navOffset } = this.state;
        const activeTab = this.tabs[activeIndex];
        const { 
            left: tabLeft, 
            right: tabRight, 
            top: tabTop, 
            bottom: tabBottom } = activeTab.getBoundingClientRect();
        const { 
            left: traceLeft, 
            right: traceRight, 
            top: traceTop, 
            bottom: traceBottom, 
            width: traceWidth, 
            height: traceHeight } = this.refs.trace.getBoundingClientRect();
        const { 
            left: navLeft, 
            right: navRight, 
            top: navTop, 
            bottom: navBottom, 
            width: navWidth, 
            height: navHeight } = this.refs.nav.getBoundingClientRect();
        let newNavOffset = navOffset;
        if(!this.isVertical){  
            if(tabLeft < traceLeft){
                newNavOffset = navOffset - (tabLeft - traceLeft);
            }
            if(tabRight > traceRight){
                newNavOffset = navOffset - (tabRight - traceRight);
            }
            // if(navRight < traceRight){
            //     newNavOffset = navWidth - traceWidth;
            // }
        }else{
            if(tabTop < traceTop){
                newNavOffset = navOffset - (tabTop - traceTop);
            }
            if(tabBottom > traceBottom){
                newNavOffset = navOffset - (tabBottom - traceBottom);
            }
            // if(navBottom < traceBottom){
            //     newNavOffset = navHeight - traceHeight;
            // }
        }
        this.setState({
            navOffset: newNavOffset
        });
    }

    update(){
        const { offsetWidth: navWidth, offsetHeight: navHeight } = this.refs.nav;
        const { offsetWidth: traceWidth, offsetHeight: traceHeight } = this.refs.trace;
        let state;
        const { navOffset, activeIndex } = this.state;
        if(!this.isVertical){
            if(traceWidth >= navWidth){
                state = {
                    canScroll: false
                };
            }else{
                state = {
                    canScroll: true,
                    prevDisabled: !navOffset,
                    nextDisabled: traceWidth - navOffset > navWidth 
                };
            }
        }else{
            if(traceHeight >= navHeight){
                state = {
                    canScroll: false
                };
            }else{
                state = {
                    canScroll: true,
                    prevDisabled: !navOffset,
                    nextDisabled: traceHeight - navOffset > navHeight
                };
            }
        }
        if(!this.isCard){
            state['scrollerStyle'] = this.calcScrollerStyle(activeIndex);
        }
        this.setState(state);
    }

    componentDidMount() {
        this.update();
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.length !== this.state.children.length){
            this.setState({
                children: Children.toArray(nextProps.children)
            }, this.update);
        }   
    }
    
    render(){
        const { activeIndex, scrollerStyle, canScroll, navOffset, prevDisabled, nextDisabled, children } = this.state;
        const { animated, type, closable } = this.props;
        this.tabs = [];
        let navStyle ;
        let wrapperStyle;
        let contentStyle;
        if(!this.isVertical){
            navStyle = {
                [transform]: `translate(${navOffset}px, 0)`
            };
            contentStyle = {
                [transform]: `translate(-${this.state.activeIndex * 100}%, 0)`
            };
            if(canScroll){
                wrapperStyle = {
                    padding: '0 24px'
                };
            }
        }else{
            navStyle = {
                [transform]: `translate(0, ${navOffset}px)`
            };
            contentStyle = {
                [transform]: `translate(0, -${this.state.activeIndex * 100}%)`
            };
            if(canScroll){
                wrapperStyle = {
                    padding: '24px 0'
                };
            }
        }
        return (
            <div className={this.classNames({
                'cmr-tabs': true,
                'cmr-tabs-card': this.isCard, 
                [!this.isVertical ? 'cmr-tabs-horizontal' : 'cmr-tabs-vertical']: true
            })} style={this.styles()}>
                <div className="cmr-tabs-nav-wrapper" ref="wrapper" style={wrapperStyle}>
                    { canScroll && 
                        <button className={this.classNames({
                            'cmr-tabs-control': true,
                            'cmr-tabs-control-prev': true,
                            'cmr-tabs-control-disabled': prevDisabled
                        })}
                            onClick={this.prev}
                        >
                            {!this.isVertical ? <Icon type="arrow-left"/>: <Icon type="arrow-up"/> }
                        </button>
                    }
                    { canScroll && 
                        <button className={this.classNames({
                            'cmr-tabs-control': true,
                            'cmr-tabs-control-next': true,
                            'cmr-tabs-control-disabled': nextDisabled
                        })}
                            onClick={this.next}
                        >
                            {!this.isVertical ? <Icon type="arrow-right"/> : <Icon type="arrow-down"/>}                    
                        </button>
                    }
                    <div className="cmr-tabs-nav-trace" ref="trace">
                        <div className="cmr-tabs-nav" ref="nav" style={navStyle}>
                            {Children.map(children, (c, i) => {
                                const { active, disabled, label } = c.props;
                                return (
                                    <div className={this.classNames({
                                        'cmr-tabs-nav-item': true,
                                        'cmr-tabs-nav-item-active': activeIndex === i,
                                        'cmr-tabs-nav-item-disabled': disabled,
                                        'cmr-tabs-nav-item-closable': closable
                                    })}
                                        key={`cmr-tabs-nav-item-${i}`}
                                        onClick={() => this.handleTabClick(i)}
                                        ref={tab => tab && this.tabs.push(tab)}
                                    >
                                        {label}
                                        {closable && 
                                            <span className="cmr-tabs-nav-close" onClick={evt => this.handleTabClose(evt, i)}>
                                                <Icon type="close"/>
                                            </span>
                                        }
                                    </div>
                                );
                            })} 
                            {!this.isCard && <div className="cmr-tabs-nav-scroller" style={scrollerStyle} />}                                                               
                        </div>
                    </div>
                </div>
                <div className={this.classNames({
                    'cmr-tabs-content': true
                })}>
                    {Children.map(children, (c, i) => {
                        return cloneElement(c, {
                            ...c.props,
                            active: i === activeIndex
                        });
                    })}
                </div>
            </div>
        );
    }

}