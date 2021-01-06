import React from 'react';
import {Link} from 'react-router-dom';
const Navbar = () => {
    const Links=[
        {to:'/',text:'Home'},
        {to:'/info',text:'info'}
    ]
    return (
        <div>
            <ul style={{display:'flex'}}>
               {
                   Links.map(item=>(
                       <li style={{marginLeft:20,marginRight:20}}><Link to={item.to}>{item.text}</Link></li>
                   )

                   )
               }
            </ul>
        </div>
    )
}

export default Navbar;
