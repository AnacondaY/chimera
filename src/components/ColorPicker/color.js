

export default function Color(h, s, v, a = 1){
    this._hue = h;
    this._saturation = s;
    this._value = v;
    this._alpha = a;
}

Color.prototype = {
    constructor: Color,
    INT_HEX_MAP:{
        10:'A',
        11:'B',
        12:'C',
        13:'D',
        14:'E',
        15:'F'
    },
    _getBoundary(value: Number | String, max: Number){
        value = Math.min(max, Math.max(0, parseFloat(value)));
        // Handle floating point rounding errors
        if (Math.abs(value - max) < 0.000001) {
            return 1;
        }
        // Convert into [0, 1] range if it isn't already
        return value % max / parseFloat(max);
    },
    _getHexByInt(num: Number){
        const n = Math.min(Math.round(num), 255);
        const h = Math.floor(n / 16);
        const l = num % 16;
        return `${this.INT_HEX_MAP[h] || h}${this.INT_HEX_MAP[l] || l}`;
    },
    format(fmt: 'hex' | 'hsv' | 'hsl' | 'rgb' | Function): String{
        const {r, g, b} = this.toRGB();
        switch(fmt){
        default:
        case 'hex':
            return `#${this._getHexByInt(r)}${this._getHexByInt(g)}${this._getHexByInt(b)}`;
        case 'hsv':
            const {h, s, v} = this.toHSV();
            return `hsv(${h}, ${s}, ${v})`;
        case 'hsl':
            const {h: _h, s: _s, l} = this.toHSL();
            return `hsl(${_h}, ${_s}, ${l})`;
        case 'rgb':
            return `rgb(${r}, ${g}, ${b})`;
        }
    },
    toHSV(): Object{
        return {
            h: this._hue,
            s: this._saturation,
            v: this._value
        };
    },
    toHSL(): Object{
        let { _hue: h, _saturation: s, _value: v } = this;
        s /= 100;
        v /= 100;
        let sl;
        let l;
        l = (2 - s) * v;
        sl = s * v;
        sl /= l < 1 ? 1 : 2 - l;
        sl = sl || 0;
        l /= 2;
        return {
            h,
            s: sl,
            l
        };
    },
    toRGB(): Object{
        let h = this._getBoundary(this._hue, 360) * 6;
        let s = this._getBoundary(this._saturation, 100);
        let v = this._getBoundary(this._value, 100);
        const i = Math.floor(h);
        const f = h - i;
        const p = v * (1 - s);
        const q = v * (1 - f * s);
        const t = v * (1 - (1 - f) * s);
        const mod = i % 6;
        const r = [v, q, p, p, t, v][mod];
        const g = [t, v, v, q, p, p][mod];
        const b = [p, p, t, v, v, q][mod];

        return {
            r: Math.round(r * 255),
            g: Math.round(g * 255),
            b: Math.round(b * 255)
        };
    }
};
Object.defineProperties(Color.prototype, {
    hue:{
        set(value){
            if(value < 0){
                this._hue = 0;
            }else if(value > 360){
                this._hue = 360;
            }else{
                this._hue = value;
            }
        },
        get(){
            return this._hue;
        }
    },
    saturation:{
        set(value){
            if(value < 0){
                this._saturation = 0;
            }else if(value > 100){
                this._saturation = 100;
            }else{
                this._saturation = value;
            }
        },
        get(){
            return this._saturation;
        }
    },
    value:{
        set(value){
            if(value < 0){
                this._value = 0;
            }else if(value > 100){
                this._value = 100;
            }else{
                this._value = value;
            }
        },
        get(){
            return this._value;
        }
    },
    alpha:{
        set(value){
            if(value > 1){
                value = 1;
            }else if(value < 0){
                value = 0;
            }
            this._alpha = value;
        },
        get(){
            return this._alpha;
        }
    }
});