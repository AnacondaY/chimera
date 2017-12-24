import React from 'react';
import PropTypes from '../../base/prop-types';
import Select from '../Select';
import BaseComponent from '../../base/BaseComponent';

const Option = Select.Option;
export const Regulator = props => {
    const range = props.range;
    return (
        <Select>
            {range.map(val => <Option value={val} label={val}></Option>)}
        </Select>
    );
};

export const Jumper = props => {
    
};

export default class Controller extends BaseComponent{

    static propTypes = {
        pageSize: PropTypes.string,
        showRegulator: PropTypes.bool,
        showJumpter: PropTypes.bool,
        regularRange: PropTypes.arrayOf(PropTypes.string),
        onPageSizeChange: PropTypes.func
    }

    static defaultProps = {
        pageSize: '',
        showRegulator: false,
        showJumpter: false,
        regularRange: ['10', '20', '50']
    }

    constructor(props: Object){
        super(props);
    }

    render(){
        const { pageSize, showJumpter, showRegulator, regularRange, onPageSizeChange } = this.props;
        let regulator = null;
        let jumpter = null;
        if(showRegulator){
            regulator = (
                <Select defaultValue={pageSize} onSelect={onPageSizeChange}>
                    {regularRange.map((item, i) => (
                        <Option label={item} value={item} key={`cmr-pager-option-${i}`}></Option>)
                    )}
                </Select>
            );
        }
        return (
            <div className="cmr-pager-controller">
                {regulator}
            </div>
        );
    }
}