import React from 'react';
import {Link} from 'react-router-dom';
const Navbar = () => {
    const Links=[
        {to:'/',text:'Home'},
        {to:'/starred',text:'starred'}
    ]
    return (
        <div>
            <ul style={{display:'flex'}}>
               {
                   Links.map(item=>(
                       <li key={item.to} style={{marginLeft:20,marginRight:20}}><Link to={item.to}>{item.text}</Link></li>
                   )

                   )
               }
            </ul>
        </div>
    )
}

export default Navbar;
