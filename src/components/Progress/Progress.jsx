import React from 'react';
import PropTypes from '../../base/prop-types';
import BaseComponent from '../../base/BaseComponent';

export default class Progress extends BaseComponent {

    static propTypes = {
        mode: PropTypes.oneOf(['line', 'circle']).isRequired,
        progress: PropTypes.number.isRequired,
        status: PropTypes.oneOf(['success', 'error', 'processing', 'paused', 'waiting']),
        outside: PropTypes.bool,
        width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        diameter: PropTypes.number,
        strokeWidth: PropTypes.number,
        template: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
    }

    static defaultProps = {
        mode: 'line',
        progress: 30,
        status: 'processing',
        outside: false,
        width: '100%',
        strokeWidth:6,
        diameter:120,
    }

    strokeMap = {
        'paused': '#fac525',
        'success': '#20b96d',
        'error': '#f05a5a',
        'processing':'#1b98f3',
        'trace':'rgba(0, 0, 0, .35)'
    }

    constructor(props: Object) {
        super(props);
    }

    relativeStrokeWidth() {
        const { strokeWidth, diameter } = this.props;
        return strokeWidth / diameter * 100;
    }

    trackPath() {
        const r = parseInt(50 - this.relativeStrokeWidth());
        return `M 50 50 m 0 -${r} a ${r} ${r} 0 1 1 0 ${r * 2} a ${r} ${r} 0 1 1 0 -${r * 2}`;
    }

    perimeter() {
        const r = parseInt(50 - this.relativeStrokeWidth());
        return 2 * Math.PI * r;
    }

    circleStyle() {
        const perimeter = this.perimeter();
        return {
            strokeDasharray: `${perimeter}px, ${perimeter}px`,
            strokeDashoffset: (1 - this.props.progress / 100) * perimeter + 'px',
            transition: 'stroke-dashoffset 0.6s ease 0s, stroke 0.6s ease'
        };
    }

    stroke() {
        let ret = null;
        switch (this.props.status) {
        case 'success':
            ret = '#13ce66';
            break;

        }
        return ret;
    }

    renderTemplate(progress: Number, status: String): React.ReactNode | String{
        const template = this.props.template;
        if(template){
            if(typeof template === 'function'){
                return template(progress, status);
            }else{
                return template;
            }
        }
        return `${progress}%`;
    }

    renderCircle() {
        const { status, progress, strokeWidth, diameter } = this.props;
        return (
            <div className={this.classNames({
                'cmr-progress': true,
                'cmr-progress-circle': true,
                [`cmr-progress-${status}`]:true
            })} style={this.styles({width: diameter, height: diameter})}>
                <svg viewBox="0 0 100 100">
                    <path
                        d={this.trackPath()}
                        strokeWidth={strokeWidth}
                        fill="none"
                        strokeLinecap="round"
                        stroke={this.strokeMap['trace']}
                    >
                    </path>
                    <path
                        d={this.trackPath()}
                        strokeWidth={strokeWidth}
                        fill="none"
                        strokeLinecap="round"
                        style={this.circleStyle()}
                        stroke={this.strokeMap[status]}
                    >
                    </path>
                </svg>
                <span className="cmr-progress-tip">{this.renderTemplate(progress, status)}</span>
            </div>
        );
    }

    renderLine() {
        const { status, outside, width, progress } = this.props;
        return (
            <div className={this.classNames({
                'cmr-progress': true,
                'cmr-progress-line': true,
                [`cmr-progress-${status}`]: true,
                [`cmr-progress-${outside ? 'outside': 'inside' }`]: true
            })} style={{
                width
            }}>
                <div className="cmr-progress-bar">
                    <div className="cmr-progress-bar-outer">
                        <div className="cmr-progress-bar-inner" style={this.styles({ width: `${progress}%` })}>
                            {!outside && <span className="cmr-progress-tip">{this.renderTemplate(progress, status)}</span>}
                        </div>
                    </div>
                </div>
                {outside && <span className="cmr-progress-tip">{this.renderTemplate(progress, status)}</span>}
            </div>
        );
    }

    render() {
        const { mode } = this.props;
        if (mode === 'circle') {
            return this.renderCircle();
        } else if (mode === 'line') {
            return this.renderLine();
        }
    }

}