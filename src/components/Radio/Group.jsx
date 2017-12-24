import React, { Children, cloneElement } from 'react';
import BaseComponent from '../../base/BaseComponent';
import { groupDefaultProps, groupProps } from './define';

export default class Group extends BaseComponent{

    static propTypes = groupProps

    static defaultProps = groupDefaultProps

    constructor(props: Object){
        super(props);
        this.state = {
            model: typeof props.value !== 'undefined' ? props.value : props.defaultValue
        };
    }

    get buttonCount(){
        return Children.count(this.props.children);
    }

    getClass(index: Number, length: Number): String{
        const baseClass = 'cmr-radio-button';
        let cls = '';
        if(length > 1){
            if(index === 0){
                cls = `${baseClass}-first`;
            }else if(index === length - 1){
                cls = `${baseClass}-last`;
            }else{
                cls = `${baseClass}-continuous`;
            }
        }
        return this.classNames(baseClass, cls);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            model: nextProps.value
        });
    }

    render(){
        const { children, disabled, onChange } = this.props;
        const model = this.state.model;
        return (
            <div className={this.classNames({
                'cmr-radio-group': true
            })}>
                { Children.map(children, (child, i) => {
                    if(child.type.__RADIO__){
                        return cloneElement(child, {
                            ...child.props,
                            model,
                            disabled,
                            onChange
                        });
                    }else if(child.type.__RADIO_BUTTON__){
                        return cloneElement(child, {
                            ...child.props,
                            model,
                            disabled,
                            onChange,
                            className: this.getClass(i, this.buttonCount)
                        });
                    }else{
                        return null;
                    }
                    
                }) }
            </div>
        );
    }

}