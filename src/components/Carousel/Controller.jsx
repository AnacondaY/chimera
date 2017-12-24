import React from 'react';
import ProptTypes from '../../base/prop-types';
import BaseComponent from '../../base/BaseComponent';
import Icon from '../Icon';

export default class Controller extends BaseComponent{

    static propTypes = {
        onLeftClick: ProptTypes.func,
        onRightClick: ProptTypes.func
    }

    static defaultProps = {
        onLeftClick(){},
        onRightClick(){}
    }

    constructor(props: Object){
        super(props);
        this.state = {
            show: false
        };
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
    }

    handleMouseEnter(){
        this.setState({
            show: true
        });
    }

    handleMouseLeave(){
        this.setState({
            show: false
        });
    }

    render(){
        const { onLeftClick, onRightClick } = this.props;
        return (
            <div className={this.classNames({
                'cmr-carousel-controller': true,
                'cmr-carousel-controller-show': this.state.show
            })} onMouseOver = {this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
                <button className="cmr-carousel-controller-left" onClick={onLeftClick}>
                    <Icon type="arrow-left"/>
                </button>
                <button className="cmr-carousel-controller-right" onClick={onRightClick}>
                    <Icon type="arrow-right"/>
                </button>
            </div>
        );
    }
}