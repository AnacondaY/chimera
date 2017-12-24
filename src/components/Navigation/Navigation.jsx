import React, { cloneElement, Children } from 'react';
import PropTypes from '../../base/prop-types';
import BaseComponent from '../../base/BaseComponent';

const noop = () => {};
export default class Navigation extends BaseComponent {

    static propTypes = {
        mode: PropTypes.oneOf(['horizontal', 'vertical']),
        only:PropTypes.bool,
        openedMarks: PropTypes.arrayOf(PropTypes.string),
        activeMark: PropTypes.string,
        trigger: PropTypes.oneOf(['click', 'hover']),
        onItemSelect: PropTypes.func,
        onMenuOpen: PropTypes.func,
        onMenuClose: PropTypes.func
    }

    static defaultProps = {
        mode: 'horizontal',
        only: true,
        trigger: 'hover',
        openedMarks: [],
        onItemSelect: noop,
        onMenuOpen: noop,
        onMenuClose: noop
    }

    constructor(props: Object) {
        super(props);
        let { openedMarks, activeMark } = props;
        if(!Array.isArray(openedMarks)){
            openedMarks = [];
        }
        this.state = {
            openedMarks: [].concat(openedMarks),
            activeMark
        };
        this.openMenu = this.openMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
        this.selectItem = this.selectItem.bind(this);
    }

    openMenu(mark: String){
        this.setState(({openedMarks}) => {
            if(this.props.only){
                return {
                    openedMarks: [mark]
                };
            }else{
                return {
                    openedMarks: [mark].concat(openedMarks)
                };
            }
        }, () => {
            this.props.onMenuOpen(this.state.activeMark, this.state.openedMarks);
        });
    }

    closeMenu(mark: String){
        this.setState(({openedMarks}) => {
            openedMarks.splice(openedMarks.indexOf(mark), 1);
            return {
                openedMarks: [].concat(openedMarks)
            };
        }, () => {
            this.props.onMenuClose(this.state.activeMark, this.state.openedMarks);
        });
    }

    selectItem(mark: String){
        this.setState({
            activeMark: mark
        }, () => {
            this.props.onItemSelect(this.state.activeMark, this.state.openedMarks);
        });
    }

    render(){
        const { openedMarks, activeMark } = this.state;
        const { mode, children, trigger } = this.props;
        return (
            <ul className={this.classNames({
                'cmr-navigation': true,
                [`cmr-navigation-${mode}`]: true
            })} style={this.styles()}>
                {Children.map(children, (child, index) => {
                    let defaultMark;
                    let mark;
                    const { type, props } = child;
                    if(type.__NAVIGATION_ITEM__){
                        defaultMark = `cmr-navigation-item-${index}`;
                        mark = props.mark ? props.mark : defaultMark;
                        const active = mark === activeMark;
                        return cloneElement(child, {
                            ...props,
                            activeMark,
                            onItemClick: this.selectItem
                        });
                    }else if(type.__NAVIGATION_SUBNAV__){
                        defaultMark = `cmr-navigation-subnav-${index}`;
                        mark = props.mark ? props.mark : defaultMark;
                        const opened = openedMarks.indexOf(mark) !== -1;
                        return cloneElement(child, {
                            ...props,
                            opened,
                            trigger,
                            activeMark,
                            isVertical: mode === 'vertical',
                            onItemClick: this.selectItem,
                            handleOpen: this.openMenu,
                            handleClose: this.closeMenu
                        });
                    }else{
                        return child;
                    }
                })}
            </ul>
        );
    }

}