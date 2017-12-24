import cssAnimation from '../cssAnimate';
import { getCancelFrame, getRequestFrame } from '../polyfill';

const requestFrame = getRequestFrame();
const cancelFrame = getCancelFrame();

export default function zoom(dom: HTMLElement, active: Boolean, done?: Function){
    let frameId;
    cssAnimation(dom, 'cmr-animation-zoom', {
        onEnter(){
            dom.style.display = 'block';            
            if(!active){
                dom.style.transform = 'scale(1.0)';
                dom.style.opacity = 1;
            }else{
                dom.style.transform = 'scale(0)';
                dom.style.opacity = 0;
            }
        },
        onActive(){
            if(frameId){
                cancelFrame(frameId);
            }
            frameId = requestFrame(() => {
                dom.style.transform = `scale(${active ? 1 : 0})`;
                dom.style.opacity = active ? 1 : 0;
            });
        },
        onLeave(){
            if(frameId){
                cancelFrame(frameId);
            }
            dom.style.transform = '';
            dom.style.opacity = '';
            if(!active){
                dom.style.display = 'none';
            }
            done && done(dom);
        }
    });
}