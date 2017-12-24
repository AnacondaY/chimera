export function addClass(dom: Element, className: String): void{
    if(dom.classList){
        dom.classList.add(className);
    }else{
        dom.className = `${dom.className} ${className}`;
    }
}

export function removeClass(dom: Element, className: String): void {
    if(dom.classList){
        dom.classList.remove(className);
    }else{
        let clsname = dom.className.split(' ');
        const index = clsname.indexOf(className);
        if(index !== -1){
            clsname.splice(index, 1);
        }
        dom.className = `${clsname.join(' ')}`;
    }
}

export function hasClass(dom: Element, className: String): Boolean {
    return dom.classList ? dom.classList.contains(className) : dom.className.split(' ').indexOf(className) !== -1;
}

export function getOffset(el: HTMLElement): Object{
    let { offsetLeft, offsetTop, offsetHeight, offsetWidth } = el;
    while(el.offsetParent){
        offsetLeft += el.offsetParent.offsetLeft;
        offsetTop += el.offsetParent.offsetTop;
        el = el.offsetParent;
    } 
    return {
        offsetLeft,
        offsetTop,
        offsetWidth,
        offsetHeight
    };
}