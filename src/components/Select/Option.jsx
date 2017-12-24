import React, { ReactElement } from 'react';
import PropTypes from '../../base/prop-types';
import BaseComponent from '../../base/BaseComponent';
import Icon from '../Icon';

export default class Option extends BaseComponent {

    static __SELECT_OPTION__ = true

    static propTypes = {
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        label: PropTypes.string.isRequired,
        disabled: PropTypes.bool,
        selected: PropTypes.bool,
        hovered: PropTypes.bool,
        multiple: PropTypes.bool,
        onSelect: PropTypes.func
    }

    static defaultProps = {
        disabled: false,
        selected: false,
        hovered: false,
        multiple: false
    }

    handleClick(): void{
        const { disabled, onSelect, value, label } = this.props;
        if(disabled) return;
        onSelect(value, label);
    }

    render(): ReactElement{
        const { label, disabled , hovered, multiple, selected, children } = this.props;
        return (
            <li className={this.classNames({
                'cmr-select-option': true,
                'cmr-select-option-disabled': disabled,
                'cmr-select-option-selected': selected,
                'cmr-select-option-hover': hovered === true
            })}
                onClick={evt => this.handleClick(evt)}
            >
                {children || label}
                {selected && multiple && 
                    <span className="cmr-select-option-icon"><Icon type="correct"/></span>
                }
            </li>
        );
    }
}