import React from 'react';
import PropTypes from '../../base/prop-types';
import BaseComponent from '../../base/BaseComponent';
import Select from '../Select';

export default class Regulator extends BaseComponent {
    
    static propTypes = {
        pageSpan: PropTypes.arrayOf(PropTypes.shape({
            label: PropTypes.string.isRequired,
            value: PropTypes.number.isRequired
        })).isRequired,
        onChange: PropTypes.func
    }

    static defaultProps = {
        onChange(){}
    }

    render(){
        const { pageSpan, onChange } = this.props;
        return (
            <Select 
                size="small" 
                defaultValue={pageSpan[0]['value']} 
                className="cmr-pagination-regulator cmr-pagination-item"
                onChange={onChange}
            >    
                {pageSpan.map((span, index) => {
                    return (
                        <Select.Option key={`cmr-pagination-span-${index}`} value={span.value} label={span.label} />
                    );
                })}
            </Select>
        );
    }
}