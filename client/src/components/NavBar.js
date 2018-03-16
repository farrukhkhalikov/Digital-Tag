import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from "styled-components"

const NavWrapper = styled.div`
text-align: center;
background-color: rgb(105, 155, 200);
height: 75px;

`

class NavBar extends Component {
    render() {
        return (
            <NavWrapper>
                <div>

                    <Link to={'/new'}> Create a New Flight </Link>
                    <br />
                    <Link to={'/'}> Home </Link>


                </div>
            </NavWrapper>
        );
    }
}

export default NavBar;

// background-image: url("#");