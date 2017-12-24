import React from 'react';
import PropTypes from '../../base/prop-types';
import PickerPanel from './base/PickPanel';
import BaseComponent from '../../base/BaseComponent';
import Color from './color';
import Popover from '../_Popover';
import Animate from '../_Animate';
import { getOffset } from '../../base/utils/dom';

export default class ColorPicker extends BaseComponent {
    
    static propTypes = {
        showAlphaSlider: PropTypes.bool,
        onColorPick: PropTypes.func,
        onColorChange: PropTypes.func,
        onReset: PropTypes.func
    }

    static defaultProps = {
        showAlphaSlider: true,
        onColorPick(){},
        onColorChange(){},
        onReset(){}
    }

    constructor(props: Object) {
        super(props);
        const color = new Color(0 ,100 ,100);
        const {r, g, b} = color.toRGB();
        this.state = {
            color,
            showPickPanel: false,
            patchBackground: `rgba(${r},${g},${b},1)`
        };
        this.handleColorChange = this.handleColorChange.bind(this);
        this.handleDropdown = this.handleDropdown.bind(this);
        this.beforeClose = this.beforeClose.bind(this);
    }

    handleColorChange(color: Color){
        const { r, g, b } = color.toRGB();
        this.setState({
            patchBackground: `rgba(${r}, ${g}, ${b}, ${color.alpha})`
        });
    }

    handleColorPick(){
        this.setState({
            showPickPanel: false
        });
    }

    beforeClose(node: HTMLElement, closePortal: Function){
        Animate.collapse(node.childNodes[0], false, () => {
            closePortal();
            this.setState({
                showPickPanel: false
            });
        });
    }

    handleDropdown(){
        this.setState(prevState => ({
            showPickPanel: !prevState.showPickPanel
        }));  
    }

    handleOpen(node: HTMLElement){
        const { offsetLeft, offsetTop, offsetHeight } = getOffset(this.refs.trigger);
        node.childNodes[0].style.top = offsetTop + offsetHeight;
        node.childNodes[0].style.left = offsetLeft;
    }

    handleClose(){
        this.setState({
            showPickPanel: false
        });
    }

    render(){
        const { showAlphaSlider } = this.props;
        const { color, showPickPanel, patchBackground } = this.state;
        return (
            <div className="cmr-colorpicker" ref="trigger">
                <div className="cmr-colorpicker-dropdown" onClick={this.handleDropdown}>
                    <div className="cmr-colorpicker-dropdown-patch" style={{
                        background: patchBackground
                    }}/>
                    <span className="cmr-colorpicker-dropdown-arrow" />
                </div>
                <Popover 
                    visible={showPickPanel} 
                    onOpen={this.handleOpen.bind(this)} 
                    beforeClose={this.beforeClose.bind(this)}
                    escToClose 
                    outsideClickToClose
                >
                    <Animate active={showPickPanel} effect="collapse">
                        <PickerPanel color={color} onColorChange={this.handleColorChange} />
                    </Animate>        
                </Popover>
            </div>
        );
    }

}