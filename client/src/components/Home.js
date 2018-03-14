import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'
import UserList from 'styled-components'


class Home extends Component {
    render() {
        return (
            <Container>
                <div>
                    <img
                        src=""
                        alt="" className="main-img" />
                    <div className="models-container">
                        <h1>Flights list</h1>
                        
                        <div>
                            <Link to="/flight">Flight</Link>
                        </div>
                       
                    </div>
                </div>
            </Container>
        )
    }
}

export default Home


//background from codepen. User Taylor Vowell
const Container = styled.div`
  font-family: 'Lato', sans-serif;
  font-family: 'Playfair Display', serif;
  font-weight: 300;
    display: flex;
    justify-content: center;
    width:100vw;
    height:100vh;
    background: rgb(105, 155, 200);
    background: -moz - radial - gradient(top left, ellipse cover, rgba(105, 155, 200, 1) 0 %, rgba(181, 197, 216, 1) 57 %);
    background: -webkit - gradient(radial, top left, 0px, top left, 100 %, color - stop(0 %, rgba(105, 155, 200, 1)), color - stop(57 %, rgba(181, 197, 216, 1)));
    background: -webkit - radial - gradient(top left, ellipse cover, rgba(105, 155, 200, 1) 0 %, rgba(181, 197, 216, 1) 57 %);
    background: -o - radial - gradient(top left, ellipse cover, rgba(105, 155, 200, 1) 0 %, rgba(181, 197, 216, 1) 57 %);
    background: -ms - radial - gradient(top left, ellipse cover, rgba(105, 155, 200, 1) 0 %, rgba(181, 197, 216, 1) 57 %);
    background: radial - gradient(ellipse at top left, rgba(105, 155, 200, 1) 0 %, rgba(181, 197, 216, 1) 57 %);
    filter: progid: DXImageTransform.Microsoft.gradient(startColorstr = '#699bc8', endColorstr = '#b5c5d8', GradientType = 1);
    h1 {
        font-family: 'Special Elite', cursive, bold;
        padding-top: 50px;
    }
    a{
    text-decoration: none;
    color: white;
    font-size: 25px;
    z-index: auto;
    &:hover {
    text-shadow: none;
    text-shadow:2px 2px 2px #000000;
    }
    }
`


