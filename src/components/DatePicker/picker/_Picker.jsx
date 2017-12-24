import React from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from '../../../base/prop-types';
import BaseComponent from '../../../base/BaseComponent';
import { parseDate, formatDate } from '../utils';
import Popover from '../../_Popover';
import Input from '../../Input';
import DatePanel from '../panel/DatePanel';

const noop = () => {};

export default class _Picker extends BaseComponent {

    static propTypes = {
        size: PropTypes.oneOf(['large', 'middle', 'small']),
        formatter: PropTypes.func,
        placeholder: PropTypes.string,
        date: PropTypes.oneOfType([
            PropTypes.instanceOf(Date),
            PropTypes.arrayOf(PropTypes.instanceOf(Date))
        ]),
        disabled: PropTypes.bool,
        onFocus: PropTypes.func,
        onBlur: PropTypes.func,
        onChange: PropTypes.func,
        onPick: PropTypes.func,
        onVisibleChange: PropTypes.func
    }

    static defaultProps = {
        value: new Date(),
        onFocus: noop,
        onBlur: noop,
        onChange: noop,
        onPick: noop,
        onVisibleChange: noop
    }

    constructor(props: Object) {
        super(props);
        this.state = {
            date: props.date,
            visible: false
        };
        this.hidePanel = this.hidePanel.bind(this);
        this.showPanel = this.showPanel.bind(this);
    }

    showPanel(){
        if(this.state.visible) return;
        this.setState({
            visible: true
        }, () => this.props.onVisibleChange(this.state.visible));
    }

    hidePanel() {
        if(!this.state.visible) return;
        this.setState({
            visible: false
        }, () => this.props.onVisibleChange(this.state.visible));
    }


    handlePick(date: Date | Date[], isFinished: Boolean = false) {
        const onChange = this.props.onChange;
        this.setState({
            date
        }, () => onChange());
    }

    handleChange(evt: React.SyntheticEvent){

    }

    componentDidUpdate() {
        const { input, pop } = this.refs;
        const inputDOM: HTMLElement = findDOMNode(input);
        const popDOM = findDOMNode(pop);
        const { left, bottom } = inputDOM.getBoundingClientRect();
        if(this.node){
            this.node.style.position = 'absolute';
            this.node.style.left = left;
            this.node.style.top = bottom + 4;
        }
    }

    render() {
        const { disabled, placeholder, onChange, onBlur, onFocus } = this.props;
        const text = this.state.text;
        console.log(this.state.visible);
        return (
            <span>
                <Input onFocus={this.showPanel} ref="input" />
                
            </span>
        );
    }

}