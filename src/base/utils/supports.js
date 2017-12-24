const result = {};
const dom = document.createElement('cmr');

const transitionEventMap = {
    transition: 'transitionend',
    WebkitTransition: 'webkitTransitionEnd',
    MozTransition: 'mozTransitionEnd',
    OTransition: 'oTransitionEnd',
    msTransitionend: 'MSTransitionEnd',
};
const animationEventMap = {
    animation: 'animationend',
    WebkitAnimation: 'webkitAnimationEnd',
    MozAnimation: 'mozAnimationEnd',
    OAnimation: 'oAnimationEnd',
    msAnimationEnd: 'MSAnimationEnd',
};
const transformMap = [ 'transform', 'webkitTransform', 'mozTransform', 'oTransform', 'msTransform'];

export default function support(): Object{
    if(!('transition' in result)){
        for(const key in transitionEventMap){
            if(transitionEventMap.hasOwnProperty(key)){
                if(key in dom.style){
                    result['transition'] = key;
                    result['transitionEnd'] = transitionEventMap[key];
                    break;
                }
            }
        }
        for(const key in animationEventMap){
            if(animationEventMap.hasOwnProperty(key)){
                if(key in dom.style){
                    result['animation'] = key;
                    result['animationEnd'] = animationEventMap[key];
                    break;
                }
            }
        }
        for(const key of transformMap){
            if(key in dom.style){
                result['transform'] = key;
                break;
            }
        }
    }
    return result;
}