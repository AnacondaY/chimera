import React, { Children, cloneElement, ReactElement, ReactNode, SyntheticEvent } from 'react';
import { debounce } from 'lodash';
import PropTypes from '../../base/prop-types';
import BaseComponent from '../../base/BaseComponent';
import { UP, DOWN, ENTER } from '../../base/utils/keyCode';
import Icon from '../Icon';
import Input from '../Input';
import Animate from '../_Animate';

const noop = () => { };

export default class Select extends BaseComponent {

    static propTypes = {
        defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.array]),
        multiple: PropTypes.bool,
        disabled: PropTypes.bool,
        remote: PropTypes.bool,
        remoteText: PropTypes.string,
        fetching: PropTypes.bool,
        filterable: PropTypes.bool,
        size: PropTypes.oneOf(['large', 'middle', 'small']),
        placeholder: PropTypes.string,
        optionLabelProp: PropTypes.string,
        menuStyle: PropTypes.object,
        changeDelay: PropTypes.number,
        onChange: PropTypes.func,
        onFocus: PropTypes.func,
        onBlur: PropTypes.func,
        onSelect: PropTypes.func,
        onSearch: PropTypes.func
    }

    static defaultProps = {
        multiple: false,
        disabled: false,
        filterable: false,
        fetching: false,
        remote:false,
        changeDelay: 300,
        size: 'middle',
        optionLabelProp: 'children',
        onSelect: noop,
        onChange: noop,
        onSearch: noop,
        onFocus: noop,
        onBlur: noop
    }

    constructor(props: Object) {
        super(props);
        let { defaultValue, multiple, value, children } = props;
        if(!multiple){
            value = typeof value !== 'undefined' ? value : (typeof defaultValue !== 'undefined' ? defaultValue : null);
        }else{
            value = Array.isArray(value) ? value : (Array.isArray(defaultValue) ? defaultValue : []);
        }
        this.state = {
            value,
            searchContent:this.getLabelBySingleValue(children, value),
            opened: false,
            hoverIndex: -1,
            options: [],
            selectedOptions: this.getSelectedOptions(value, children)
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleOutsideClick = this.handleOutsideClick.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
    }

    get isMultiple(){
        return !!this.props.multiple;
    }

    get isEmpty(){
        const value = this.state.value;
        if(this.isMultiple){
            return value.length === 0;
        }else{
            return typeof value === 'undefined';
        }
    }    

    componentDidMount() {
        this.main = !this.isMultiple ? this.refs.root : this.refs.menu;  
        if(this.input){
            this.input.addEventListener('keyup', debounce(evt => {
                const value = evt.target.value;
                this.props.onSearch(value);
            }, 300));
        }
        document.body.addEventListener('click', this.handleOutsideClick);
    }

    componentWillUnmount() {
        document.body.removeEventListener('click', this.handleOutsideClick);
    }

    componentWillReceiveProps(nextProps) {
        if(this.state.value === nextProps.value) return;
        this.setState({
            value: nextProps.value,
            searchContent: this.getLabelBySingleValue(nextProps.value, nextProps.children),
            selectedOptions: this.getSelectedOptions(nextProps.value, nextProps.children)
        });   
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.opened){
            this.refs.menu.focus();
        }   
    }

    handleOutsideClick(evt: Event){
        if(!this.state.opened) return;
        if(evt.button === 0 && !this.main.contains(evt.target)){
            this.setState({
                opened: false
            });
        }
    }

    getSelectedOptions(value: mixed, children: Array): Array{
        if(!Array.isArray(value)){
            return [];
        }
        return value.map(val => ({
            value: val,
            label: this.getLabelBySingleValue(children, val)
        }));
    }
    
    sliceChildrenToOptions(props: Object){
        const children = props.children;
        let _children = [];
        Children.forEach(children, c => {
            if(c.type.__SELECT_OPTION__){
                _children.push(c);
            }else if(c.type.__SELECT_OPTGROUP__){
                _children = _children.concat(c.props.children);
            }
        });
        this.setState({
            options: _children
        });
    }

    getLabelBySingleValue(children: ReactNode, value: String): ReactNode{
        let label = '';
        Children.forEach(children, child => {
            if(child.type.__SELECT_OPTION__){
                if(child.props.value === value){
                    return label = child.props['label'];
                }
            }else if(child.type.__SELECT_OPTGROUP__){
                this.getLabelBySingleValue(child.children, value);
            }
        });
        return label;
    }

    handleValueClose(evt: React.SyntheticEvent, selValue: String): void {
        evt.stopPropagation();
        const { value, selectedOptions } = this.removeSelectedOption(selValue);
        this.setState({ 
            value,
            selectedOptions
        });
    }

    handleChange(selValue: String|Number, label: String): void {
        this.setState(({ value, searchContent, selectedOptions }) => {
            if (this.isMultiple) {
                if(value === null || value === undefined){
                    value = [];
                }
                const index = value.indexOf(selValue);
                searchContent = '';
                //selected value is not in current values
                if (index === -1) {
                    value = value.concat([selValue]);
                    selectedOptions = selectedOptions.concat([{
                        value: selValue,
                        label: this.getLabelBySingleValue(this.props.children, selValue)
                    }]);
                }else{
                    const result = this.removeSelectedOption(selValue);
                    selectedOptions = result.selectedOptions;
                    value = result.value;
                }
            }else{
                searchContent = label;
                value = selValue;
            }
            //如果多选, 选择后不关闭菜单
            return {
                value,
                searchContent,
                selectedOptions,
                opened: this.isMultiple
            };
        }, () => {
            this.props.onChange(this.state.value);
        });
    }

    handleClick(){
        if(this.props.disabled) return;
        this.setState(prevState => {
            let opened;
            if(this.isMultiple){
                opened = true;
            }else{
                opened = !prevState.opened;
            }
            return {
                opened
            };
        });
    }

    handleSearch(evt: React.SyntheticEvent){
        const value = evt.target.value;
        debounce(() => {
            this.props.onSearch(value);
        }, 5000)();
    }

    handleInput(evt: React.SyntheticEvent){
        const value = evt.target.value;
        this.setState({
            searchContent: value
        });
    }

    handleKeyUp(evt: SyntheticEvent, limit: Number){
        const keyCode = evt.which;
        let { options, hoverIndex } = this.state;
        switch(keyCode){
        case UP:
            hoverIndex --;
            this.moveHover(hoverIndex, limit);
            break;
        case DOWN:
            hoverIndex ++;
            this.moveHover(hoverIndex, limit);
            break;
        case ENTER:
            this.handleChange(options[hoverIndex].props.value);
            break;
        }
    }

    moveHover(index: Number, limit: Number){
        if(index < 0){
            index = limit;
        }else if(index > limit){
            index = 0;
        }
        this.setState({
            hoverIndex: index
        });
    }

    removeSelectedOption(targetValue: String): Object{
        const { value, selectedOptions } = this.state;
        return {
            value: value.filter(v => v !== targetValue),
            selectedOptions: selectedOptions.filter(op => op.value !== targetValue)
        };
    }

    render(): ReactElement {
        const { size, children, multiple, optionLabelProp, menuStyle, disabled, filterable, placeholder, fetching, remote, onChange, onFocus, onBlur } = this.props;
        const { value, opened, hoverIndex, options, searchContent, selectedOptions } = this.state;
        let values;
        this.tags = [];
        if(this.isMultiple && Array.isArray(value)){
            values = selectedOptions.map((op, i) => (
                <span className="cmr-select-value" key={`cmr-select-value-${i}`} ref={tag => this.tags.push(tag)}>
                    <span className="cmr-select-value-inner">
                        {op.label}
                        <span onClick={evt => this.handleValueClose(evt, op.value)} className="cmr-select-value-close">
                            <Icon type="close"/>
                        </span>
                    </span>
                </span>
            ));
        }
        return (
            <div className={this.classNames({
                'cmr-select': true,
                'cmr-select-open': opened,
                'cmr-select-multiple': multiple,
                'cmr-select-disabled': disabled,
                'cmr-select-filterable': filterable,
                [`cmr-select-${size}`]: true
            })} ref="root">
                <div className="cmr-select-box" 
                    tabIndex="-1" 
                    onClick={this.handleClick} 
                    onFocus={onFocus} 
                    onBlur={onBlur}
                >
                    <div className="cmr-select-wrapper">
                        { multiple && values }
                        { multiple &&  
                            <input 
                                type="text" 
                                className="cmr-select-input-tag"
                                onChange={this.handleInput}
                                value={searchContent}
                                readOnly={!filterable}
                                ref={input => this.input = input}
                                placeholder={selectedOptions.length === 0 ? placeholder : ''}
                            />
                        }
                    </div>
                    {!multiple &&
                        <input 
                            type="text" 
                            className="cmr-select-input"
                            onChange={this.handleInput} 
                            placeholder={placeholder}
                            value={searchContent}
                            readOnly={!filterable}
                            ref={input => this.input = input}
                        />
                    } 
                    <span className="cmr-select-arrow">
                        <Icon type="caret-down"/>
                    </span>                   
                </div>
                <div className="cmr-select-menu-wrapper">
                    <Animate active={opened} effect="collapse">
                        <ul 
                            className="cmr-select-menu" 
                            role="menu" 
                            ref="menu" 
                            style={menuStyle}
                        >
                            {Children.map(children, (child, index) => {
                                if (child.type.__SELECT_OPTION__) {
                                    const props = child.props;
                                    const selected = multiple ? (value || []).indexOf(props.value) !== -1 : value === props.value;
                                    return cloneElement(child, {
                                        ...props,
                                        key: `cmr-select-option-${index}`,
                                        selected,
                                        hovered: index === hoverIndex,
                                        onSelect: this.handleChange,
                                        multiple
                                    });
                                }else if(child.type.__SELECT_OPTGROUP__){
                                    const props = child.props;
                                    return cloneElement(child, {
                                        ...props,
                                        value,
                                        multiple,
                                        index,
                                        hoverIndex,
                                        key: `cmr-select-optgroup-${index}`,
                                        onSelect: this.handleChange
                                    });
                                }
                            })}
                            { remote && fetching && <li className="cmr-select-option"><Icon type="loading"/>搜索中...</li> }
                            { remote && !fetching && !children.length && <li className="cmr-select-option">无匹配数据</li> }
                        </ul>
                    </Animate>
                </div>
            </div>
        );
    }

}
