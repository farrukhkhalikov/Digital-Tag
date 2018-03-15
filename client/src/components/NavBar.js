import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from "styled-components"

const NavWrapper = styled.div`
text-align: center;
background-color: rgb(105, 155, 200);
height: 75px;
margin-bottom: 20px;
`

class NavBar extends Component {
    render() {
        return (
            <NavWrapper>
                <div>
                    
                        <a href='/new'>Create a New FLight</a>
                        <br />
                        <a href='/'>Home</a>
                    

                </div>
            </NavWrapper>
        );
    }
}

export default NavBar;

// background-image: url("#");