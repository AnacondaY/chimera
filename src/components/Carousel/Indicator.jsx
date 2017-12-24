import React from 'react';
import PropTypes from '../../base/prop-types';
import BaseComponent from '../../base/BaseComponent';

export default class Indicator extends BaseComponent{

    static propTypes = {
        count: PropTypes.number.isRequired,
        activeIndex: PropTypes.number,
        onIndicatorClick: PropTypes.func
    }

    static defaultProps = {
        activeIndex: 0,
        onIndicatorClick(){}
    }

    constructor(props: Object){
        super(props);
        this.state = {
            activeIndex: props.activeIndex
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            activeIndex: nextProps.activeIndex
        });
    }
    
    handleItemClick(index: Number){
        const { onIndicatorClick } = this.props;
        this.setState({
            activeIndex: index
        }, () => {
            onIndicatorClick(index);
        });
    }

    render(){
        const { children, count } = this.props;
        return (
            <ol className="cmr-carousel-indicators">
                {new Array(count)
                    .fill(0)
                    .map((num, i) => {
                        return (
                            <li className={this.classNames({
                                'cmr-carousel-indicator':true,
                                'cmr-carousel-indicator-active': this.state.activeIndex === i
                            })} 
                            key={`cmr-carousel-indicator${i}`} 
                            onClick={() => this.handleItemClick(i)}
                            />);
                    })
                }
            </ol>
        );
    }

}