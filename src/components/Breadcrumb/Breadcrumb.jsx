import React, { Children, cloneElement } from 'react';
import PropTypes from '../../base/prop-types';

const Breadcrumb = props => {
    const { children, separator, routes } = props;
    const count = Children.count(children);
    return (
        <ul className="cmr-breadcrumb">
            {Array.isArray(routes) ?
                routes.map(({href, label}, i) => {
                    return (
                        <Item key={`cmr-breadcrumb-item-${i}`} href={href} separator={separator} isLast={i === routes.length - 1}>
                            {label}
                        </Item>
                    );
                }):  
                Children.map(children, (c, i) => {
                    return cloneElement(c, {
                        ...c.props,
                        key: `cmr-breadcrumb-item-${i}`,
                        separator,
                        isLast: i === count - 1
                    });
                })
            }
        </ul>
    );
};

const Item = ({children, separator, href, isLast, render}) => {
    let template;
    if(typeof render === 'function'){
        template = render();
    }else{
        template = (
            <li className="cmr-breadcrumb-item">
                {!isLast ? 
                    <a href={href} className="cmr-breadcrumb-item-link">{children}</a> : 
                    <span className="cmr-breadcrumb-item-link">{children}</span>
                }
                <span className="cmr-breadcrumb-item-separator">{separator}</span>
            </li>
        );
    }
    return template;
};

Breadcrumb.propTypes = {
    separator: PropTypes.string,
    routes: PropTypes.array,
    itemRender: PropTypes.func
};

Breadcrumb.defaultProps = {
    separator: '/'
};

export default Breadcrumb;
export {
    Item
};