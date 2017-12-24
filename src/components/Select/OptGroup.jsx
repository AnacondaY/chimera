import React,{ Children, cloneElement, ReactElement } from 'react';
import PropTypes from 'prop-types';
import BaseComponent from '../../base/BaseComponent';

export default class Group extends BaseComponent{
    
    static __SELECT_OPTGROUP__ = true;

    static propTypes = {
        label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
        disabled: PropTypes.bool,
        multiple: PropTypes.bool
    }

    static defaultProps = {
        disabled: false,
        multiple: false
    }

    render(): ReactElement {
        const { label, disabled, multiple, value, index, onSelect, hoverIndex, children } = this.props;
        return (
            <li className="cmr-select-group">
                <div className="cmr-select-group-label">{label}</div>
                <ul className="cmr-select-menu">
                    {Children.map(children, (child, i) => {
                        const props = child.props;
                        const selected = multiple ? (value || []).indexOf(props.value) !== -1 : value === props.value;
                        return cloneElement(child, {
                            ...props,
                            disabled,
                            multiple,
                            selected,
                            hovered: (i + index) === hoverIndex,
                            onSelect,
                            key: `cmr-select-option-${i}`
                        });
                    })}
                </ul>
            </li>
        );
    }

}