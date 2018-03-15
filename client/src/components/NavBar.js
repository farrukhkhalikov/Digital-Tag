import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class NavBar extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><a href='/new'>Create a New FLight</a></li>
                    <li><a href='/'>Home</a></li>
                </ul>
                
            </div>
        );
    }
}

export default NavBar;