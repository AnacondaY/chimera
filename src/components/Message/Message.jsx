import React from 'react';
import PropTypes from '../../base/prop-types';
import CSSTransition from 'react-transition-group/CSSTransition';
import BaseComponent from '../../base/BaseComponent';
import Icon from '../Icon';

export default class Message extends BaseComponent {

    static propTypes = {
        top: PropTypes.number,
        type: PropTypes.oneOf(['success', 'info', 'warning', 'error']),
        duration: PropTypes.number,
        message: PropTypes.oneOfType([PropTypes.node, PropTypes.string])
    }

    static defaultProps = {
        duration: 3000
    }

    constructor(){
        super();
        this.state = {
            visible: false
        };
    }

    get hasType(){
        return typeof this.props.type !== 'undefined';
    }

    startTimer(){
        if(!this.props.duration) return;
        this.timer = setTimeout(() => {
            this.closeTimer();
        }, this.props.duration);
    }

    closeTimer(){
        this.setState({
            visible: false
        }, () => {
            clearTimeout(this.timer);
            this.props.close();
        });
    }

    handleEnter(node){
        node.style.top = 0;
    }

    handleEntering(node){
        node.style.top = this.props.top;
    }

    componentDidMount() {
        this.setState({
            visible: true
        }, this.startTimer);
    }    

    componentWillUnmount(){
        clearTimeout(this.timer);
    }

    render(){
        const { message, duration, type, offset } = this.props;
        return (
            <CSSTransition in={this.state.visible} timeout={500} classNames="cmr-message-slide"
                onEnter={this.handleEnter.bind(this)}
                onEntering={this.handleEntering.bind(this)}
            >
                <div className={this.classNames({
                    'cmr-message': true,
                    [`cmr-message-${type}`]: this.hasType
                })}>
                    {this.hasType &&
                        <div className="cmr-message-icon">
                            <Icon type={type !== 'info' ? type : 'warning'}/>
                        </div>
                    }
                    <div className="cmr-message-content">
                        {message}
                    </div>
                </div>
            </CSSTransition>
        );
    }

}