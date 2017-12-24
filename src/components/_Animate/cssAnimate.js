import animateSupport from '../../base/utils/supports';

const noop = () => {};
const { transition, transitionEnd } = animateSupport();

export default function cssAnimation(dom: HTMLElement, animationName: String| Object, hooks?: Object): void{
    const { onEnter = noop, onActive = noop, onLeave = noop } = hooks;
    const classList = dom.className.split(' ');
    
    const endListener = evt => {
        if(dom.frameId){
            clearTimeout(dom.frameId);
            dom.frameId = null;
        }
        const classIndex = classList.indexOf(animationName);
        if(classIndex !== -1){
            classList.splice(classIndex, 1);
        }
        const activeClassIndex = classList.indexOf(`${animationName}-active`);        
        if(activeClassIndex !== -1){
            classList.splice(activeClassIndex, 1);
        }
        dom.className = classList.join(' ');
        dom.removeEventListener(transitionEnd, endListener);
        onLeave();
    };

    dom.addEventListener(transitionEnd, endListener);

    onEnter();
    classList.push(animationName);
    dom.className = classList.join(' ');

    dom.frameId = setTimeout(() => {
        classList.push(`${animationName}-active`);
        dom.className = classList.join(' ');
        onActive();
    }, 30);

}