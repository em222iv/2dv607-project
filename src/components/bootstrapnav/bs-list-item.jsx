import React from 'react';
import { Link } from 'react-router';

class BSListItem extends React.Component {
    render(){
        let props = this.props,
            title = props.link.title,
            href = props.link.href || '',
            children = props.link.children,
            List = this.props.config.components.List;

        if(children && children.length){
            return (
                <li className='dropdown'>
                    <Link to={href} className='dropdown-toggle' data-toggle='dropdown'>
                        {title} <span className="caret"></span>
                    </Link>
                    <List links={children} />
                </li>
            );
        }
        return (
            <li>
                <Link to={href}>{title}</Link>
            </li>
        );
    }
}

export default BSListItem;
