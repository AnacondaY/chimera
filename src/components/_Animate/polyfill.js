const supportedAnimateFrame = typeof window.requestAnimationFrame !== 'undefined';
const prefixs = ['moz', 'webkit', 'ms'];

function requestAnimationFramePolyfill(){
    let last = 0;
    return (callback: Function) => {
        const cur = Date.now();
        const timeout = Math.max(0, 17 - ( cur - last ));
        const frameId = window.setTimeout(() => {
            callback && callback();
        }, timeout);
        last = timeout + cur;
        return frameId;
    };
}

function cancelAnimationFramePolyfill(){
    return (id: Number) => {
        window.clearTimeout(id);
    };
}

export function getRequestFrame(): Function{
    if(!window){
        return () => {};
    }
    if(window.requestAnimationFrame){
        return window.requestAnimationFrame;
    }
    const targetPrefix = prefixs.filter(prefix => {
        return `${prefix}RequestAnimationFrame` in window;
    })[0];
    if(targetPrefix){
        return window[`${targetPrefix}RequestFrame`];
    }
    return requestAnimationFramePolyfill();
}

export function getCancelFrame(): Function{
    if(!window){
        return () => {};
    }
    if(window.cancelAnimationFrame){
        return window.cancelAnimationFrame;
    }
    const targetPrefix = prefixs.filter(prefix => {
        return `${prefix}CancelAnimationFrame` in window;
    })[0];
    if(targetPrefix){
        return window[`${targetPrefix}CancelAnimationFrame`];
    }
    return cancelAnimationFramePolyfill();
}