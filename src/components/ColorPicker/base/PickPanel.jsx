import React from 'react';
import PropTypes from '../../../base/prop-types';
import HueSlider from './HueSlider';
import AlphaSlider from './AlphaSlider';
import BaseComponent from '../../../base/BaseComponent';
import Color from '../color';
import { Drag } from '../../_DnD';
import { getOffset} from '../../../base/utils/dom';
import Input from '../../Input';

export default class PickPanel extends BaseComponent {

    static propTypes = {
        color: PropTypes.instanceOf(Color).isRequired,
        onColorChange: PropTypes.func
    }

    static defaultProps = {
        onColorChange(){}
    }

    constructor(props: Object){
        super(props);
        this.state = {
            zoneBackground: `hsl(${props.color.toHSL().h},100%, 50%)`
        };
        this.handleCursorDown = this.handleCursorDown.bind(this);
        this.handleCursorMove = this.handleCursorMove.bind(this);
        this.handleHueChange = this.handleHueChange.bind(this);
        this.handleAlphaChange = this.handleAlphaChange.bind(this);
    }

    saveRefBound(key: String): void{
        return (node: HTMLElement) => {
            if(node){
                this[key] = node.getBoundingClientRect();
            }
        };
    }

    componentDidMount() {
        this.zoneBound = getOffset(this.refs.zone);
        this.cursorSize = this.refs.cursor.offsetWidth;
        this.updatePositionByColor(this.props.color);
    }

    componentWillReceiveProps(nextProps) {
        this.updatePositionByColor(nextProps.color);
    }

    componentWillUnmount() {
        this.handleCursorMouseDown = null;
        this.handleCursorMove = null;
        this.handleCursorRelease = null;
        this.handleHueChange = null;
    }
    
    updatePositionByColor(color: Color){
        const { hue, saturation, value } = color;
        const { offsetWidth, offsetHeight } = this.zoneBound;
        const w = offsetWidth - this.cursorSize;
        const h = offsetHeight - this.cursorSize;
        this.setState({
            cursorX: saturation * w / 100,
            cursorY: (100 - value) * h / 100,
        });
    }
    
    handleHueChange(color: Color) {
        this.setState({
            zoneBackground: `hsl(${color.toHSL().h}, 100%, 50%)`
        }, () => {
            this.updatePositionByColor(color);
            this.props.onColorChange(color);
        });
    }

    handleAlphaChange(color: Color) {
        this.forceUpdate(() => {
            this.updatePositionByColor(color);
            this.props.onColorChange(color);
        });
    }

    handleCursorDown(){
        this.zoneBound = getOffset(this.refs.zone);
        this.cursorSize = this.refs.cursor.offsetWidth;
        this.forceUpdate();
    }

    handleCursorMove(x: Number, y: Number){
        const { color, onColorChange } = this.props;
        const { offsetWidth: zoneWidth, offsetHeight: zoneHeight, offsetLeft: zoneLeft, offsetTop: zoneTop } = this.zoneBound;
        color.saturation = x / (zoneWidth - this.cursorSize) * 100;
        color.value = 100 - y / (zoneHeight - this.cursorSize) * 100;
        onColorChange(color);
    }

    handleTextChange(){

    }

    render(): React.ReactElement{
        const { color } = this.props;
        const { cursorX, cursorY, zoneBackground } = this.state;
        const { offsetLeft: zoneLeft, offsetWidth: zoneWidth, offsetTop: zoneTop, offsetHeight: zoneHeight } = this.zoneBound || {};
        const { r, g, b } = color.toRGB();
        return (
            <div className="cmr-colorpicker-panel">
                <div className="cmr-colorpicker-pickzone" ref="zone" style={this.styles({
                    backgroundColor: zoneBackground
                })}>
                    <div className="cmr-colorpicker-pickzone-white cmr-colorpicker-pickzone-cloak"></div>
                    <div className="cmr-colorpicker-pickzone-black cmr-colorpicker-pickzone-cloak"></div>
                    <Drag 
                        minX={-this.cursorSize/2} 
                        minY={-this.cursorSize/2} 
                        maxX={zoneWidth - this.cursorSize/2} 
                        maxY={zoneHeight - this.cursorSize/2} 
                        startX={zoneLeft} 
                        startY={zoneTop} 
                        onMouseMove={this.handleCursorMove}
                        onMouseDown={this.handleCursorDown}
                        x={cursorX}
                        y={cursorY}
                    >
                        <span className="cmr-colorpicker-cursor" ref="cursor"/>                    
                    </Drag>
                </div>
                <HueSlider mode="vertical" color={color} onHueChange={this.handleHueChange} />
                <AlphaSlider color={color} onAlphaChange={this.handleAlphaChange} />
                <div className="cmr-colorpicker-control">
                    <div className="cmr-colorpicker-control-item">
                        <Input readOnly size="small" value={r}/>
                        <div className="cmr-colorpicker-control-item-label">R</div>
                    </div>
                    <div className="cmr-colorpicker-control-item">
                        <Input readOnly size="small" value={g}/>
                        <div className="cmr-colorpicker-control-item-label">G</div>
                    </div>
                    <div className="cmr-colorpicker-control-item">
                        <Input readOnly size="small" value={b}/>
                        <div className="cmr-colorpicker-control-item-label">B</div>
                    </div>
                    <div className="cmr-colorpicker-control-item">
                        <Input readOnly size="small" value={color.alpha.toFixed(4)}/>
                        <div className="cmr-colorpicker-control-item-label">Alpha</div>
                    </div>   
                </div>
            </div>
        );
    }
}