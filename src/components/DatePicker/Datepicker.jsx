import React from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from '../../base/prop-types';
import BaseComponent from '../../base/BaseComponent';
import { parseDate, formatDate } from './utils';
import Input from '../Input';
import Popover from '../_Popover';
import Animate from '../_Animate';
import DatePanel from './panel/DatePanel';
import DateRangePanel from './panel/DateRangePanel';
import { getOffset } from '../../base/utils/dom';
import { MODE_DATE, MODE_MONTH, MODE_YEAR, MODE_RANGE } from './constants';

const noop = () => {};

export default class DatePicker extends BaseComponent {

    static propTypes = {
        defaultValue: PropTypes.oneOfType([
            PropTypes.instanceOf(Date), 
            PropTypes.arrayOf(PropTypes.instanceOf(Date))
        ]),
        size: PropTypes.oneOf(['large', 'middle', 'small']),
        mode: PropTypes.oneOf([MODE_DATE, MODE_MONTH, MODE_YEAR, MODE_RANGE]),
        formatter: PropTypes.func,
        placeholder: PropTypes.string,
        range: PropTypes.bool,
        value: PropTypes.oneOfType([
            PropTypes.instanceOf(Date),
            PropTypes.arrayOf(PropTypes.instanceOf(Date))
        ]),
        disabled: PropTypes.bool,
        disableDate: PropTypes.func,
        onFocus: PropTypes.func,
        onBlur: PropTypes.func,
        onChange: PropTypes.func,
        onPick: PropTypes.func,
        onVisibleChange: PropTypes.func
    }

    static defaultProps = {
        mode: MODE_DATE,
        size: 'middle',
        range: false,
        onFocus: noop,
        onBlur: noop,
        onChange: noop,
        onPick: noop,
        onVisibleChange: noop
    }

    constructor(props: Object) {
        super(props);
        this.state = {
            visible: false,
            value: props.defaultValue
        };
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleRangePick = this.handleRangePick.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.beforeClose = this.beforeClose.bind(this);
    }

    format(d: Date | Date[], mode: String): String{
        if(typeof this.props.formatter === 'function'){
            return this.props.formatter(d, mode);
        }else{
            if(d instanceof Date){
                return formatDate(d, mode);
            }else{
                return d.map(_d => formatDate(_d, mode)).join(' - ');
            }
        }
    }

    handleClick(){
        if(this.props.disabled) return;
        this.setState({
            visible: true
        });
    }

    handlePick(date: Date, mode: String) {
        this.setState({
            value: date,
            visible: false
        }, () => this.props.onChange(date, mode));
    }

    handleRangePick(dates: Date[], done: Boolean){
        if(done){
            this.setState({
                value: dates,
                visible: false
            }, () => this.props.onChange(dates));
        }
    }

    handleOpen(portalNode: HTMLElement){
        const { offsetLeft, offsetTop, offsetHeight } = getOffset(this.input);
        portalNode.childNodes[0].style.left = offsetLeft;
        portalNode.childNodes[0].style.top = offsetTop + offsetHeight + 4;
    }

    handleClose(){
        this.setState({
            visible: false
        });
    }

    beforeClose(dom: HTMLElement, closePortal: Function){
        Animate.collapse(dom.childNodes[0], false, () => {
            closePortal();
            this.setState({
                visible: false
            });
        });
    }

    componentDidMount() {
        this.input = findDOMNode(this.refs.input);
    }
    

    render() {
        const { disabled, size, placeholder, mode, disableDate, range, onChange, onBlur, onFocus, cmrLocale } = this.props;
        const { visible, value } = this.state;
        const valueString = value ? this.format(value, mode) : '';
        return (
            <span>
                <Input 
                    ref="input" 
                    onClick={this.handleClick} 
                    iconAfter="calendar" 
                    className={this.classNames('cmr-datepicker')}
                    value={valueString} 
                    size={size} 
                    disabled={disabled} 
                    style={this.styles()} 
                    placeholder={placeholder} 
                />
                <Popover 
                    visible={visible} 
                    escToClose 
                    outsideClickToClose 
                    onOpen={this.handleOpen} 
                    beforeClose={this.beforeClose}
                    ref={pop => this.pop = pop}
                >
                    <Animate active={visible} effect="collapse">
                        {range ? 
                            <DateRangePanel locale={cmrLocale} onPick={this.handleRangePick} date={value}/> :
                            <DatePanel locale={cmrLocale} mode={mode} disableDate={disableDate} date={value} onPick={this.handlePick}/>
                        }
                    </Animate>
                </Popover>
            </span>
        );
    }

}