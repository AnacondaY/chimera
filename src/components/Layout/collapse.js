import React from 'react';
import BaseComponent from '../../base/BaseComponent';
export default function(options){
    const { onCollapse } = options;
    return WrappedComponent => {
        return class EnhancedSider extends BaseComponent {
            constructor(props: Object){
                super(props);
                this.state = {
                    collapsed: false
                };
            }

            toggle(){    
                this.setState(({collapsed}) => {
                    return {
                        collapsed: !collapsed
                    };
                }, () => {
                    typeof onCollapse === 'function' && onCollapse(this.state.collapsed);
                });
            }

            render(){
                const collapsed = this.state.collapsed;
                const cmrCollapse = {
                    collapsed,
                    toggleSider: this.toggle.bind(this)
                };
                return <WrappedComponent cmrCollapse={cmrCollapse}/>;
            }
        };
    };
}