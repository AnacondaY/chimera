import React from 'react';
import PropTypes from 'prop-types';
import BaseComponent from '../../base/BaseComponent';
import Icon from '../Icon';

export default class Step extends BaseComponent {
    
    static __STEP__ = true

    static propTypes = {
        icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
        title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
        description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
        status: PropTypes.oneOf(['success', 'waiting', 'processing', 'error']),
        stepIndex: PropTypes.number,
        stepCount: PropTypes.number,
        width: PropTypes.number
    }

    static defaultProps = {
        stepIndex: 0,
    }

    getStyle(): Object{
        const { stepIndex, stepCount, isVertical, compensation } = this.props;
        const ret = {};
        if(stepIndex < stepCount - 1){    
            ret[isVertical ? 'height': 'width'] = `${100/(stepCount - 1)}%`;
            ret[isVertical ? 'marginBottom' : 'marginRight'] = -Math.ceil(compensation / (stepCount - 1));
        }
        return ret;
    }
    
    componentDidMount() {
        const { title, line, body, icon } = this.refs;
        const { stepCount, compensation } = this.props;
        if(line){
            if(!this.props.isVertical){
                line.style.paddingLeft = `${title.offsetLeft + title.offsetWidth}px`;
            }else{
                line.style.paddingTop = `${body.offsetTop + body.offsetHeight}px`;
                line.style.left = `${title.offsetLeft + title.offsetWidth / 2 - icon.offsetWidth}px`;
            }
        }
    }

    componentDidUpdate(prevProps, prevState) {
        const { compensation, stepCount, isVertical } = this.props;
        const line = this.refs.line;      
        if(line){
            if(!isVertical){
                line.style.paddingRight = compensation / (stepCount - 1);   
            }else{
                line.style.paddingBottom = compensation / (stepCount - 1);
            }
        }
    }
    
    render(){
        const { icon, title, description, status, stepIndex, stepCount  , currentIndex } = this.props;
        let iconNode;
        if(typeof icon === 'string'){
            iconNode = <Icon type={icon} />;
        }else if(React.isValidElement(icon)){
            iconNode = icon;
        }else{
            iconNode = <div className="cmr-step-icon-circle">{stepIndex + 1}</div>;
        }
        return (
            <div className={this.classNames({
                'cmr-step': true,
                'cmr-step-processing': currentIndex >= stepIndex,
                [`cmr-step-${status}`]: currentIndex === stepIndex
            })}
                style={this.getStyle()}
            >
                {stepIndex + 1 !== stepCount && 
                    <div className={this.classNames({
                        'cmr-step-line': true,
                        'cmr-step-line-processing': currentIndex > stepIndex,
                        [`cmr-step-line-${status}`]: currentIndex - 1 === stepIndex
                    })} ref="line">
                        <div className="cmr-step-line-inner"></div>
                    </div>
                }
                <div className="cmr-step-icon" ref="icon">
                    { iconNode }
                </div>
                <div className="cmr-step-body" ref="body">
                    <h5 className="cmr-step-title" ref="title">{title}</h5>
                    <p className="cmr-step-description">{description}</p>
                </div>
            </div>
        );
    }

}