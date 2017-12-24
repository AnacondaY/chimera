import React, { Children, cloneElement } from 'react';
import BaseComponent from '../../base/BaseComponent';
import PropTypes from '../../base/prop-types';

export default class Group extends BaseComponent {

    constructor(props: Object){
        super(props);
        this.state = {
            values: Array.isArray(props.value) ? props.value : props.defaultValue
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            values: nextProps.value || []
        });
    }
    
    handleChange(value: String| Number, checked: Boolean): void{
        this.setState(({values}) => {
            if(checked){
                values = [value].concat(values);
            }else{
                values = values.filter(val => val !== value);
            }
            return {
                values
            };
        }, () => this.props.onChange(this.state.values));
    }

    render(){
        const children = this.props.children;
        const values = this.state.values;
        return (
            <div className="cmr-checkbox-group">
                {Children.map(children, (child, i) => {
                    return cloneElement(child, {
                        ...child.props, 
                        key: `cmr-checkbox-${i}`,
                        checked: child.props.checked || values.indexOf(child.props.value) !== - 1,
                        onChange: checked => this.handleChange(child.props.value, checked)
                    });
                })}
            </div>
        );
    }

}

Group.propTypes = {
    defaultValue: PropTypes.array,
    value: PropTypes.array,
    onChange: PropTypes.func
};

Group.defaultProps = {
    defaultValue: [],
    onChange(){}
};