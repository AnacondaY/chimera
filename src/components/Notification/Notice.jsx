import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import BaseComponent from '../../base/BaseComponent';
import Icon from '../Icon';

export default class Notice extends BaseComponent {

    static typeMap = {
        'success': 'success',
        'info': 'warning',
        'warning': 'warning',
        'error': 'error'
    }

    static propTypes = {
        top: PropTypes.number,
        title: PropTypes.string,
        content: PropTypes.string,
        duration: PropTypes.number,
        closable: PropTypes.bool,
        type: PropTypes.oneOf(['success', 'error', 'info', 'warning'])
    }

    static defaultProps = {
        duration: 5000,
        closable: true,
        top:0
    }

    constructor(props: Object){
        super(props);
        this.state = {
            visible: false
        };
        this.clearTimer = this.clearTimer.bind(this);
        this.startTimer = this.startTimer.bind(this);
        this.shotdown = this.shotdown.bind(this);
    }

    componentDidMount() {
        this.setState({
            visible: true
        });
        this.startTimer();
    }

    startTimer(){
        const duration = this.props.duration;
        if(duration){
            this.timer = setTimeout(() => {
                this.shotdown();
            }, duration);
        }
    }
    
    shotdown(){
        this.clearTimer();
        this.setState({
            visible: false
        }, () => {
            this.props.onShotdown();
        });
    }

    clearTimer(){
        clearTimeout(this.timer);
    }

    render(){
        const { top, title, content, closable, type } = this.props;
        return (
            <CSSTransition in={this.state.visible} timeout={500} classNames="slide">
                <div className={this.classNames({
                    'cmr-notice': true,
                    [`cmr-notice-${type}`]: true
                })}
                    onMouseEnter={this.clearTimer}
                    onMouseLeave={this.startTimer}
                    style={this.styles({
                        top
                    })}
                >
                    {type && 
                        <div className="cmr-notice-icon">
                            <Icon type={Notice.typeMap[type]} />
                        </div>
                    }
                    <div className="cmr-notice-body">
                        <h5 className="cmr-notice-title">{title}</h5>
                        <p className="cmr-notice-content">{content}</p>
                    </div>
                    {closable && <a onClick={this.shotdown} className="cmr-notice-close" role="button"><Icon type="close"/></a>}
                </div>
            </CSSTransition>
        );
    }

}