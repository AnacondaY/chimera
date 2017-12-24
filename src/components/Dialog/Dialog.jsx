import React from 'react';
import PropTypes from '../../base/prop-types';
import BaseComponent from '../../base/BaseComponent';
import Icon from '../Icon';
import Popover from '../_Popover';
import Animate from '../_Animate';

export default class Dialog extends BaseComponent {
    
    static propTypes = {
        visible: PropTypes.bool,
        title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
        footer: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
        closable: PropTypes.bool,
        width: PropTypes.number,
        onVisibleChange: PropTypes.func
    }

    static defaultProps = {
        visible: false,
        closable: true,
        width: 360
    }

    constructor(props: Object) {
        super(props);
        this.state = {
            visible: props.visible
        };
        this.close = this.close.bind(this);
    }

    close(){
        this.setState({
            visible: false
        }, () => {
            typeof this.props.onVisibleChange === 'function' && this.props.onVisibleChange(this.state.visible);
        });
    }

    handleModalClose(evt){
        if(!this.refs.main.contains(evt.target)){
            this.close();
        }
    }

    focus(){
        if(this.refs.root){
            this.refs.root.focus();
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            visible: nextProps.visible
        }, () => {
            typeof this.props.onVisibleChange === 'function' && this.props.onVisibleChange(nextProps.visible);
        });    
    }

    componentDidUpdate(prevProps, prevState) {
        this.focus();
    }
    
    render() {
        const { closable, children, footer, title, width } = this.props;
        const visible = this.state.visible;
        return (
            <Popover 
                visible={visible}
                escToClose
                onClose={this.close}
            >
                <div className={this.classNames({
                    'cmr-dialog': true,
                    'cmr-dialog-has-footer': !!footer,
                    'cmr-dialog-has-header': !!title
                })} tabIndex={-1} ref="root">
                    <div className="cmr-dialog-mask"/>
                    <div className="cmr-dialog-wrapper" onClick={this.handleModalClose.bind(this)}>
                        <Animate active={visible} effect="zoom">
                            <div style={{
                                width
                            }} className={this.classNames({
                                'cmr-dialog-main': true,
                                'cmr-dialog-has-footer': footer
                            })} ref="main">
                                {title && 
                                    <div className="cmr-dialog-header">
                                        <span className="cmr-dialog-title">{title}</span>
                                        {closable && 
                                            <span onClick={this.close} className="cmr-dialog-close">
                                                <Icon type="close"/>
                                            </span>
                                        }
                                    </div>
                                }
                                <div className="cmr-dialog-body">{children}</div>
                                {footer && <div className="cmr-dialog-footer">{footer}</div>}
                            </div>
                        </Animate>
                    </div>
                </div>
            </Popover>
        );
    }
}