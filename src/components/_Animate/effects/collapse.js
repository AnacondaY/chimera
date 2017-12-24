import cssAnimation from '../cssAnimate';
import { getCancelFrame, getRequestFrame } from '../polyfill';

const requestFrame = getRequestFrame();
const cancelFrame = getCancelFrame();

export default function collapse(dom: HTMLElement, active: Boolean, done?: Function){
    let frameId;
    let height;
    cssAnimation(dom, 'cmr-animation-collapse', {
        onEnter(){
            dom.style.display = 'block';            
            if(!active){
                dom.style.height = `${dom.offsetHeight}px`;
                dom.style.opacity = 1;
            }else{
                height = dom.offsetHeight;
                dom.style.height = 0;
                dom.style.opacity = 0;
            }
        },
        onActive(){
            if(frameId){
                cancelFrame(frameId);
            }
            frameId = requestFrame(() => {
                dom.style.height = `${active ? height : 0}px`;
                dom.style.opacity = active ? 1 : 0;
            });
        },
        onLeave(){
            if(frameId){
                cancelFrame(frameId);
            }
            dom.style.height = '';
            dom.style.opacity = '';
            if(!active){
                dom.style.display = 'none';
            }
            done && done(dom);
        }
    });
}